<?php

namespace App\Http\Controllers\Api\Private;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\Controller;
use App\Models\CorrigeNormal;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class CorrigeNormalController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->sendResponse(['corrige_session_normals' => $this->corrige_session_normals()], 'Liste des corriges de la seesion normal');
    }

    public function corrige_session_normal_liste($idM)
    {
        return $this->sendResponse(['corrige_session_normals' => CorrigeNormal::with(['module'])->where('module_id', $idM)->get()], 'Liste des corriges de la session normal');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function corrige_session_normals_ajout(Request $request, $idMo)
    {
        try {

            $validator = Validator::make($request->all(), [
                'nom' => 'required',
            ]);

            if ($validator->fails()) {
                return $this->sendError('Erreur de validation des champs.', $validator->errors(), 400);
            }

            $corrige_normal = new CorrigeNormal();
            $corrige_normal->nom = $request->nom;
            $corrige_normal->taille_fichier = $request->taille_fichier;
            $corrige_normal->remarque = $request->remarque;
            $corrige_normal->module_id = $idMo;
            $corrige_normal->fichier = $request->fichier;
            $corrige_normal->save();

            return $this->sendResponse(
                ['corrige_session_normals' => CorrigeNormal::with(['module'])->where('module_id', $idMo)->get()],
                'Un corrigé de la session normal a été ajouté avec succès.'
            );
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function corrige_session_normal_edition(Request $request, $idMo, $idCorrigeNormal)
    {
        try {
            $userId = Auth()->user()->id;
            $corrige_normal = CorrigeNormal::findOrFail($idCorrigeNormal);

            if ($corrige_normal) {

                $validator = Validator::make($request->all(), [
                    'nom' => 'required',
                ]);

                if ($validator->fails()) {
                    return $this->sendError('Erreur de validation des champs.', $validator->errors(), 400);
                }

                $corrige_normal->nom = $request->nom;
                $corrige_normal->taille_fichier = $request->taille_fichier;
                $corrige_normal->remarque = $request->remarque;
                $corrige_normal->fichier = $request->fichier;
                $corrige_normal->user_id = $userId;
                $corrige_normal->module_id = $idMo;
                $corrige_normal->save();

                return $this->sendResponse(
                    ['corrige_session_normals' => CorrigeNormal::with(['module'])->where('module_id', $idMo)->get()],
                    'Corrigé de session normal edité avec succès.'
                );
            } else {
                return $this->sendError('Cette session normal n\'existe pas', 401);
            }
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    public function corrige_session_normal_suppression($idMo, $idCorrigeNormal)
    {
        try {
            $corrige_normal = CorrigeNormal::findOrFail($idCorrigeNormal);

            if ($corrige_normal) {
                $corrige_normal->delete();

                return $this->sendResponse(['corrige_session_normals' => corrigeNormal::with(['module'])->where('module_id', $idMo)->get()], 'corrige de session normal supprimé avec succès.');
            } else {
                return $this->sendError('Ce corrigé de la session normal n\'existe pas', 401);
            }
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    public function corrige_session_normals()
    {
        $corrige_session_normals = CorrigeNormal::with(['module'])->orderBy('created_at', 'desc')->get();
        return $corrige_session_normals;
    }
}
