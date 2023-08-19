<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\Controller;
use App\Models\Licence;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class LicenceController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->sendResponse(['licences' => $this->licences()], 'Liste des licences');
    }

    public function licencesListe($idF)
    {
        return $this->sendResponse(['licences' => Licence::where('filiere_id', $idF)->get()], 'Liste des filieres');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function licencesAjout(Request $request, $idF)
    {
        try {
            $validator = Validator::make($request->all(), [
                'nom' => 'required',
                'abreviation' => 'required',
            ]);

            if ($validator->fails()) {
                return $this->sendError('Erreur de validation des champs.', $validator->errors(), 400);
            }

            $licence = new Licence();
            $licence->nom = $request->nom;
            $licence->abreviation = $request->abreviation;
            $licence->filiere_id = $idF;
            $licence->save();

            return $this->sendResponse(
                ['licences' => Licence::where('filiere_id', $idF)->get()],
                'Une licence a été ajouté avec success. Retour de la liste des licences'
            );
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    /**
     * Display the specified resource.
     */
    // public function show($idD)
    // {
    //     try {
    //         $departement = Departement::findOrFail($idD);

    //         if ($departement) {
    //             return $this->sendResponse(['departement' => $departement], 'Detail de l\'departement');
    //         } else {
    //             return $this->sendError('Cet departement n\'existe pas', 401);
    //         }
    //     } catch (Exception $e) {
    //         return response()->json($e);
    //     }
    // }

    /**
     * Update the specified resource in storage.
     */
    public function licencesEdition(Request $request, $idF, $idL)
    {
        try {
            $licence = Licence::findOrFail($idL);

            if ($licence) {

                $validator = Validator::make($request->all(), [
                    'nom' => 'required',
                    'abreviation' => 'required',
                ]);

                if ($validator->fails()) {
                    return $this->sendError('Erreur de validation des champs.', $validator->errors(), 400);
                }

                $licence->nom = $request->nom;
                $licence->abreviation = $request->abreviation;
                $licence->filiere_id = $idF;
                $licence->save();

                return $this->sendResponse(
                    ['licences' => Licence::where('filiere_id', $idF)->get()],
                    'licence edité avec succes. Retour de la liste des licences'
                );
            } else {
                return $this->sendError('Cette licence n\'existe pas', 401);
            }
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function licencesSuppression($idF, $idL)
    {
        try {
            $licence = Licence::findOrFail($idL);

            if ($licence) {
                $licence->delete();

                return $this->sendResponse(['licences' => Licence::where('filiere_id', $idF)->get()], 'licence supprimer avec succes. Retour de la liste des licences');
            } else {
                return $this->sendError('Cette licence n\'existe pas', 401);
            }
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    public function licences()
    {
        $licences = Licence::orderBy('created_at', 'desc')->get();
        return $licences;
    }
}

