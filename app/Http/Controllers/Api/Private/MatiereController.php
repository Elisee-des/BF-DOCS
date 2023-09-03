<?php

namespace App\Http\Controllers\Api\Private;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\Controller;
use App\Models\Module;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class MatiereController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->sendResponse(['modules' => $this->modules()], 'Liste des modules');
    }

    public function matieresListe($idA)
    {
        return $this->sendResponse(['modules' => Module::with(['annee', 'examen_normals'])->where('annee_id', $idA)->get()], 'Liste des modules');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function matieresAjout(Request $request, $idA)
    {
        try {
            $validator = Validator::make($request->all(), [
                'nom' => 'required',
            ]);

            if ($validator->fails()) {
                return $this->sendError('Erreur de validation des champs.', $validator->errors(), 400);
            }

            $module = new Module();
            $module->nom = $request->nom;
            $module->annee_id = $idA;
            $module->save();

            return $this->sendResponse(
                ['modules' => Module::with(['examen_normals', 'annee'])->where('annee_id', $idA)->get()],
                'Module ajouté avec succès.'
            );
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    /**
     * Display the specified resource.
     */
    public function matieresDetail($idO)
    {
        try {
            $module = module::with(['annees', 'licence'])->findOrFail($idO);

            if ($module) {
                return $this->sendResponse(['module' => $module], 'Detail de l\'module');
            } else {
                return $this->sendError('Cette module n\'existe pas', 401);
            }
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function matieresEdition(Request $request, $idA, $idM)
    {
        try {
            $module = Module::findOrFail($idM);

            if ($module) {

                $validator = Validator::make($request->all(), [
                    'nom' => 'required',
                ]);

                if ($validator->fails()) {
                    return $this->sendError('Erreur de validation des champs.', $validator->errors(), 400);
                }

                $module->nom = $request->nom;
                $module->annee_id = $idA;
                $module->save();

                return $this->sendResponse(
                    ['modules' => module::with(['examen_normals', 'annee'])->where('annee_id', $idA)->get()],
                    'module edité avec succès.'
                );
            } else {
                return $this->sendError('Cette module n\'existe pas', 401);
            }
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function matieresSuppression($idA, $idM)
    {
        try {
            $module = Module::findOrFail($idM);

            if ($module->examen_normals->count() != 0) {
                return $this->sendError('Impossible de Supprimer car elle est lié a des examens, corrections ou propositions. Veuillez les supprimer puis réssayez.');
            }

            if ($module) {
                $module->delete();

                return $this->sendResponse(['modules' => module::with(['examen_normals', 'annee'])->where('annee_id', $idA)->get()], 'Module supprimée avec succès.');
            } else {
                return $this->sendError('Cette module n\'existe pas', 401);
            }
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    public function modules()
    {
        $modules = Module::all();
        return $modules;
    }
}
