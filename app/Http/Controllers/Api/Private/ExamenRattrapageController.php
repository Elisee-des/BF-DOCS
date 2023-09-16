<?php

namespace App\Http\Controllers\Api\Private;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\Controller;
use App\Models\ExamenRattrapage;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ExamenRattrapageController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->sendResponse(['examen_session_rattrapages' => $this->examen_session_rattrapages()], 'Liste des Examens de la seesion normal');
    }

    public function examen_session_rattrapage_liste($idM)
    {
        return $this->sendResponse(['examen_session_rattrapages' => ExamenRattrapage::with(['module'])->where('module_id', $idM)->get()], 'Liste des examens de la session normal');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function examen_session_rattrapages_ajout(Request $request, $idMo)
    {
        try {
            $validator = Validator::make($request->all(), [
                'nom' => 'required',
            ]);

            if ($validator->fails()) {
                return $this->sendError('Erreur de validation des champs.', $validator->errors(), 400);
            }

            $examen_rattrapage = new ExamenRattrapage();
            $examen_rattrapage->nom = $request->nom;
            $examen_rattrapage->taille_fichier = $request->taille_fichier;
            $examen_rattrapage->remarque = $request->remarque;
            $examen_rattrapage->module_id = $idMo;
            $examen_rattrapage->fichier = $request->fichier;
            $examen_rattrapage->save();

            return $this->sendResponse(
                ['examen_session_rattrapages' => ExamenRattrapage::with(['module'])->where('module_id', $idMo)->get()],
                'Un examen de la session normal a été ajouté avec succès.'
            );
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function examen_session_rattrapage_edition(Request $request, $idMo, $idExRattrapage)
    {
        try {
            $examen_rattrapage = ExamenRattrapage::findOrFail($idExRattrapage);

            if ($examen_rattrapage) {

                $validator = Validator::make($request->all(), [
                    'nom' => 'required',
            ]);

                if ($validator->fails()) {
                    return $this->sendError('Erreur de validation des champs.', $validator->errors(), 400);
                }

                $examen_rattrapage->nom = $request->nom;
                $examen_rattrapage->taille_fichier = $request->taille_fichier;
                $examen_rattrapage->remarque = $request->remarque;
                $examen_rattrapage->fichier = $request->fichier;
                $examen_rattrapage->user_id = $request->user_id;
                $examen_rattrapage->module_id = $idMo;
                $examen_rattrapage->save();

                return $this->sendResponse(
                    ['examen_session_rattrapages' => ExamenRattrapage::with(['module'])->where('module_id', $idMo)->get()],
                    'Examen de session normal edité avec succès.'
                );
            } else {
                return $this->sendError('Cette session normal n\'existe pas', 401);
            }
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    public function examen_session_rattrapage_suppression($idMo, $idERattrapage)
    {
        try {
            $examen_rattrapage = ExamenRattrapage::findOrFail($idERattrapage);

            if ($examen_rattrapage) {
                $examen_rattrapage->delete();

                return $this->sendResponse(['examen_session_rattrapages' => ExamenRattrapage::with(['module'])->where('module_id', $idMo)->get()], 'Examen de session normal supprimé avec succès.');
            } else {
                return $this->sendError('Cette examen de la session normal n\'existe pas', 401);
            }
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    public function examen_session_rattrapages()
    {
        $examen_session_rattrapages = ExamenRattrapage::with(['module'])->orderBy('created_at', 'desc')->get();
        return $examen_session_rattrapages;
    }
}
