<?php

namespace App\Http\Controllers\Api\Private;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\Controller;
use App\Models\ExamenNormal;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ExamenNormalController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->sendResponse(['examen_session_normals' => $this->examen_session_normals()], 'Liste des Examens de la seesion normal');
    }

    public function examenSessionNormalListe($idM)
    {
        return $this->sendResponse(['examen_session_normals' => ExamenNormal::with(['module'])->where('module_id', $idM)->get()], 'Liste des examens de la session normal');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function examenSessionNormalnAjout(Request $request, $idMo)
    {
        try {
            $validator = Validator::make($request->all(), [
                'nom' => 'required',
            ]);

            if ($validator->fails()) {
                return $this->sendError('Erreur de validation des champs.', $validator->errors(), 400);
            }

            $examen_normal = new ExamenNormal();
            $examen_normal->nom = $request->nom;
            $examen_normal->taille_fichier = $request->taille_fichier;
            $examen_normal->remarque = $request->remarque;
            $examen_normal->module_id = $idMo;
            $examen_normal->fichier = $request->fichier;
            $examen_normal->save();

            return $this->sendResponse(
                ['examen_session_normals' => ExamenNormal::with(['module'])->where('module_id', $idMo)->get()],
                'Un examen de la session normal a été ajouté avec succès.'
            );
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function examenSessionNormalEdition(Request $request, $idMo, $idExNormal)
    {
        try {
            $examen_normal = ExamenNormal::findOrFail($idExNormal);

            if ($examen_normal) {

                $validator = Validator::make($request->all(), [
                    'nom' => 'required',
                ]);

                if ($validator->fails()) {
                    return $this->sendError('Erreur de validation des champs.', $validator->errors(), 400);
                }

                $examen_normal->nom = $request->nom;
                $examen_normal->taille_fichier = $request->taille_fichier;
                $examen_normal->remarque = $request->remarque;
                $examen_normal->fichier = $request->fichier;
                $examen_normal->module_id = $idMo;
                $examen_normal->save();

                return $this->sendResponse(
                    ['examen_session_normals' => ExamenNormal::with(['module'])->where('module_id', $idMo)->get()],
                    'Examen de session normal edité avec succès.'
                );
            } else {
                return $this->sendError('Cette session normal n\'existe pas', 401);
            }
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    public function examenSessionNormalSuppression($idMo, $idExNormal)
    {
        try {
            $examen_normal = ExamenNormal::findOrFail($idExNormal);

            if ($examen_normal) {
                $examen_normal->delete();

                return $this->sendResponse(['examen_session_normals' => ExamenNormal::with(['master', 'modules'])->where('module_id', $idMo)->get()], 'Examen de session normal supprimé avec succès.');
            } else {
                return $this->sendError('Cette examen de la session normal n\'existe pas', 401);
            }
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    public function examen_session_normals()
    {
        $examen_session_normals = ExamenNormal::with(['module'])->orderBy('created_at', 'desc')->get();
        return $examen_session_normals;
    }
}
