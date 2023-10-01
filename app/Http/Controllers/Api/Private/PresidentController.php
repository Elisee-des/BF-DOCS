<?php

namespace App\Http\Controllers\Api\private;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\Controller;
use App\Models\President;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PresidentController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function liste_presidents($idUniversite)
    {
        $presidents = President::where('universite_id', $idUniversite)->with('universite')->orderBy('created_at', 'desc')->get();
        return $this->sendResponse(['presidents' => $presidents], 'Liste des presidents');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function president_ajout(Request $request, $idUniversite)
    {
        try {
            
            $validator = Validator::make($request->all(), [
                'nom' => 'required',
                'prenom' => 'required',
            ]);

            if ($validator->fails()) {
                return $this->sendError('Erreur de validation des champs.', $validator->errors(), 400);
            }

            $president = new President();
            $president->nom = $request->nom;
            $president->prenom = $request->prenom;
            $president->universite_id = $idUniversite;
            $president->annee = Carbon::now()->year;
            $president->save();

            return $this->sendResponse(
                ['presidents' => President::where('universite_id', $idUniversite)->with('universite')->orderBy('created_at', 'desc')->get()],
                'Président ajoutée avec succès.'
            );
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function president_edition(Request $request, $idU, $idP)
    {
        try {
            $president = President::find($idP);
            if ($president) {

                $validator = Validator::make($request->all(), [
                    'nom' => 'required',
                    'prenom' => 'required',
                ]);

                if ($validator->fails()) {
                    return $this->sendError('Erreur de validation des champs.', $validator->errors(), 400);
                }

                $president->nom = $request->nom;
                $president->prenom = $request->prenom;
                $president->annee = Carbon::now()->year;
                $president->universite_id = $idU;

                $president->save();

                return $this->sendResponse(
                    ['presidents' => President::where('universite_id', $idU)->with('universite')->orderBy('created_at', 'desc')->get()],
                    'Président editée avec succès.'
                );
            } else {
                return $this->sendError('Cette université n\'existe pas', 401);
            }
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

}
