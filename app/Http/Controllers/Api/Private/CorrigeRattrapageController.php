<?php

namespace App\Http\Controllers\Api\Private;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\Controller;
use App\Models\CorrigeRattrapage;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class CorrigeRattrapageController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->sendResponse(['corrige_session_rattrapages' => $this->corrige_session_rattrapages()], 'Liste des corriges de la seesion rattrapage');
    }

    public function corrige_session_rattrapage_liste($idM)
    {
        return $this->sendResponse(['corrige_session_rattrapages' => CorrigeRattrapage::with(['module'])->where('module_id', $idM)->get()], 'Liste des corriges de la session rattrapage');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function corrige_session_rattrapages_ajout(Request $request, $idMo)
    {
        try {

            $validator = Validator::make($request->all(), [
                'nom' => 'required',
            ]);

            if ($validator->fails()) {
                return $this->sendError('Erreur de validation des champs.', $validator->errors(), 400);
            }

            $corrige_rattrapage = new CorrigeRattrapage();
            $corrige_rattrapage->nom = $request->nom;
            $corrige_rattrapage->taille_fichier = $request->taille_fichier;
            $corrige_rattrapage->remarque = $request->remarque;
            $corrige_rattrapage->module_id = $idMo;
            $corrige_rattrapage->fichier = $request->fichier;
            $corrige_rattrapage->save();

            return $this->sendResponse(
                ['corrige_session_rattrapages' => CorrigeRattrapage::with(['module'])->where('module_id', $idMo)->get()],
                'Un corrigé de la session rattrapage a été ajouté avec succès.'
            );
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function corrige_session_rattrapage_edition(Request $request, $idMo, $idCorrigeRattrapage)
    {
        try {
            $corrige_rattrapage = CorrigeRattrapage::findOrFail($idCorrigeRattrapage);

            if ($corrige_rattrapage) {

                $validator = Validator::make($request->all(), [
                    'nom' => 'required',
                ]);

                if ($validator->fails()) {
                    return $this->sendError('Erreur de validation des champs.', $validator->errors(), 400);
                }

                $corrige_rattrapage->nom = $request->nom;
                $corrige_rattrapage->taille_fichier = $request->taille_fichier;
                $corrige_rattrapage->remarque = $request->remarque;
                $corrige_rattrapage->fichier = $request->fichier;
                $corrige_rattrapage->module_id = $idMo;
                $corrige_rattrapage->save();

                return $this->sendResponse(
                    ['corrige_session_rattrapages' => CorrigeRattrapage::with(['module'])->where('module_id', $idMo)->get()],
                    'Corrigé de session rattrapage edité avec succès.'
                );
            } else {
                return $this->sendError('Cette session rattrapage n\'existe pas', 401);
            }
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    public function corrige_session_rattrapage_suppression($idMo, $idCorrigeRattrapage)
    {
        try {
            $corrige_rattrapage = CorrigeRattrapage::findOrFail($idCorrigeRattrapage);

            if ($corrige_rattrapage) {
                $corrige_rattrapage->delete();

                return $this->sendResponse(['corrige_session_rattrapages' => CorrigeRattrapage::with(['module'])->where('module_id', $idMo)->get()], 'corrige de session rattrapage supprimé avec succès.');
            } else {
                return $this->sendError('Ce corrigé de la session rattrapage n\'existe pas', 401);
            }
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    public function corrige_session_rattrapages()
    {
        $corrige_session_rattrapages = CorrigeRattrapage::with(['module'])->orderBy('created_at', 'desc')->get();
        return $corrige_session_rattrapages;
    }
}
