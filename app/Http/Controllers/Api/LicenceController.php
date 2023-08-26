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
        return $this->sendResponse(['licences' => Licence::with(['filiere', 'options'])->where('filiere_id', $idF)->get()], 'Liste des filieres');
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
                ['licences' => Licence::with(['filiere', 'options'])->where('filiere_id', $idF)->get()],
                'Licence ajoutée avec succès.'
            );
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    /**
     * Display the specified resource.
     */
    public function licencesDetail($idL)
    {
        try {
            $licence = Licence::with(['filiere', 'options'])->findOrFail($idL);

            if ($licence) {
                return $this->sendResponse(['licence' => $licence], 'Detail de la licence');
            } else {
                return $this->sendError('Cette licence n\'existe pas', 401);
            }
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

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
                    ['licences' => Licence::with(['filiere', 'options'])->where('filiere_id', $idF)->get()],
                    'Licence editée avec succès.'
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

            if ($licence->options->count() != 0) {
                return $this->sendError('Impossible de Supprimer car elle est liée a des options. Veuillez supprimer tous ses options puis réssayez.');
            }

            if ($licence) {
                $licence->delete();

                return $this->sendResponse(['licences' => Licence::with(['filiere', 'options'])->where('filiere_id', $idF)->get()], 'Licence supprimée avec succès.');
            } else {
                return $this->sendError('Cette licence n\'existe pas', 401);
            }
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    public function licences()
    {
        $licences = Licence::with(['filiere', 'options'])->orderBy('created_at', 'desc')->get();
        return $licences;
    }
}

