<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\Controller;
use App\Models\Departement;
use App\Models\Filiere;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class FiliereController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->sendResponse(['filieres' => $this->filieres()], 'Liste des filières');
    }

    public function filieresListe($idD)
    {
        return $this->sendResponse(['filieres' => Filiere::with(['licences', 'departement'])->where('departement_id', $idD)->get()], 'Liste des filières');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function filieresAjout(Request $request, $idD)
    {
        try {
            $validator = Validator::make($request->all(), [
                'nom' => 'required',
                'abreviation' => 'required',
            ]);

            if ($validator->fails()) {
                return $this->sendError('Erreur de validation des champs.', $validator->errors(), 400);
            }

            $filiere = new Filiere();
            $filiere->nom = $request->nom;
            $filiere->abreviation = $request->abreviation;
            $filiere->departement_id = $idD;
            $filiere->save();

            return $this->sendResponse(
                ['filieres' => Filiere::with(['licences', 'departement'])->where('departement_id', $idD)->get()],
                'Filière ajoutée avec succès.'
            );
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    /**
     * Display the specified resource.
     */
    public function filieresDetail($idF)
    {
        try {
            $filiere = Filiere::with(['licences', 'departement'])->findOrFail($idF);

            if ($filiere) {
                return $this->sendResponse(['filiere' => $filiere], 'Detail de la filière');
            } else {
                return $this->sendError('Cette filière n\'existe pas', 401);
            }
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function filieresEdition(Request $request, $idD, $idF)
    {
        try {
            $filiere = Filiere::findOrFail($idF);

            if ($filiere) {

                $validator = Validator::make($request->all(), [
                    'nom' => 'required',
                    'abreviation' => 'required',
                ]);

                if ($validator->fails()) {
                    return $this->sendError('Erreur de validation des champs.', $validator->errors(), 400);
                }

                $filiere->nom = $request->nom;
                $filiere->abreviation = $request->abreviation;
                $filiere->departement_id = $idD;
                $filiere->save();

                return $this->sendResponse(
                    ['filieres' => Filiere::with(['licences', 'departement'])->where('departement_id', $idD)->get()],
                    'Filière editée avec succès.'
                );
            } else {
                return $this->sendError('Cette filières n\'existe pas', 401);
            }
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function filieresSuppression($idD, $idF)
    {
        try {
            $filiere = Filiere::findOrFail($idF);

            if ($filiere->licences->count() != 0) {
                return $this->sendError('Impossible de Supprimer car elle est liée a des licences. Veuillez supprimer tous ses licences puis réssayez.');
            }

            if ($filiere) {
                $filiere->delete();

                return $this->sendResponse(['filieres' => Filiere::where('departement_id', $idD)->get()], 'Filière supprimée avec succès.');
            } else {
                return $this->sendError('Cette filière n\'existe pas', 401);
            }
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    public function filieres()
    {
        $filieres = Filiere::with(['licences', 'departement'])->orderBy('created_at', 'desc')->get();
        return $filieres;
    }
}
