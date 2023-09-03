<?php

namespace App\Http\Controllers\Api\Private;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\Controller;
use App\Models\ExamenNormal;
use Illuminate\Http\Request;

class ExamenNormalController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->sendResponse(['examen_session_normals' => $this->examen_session_normals()], 'Liste des Examens de la seesion normal');
    }

    #Liste des annees en fonction des Masters
    public function anneesMasterListe($idM)
    {
        return $this->sendResponse(['annees' => Annee::with(['master', 'modules'])->where('master_id', $idM)->get()], 'Liste des années');
    }

    #Liste des annees en fonction des Options
    public function anneesOptionListe($idO)
    {
        return $this->sendResponse(['annees' => Annee::with(['option', 'modules'])->where('option_id', $idO)->get()], 'Liste des options');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function anneesMasterAjout(Request $request, $idM)
    {
        try {
            $validator = Validator::make($request->all(), [
                'nom' => 'required',
            ]);

            if ($validator->fails()) {
                return $this->sendError('Erreur de validation des champs.', $validator->errors(), 400);
            }

            $annee = new Annee();
            $annee->nom = $request->nom;
            $annee->master_id = $idM;
            $annee->save();

            return $this->sendResponse(
                ['annees' => Annee::with(['master', 'modules'])->where('master_id', $idM)->get()],
                'Une année pour ce master a été ajoutée avec succès.'
            );
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function anneesOptionAjout(Request $request, $idO)
    {
        try {
            $validator = Validator::make($request->all(), [
                'nom' => 'required',
            ]);

            if ($validator->fails()) {
                return $this->sendError('Erreur de validation des champs.', $validator->errors(), 400);
            }

            $annee = new Annee();
            $annee->nom = $request->nom;
            $annee->option_id = $idO;
            $annee->save();

            return $this->sendResponse(
                ['annees' => Annee::with(['option', 'modules'])->where('option_id', $idO)->get()],
                'L\'année pour cette option a été ajoutée avec succès.'
            );
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function anneesMasterEdition(Request $request, $idM, $idA)
    {
        try {
            $annee = Annee::findOrFail($idA);

            if ($annee) {

                $validator = Validator::make($request->all(), [
                    'nom' => 'required',
                ]);

                if ($validator->fails()) {
                    return $this->sendError('Erreur de validation des champs.', $validator->errors(), 400);
                }

                $annee->nom = $request->nom;
                $annee->master_id = $idM;
                $annee->save();

                return $this->sendResponse(
                    ['annees' => Annee::with(['master', 'modules'])->where('master_id', $idM)->get()],
                    'Année edité avec succès.'
                );
            } else {
                return $this->sendError('Cette année n\'existe pas', 401);
            }
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function anneesOptionEdition(Request $request, $idO, $idA)
    {
        try {
            $annee = Annee::findOrFail($idA);

            if ($annee) {

                $validator = Validator::make($request->all(), [
                    'nom' => 'required',
                ]);

                if ($validator->fails()) {
                    return $this->sendError('Erreur de validation des champs.', $validator->errors(), 400);
                }

                $annee->nom = $request->nom;
                $annee->option_id = $idO;
                $annee->save();

                return $this->sendResponse(
                    ['annees' => Annee::with(['option', 'modules'])->where('option_id', $idO)->get()],
                    'Année editée avec succès.'
                );
            } else {
                return $this->sendError('Cette année n\'existe pas', 401);
            }
        } catch (Exception $e) {
            return response()->json($e);
        }
    }


    /**
     * Remove the specified resource from storage.
     */
    public function anneesMasterSuppression($idM, $idA)
    {
        try {
            $annee = Annee::findOrFail($idA);

            if ($annee->modules->count() != 0) {
                return $this->sendError('Impossible de Supprimer car elle est liée a des modules. Veuillez supprimer tous ses modules puis réssayez.');
            }

            if ($annee) {
                $annee->delete();

                return $this->sendResponse(['annees' => Annee::with(['master', 'modules'])->where('master_id', $idM)->get()], 'Master supprimé avec succès.');
            } else {
                return $this->sendError('Cette année n\'existe pas', 401);
            }
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    public function anneesOptionSuppression($idO, $idA)
    {
        try {
            $annee = Annee::findOrFail($idA);

            if ($annee->modules->count() != 0) {
                return $this->sendError('Impossible de Supprimer car elle est liée a des modules. Veuillez supprimer tous modules puis réssayez.');
            }

            if ($annee) {
                $annee->delete();

                return $this->sendResponse(['annees' => Annee::with(['option', 'modules'])->where('option_id', $idO)->get()], 'Master supprimer avec succès.');
            } else {
                return $this->sendError('Cette année n\'existe pas', 401);
            }
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    public function examen_session_normals()
    {
        $examen_session_normals = ExamenNormal::all();
        return $examen_session_normals;
    }
}
