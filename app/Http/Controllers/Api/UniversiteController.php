<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\Controller;
use App\Models\Universite;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UniversiteController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->sendResponse(['universites' => $this->universites()], 'Liste des universites');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'nom' => 'required',
            ]);

            if ($validator->fails()) {
                return $this->sendError('Erreur de validation des champs.', $validator->errors(), 400);
            }

            $universite = new Universite();
            $universite->nom = $request->nom;
            $universite->save();

            return $this->sendResponse(
                ['universites' => $this->universites()],
                'Une universite a été ajouté avec success. Retour de la liste des universites'
            );
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($idU)
    {
        try {
            $universite = Universite::findOrFail($idU);

            if ($universite) {
                return $this->sendResponse(['region' => $universite], 'Detail de l\'universite');
            } else {
                return $this->sendError('Cette universite n\'existe pas', 401);
            }
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Universite $universite)
    {
        try {
            if ($universite) {

                $validator = Validator::make($request->all(), [
                    'nom' => 'required',
                ]);

                if ($validator->fails()) {
                    return $this->sendError('Erreur de validation des champs.', $validator->errors(), 400);
                }

                $universite->nom = $request->nom;
                $universite->save();

                return $this->sendResponse(
                    ['universites' => $this->universites()],
                    'universite edité avec succes. Retour de la liste des universite'
                );
            } else {
                return $this->sendError('Cette universite n\'existe pas', 401);
            }
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($idU)
    {
        try {
            $universite = Universite::findOrFail($idU);

            if ($universite) {
                $universite->delete();

                return $this->sendResponse(['universites' => $this->universites()], 'universite supprimer avec succes. Retour de la liste des universites');
            } else {
                return $this->sendError('Cette universite n\'existe pas', 401);
            }
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    public function universites()
    {
        $universites = Universite::with('departements')->get();
        return $universites;
    }
}
