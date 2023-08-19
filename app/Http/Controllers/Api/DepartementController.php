<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\Controller;
use App\Models\Departement;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class DepartementController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->sendResponse(['departements' => $this->departements()], 'Liste des departements');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'nom' => 'required',
                'universite_id' => 'required',
            ]);

            if ($validator->fails()) {
                return $this->sendError('Erreur de validation des champs.', $validator->errors(), 400);
            }

            $departement = new Departement();
            $departement->nom = $request->nom;
            $departement->universite_id = $request->universite_id;
            $departement->save();

            return $this->sendResponse(
                ['departements' => $this->departements()],
                'Un departement a été ajouté avec success. Retour de la liste des departements'
            );
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($idD)
    {
        try {
            $departement = Departement::findOrFail($idD);

            if ($departement) {
                return $this->sendResponse(['departement' => $departement], 'Detail de l\'departement');
            } else {
                return $this->sendError('Cet departement n\'existe pas', 401);
            }
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Departement $departement)
    {
        try {
            if ($departement) {

                $validator = Validator::make($request->all(), [
                    'nom' => 'required',
                    'universite_id' => 'required',
                ]);

                if ($validator->fails()) {
                    return $this->sendError('Erreur de validation des champs.', $validator->errors(), 400);
                }

                $departement->nom = $request->nom;
                $departement->universite_id = $request->universite_id;
                $departement->save();

                return $this->sendResponse(
                    ['departements' => $this->departements()],
                    'departement edité avec succes. Retour de la liste des departements'
                );
            } else {
                return $this->sendError('Cet departement n\'existe pas', 401);
            }
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($idD)
    {
        try {
            $departement = Departement::findOrFail($idD);

            if ($departement) {
                $departement->delete();

                return $this->sendResponse(['departements' => $this->departements()], 'departement supprimer avec succes. Retour de la liste des departements');
            } else {
                return $this->sendError('Cet departement n\'existe pas', 401);
            }
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    public function departements()
    {
        $departements = Departement::orderBy('created_at', 'desc')->get();
        return $departements;
    }
}
