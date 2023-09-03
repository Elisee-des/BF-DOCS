<?php

namespace App\Http\Controllers\Api\Private;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\Controller;
use App\Models\Master;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class MasterController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->sendResponse(['masters' => $this->masters()], 'Liste des Masters');
    }

    public function mastersListe($idD)
    {
        return $this->sendResponse(['masters' => Master::with(['annees', 'departement'])->where('departement_id', $idD)->get()], 'Liste des masters');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function mastersAjout(Request $request, $idD)
    {
        try {
            $validator = Validator::make($request->all(), [
                'nom' => 'required',
                'abreviation' => 'required',
            ]);

            if ($validator->fails()) {
                return $this->sendError('Erreur de validation des champs.', $validator->errors(), 400);
            }

            $master = new Master();
            $master->nom = $request->nom;
            $master->abreviation = $request->abreviation;
            $master->departement_id = $idD;
            $master->save();

            return $this->sendResponse(
                ['masters' => Master::with(['annees', 'departement'])->where('departement_id', $idD)->get()],
                'Master ajouté avec succès.'
            );
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    /**
     * Display the specified resource.
     */
    public function mastersDetail($idM)
    {
        try {
            $master = Master::with(['annees', 'departement'])->findOrFail($idM);

            if ($master) {
                return $this->sendResponse(['Master' => $master], 'Detail du master');
            } else {
                return $this->sendError('Ce master n\'existe pas', 401);
            }
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function mastersEdition(Request $request, $idD, $idM)
    {
        try {
            $master = Master::findOrFail($idM);

            if ($master) {

                $validator = Validator::make($request->all(), [
                    'nom' => 'required',
                    'abreviation' => 'required',
                ]);

                if ($validator->fails()) {
                    return $this->sendError('Erreur de validation des champs.', $validator->errors(), 400);
                }

                $master->nom = $request->nom;
                $master->abreviation = $request->abreviation;
                $master->departement_id = $idD;
                $master->save();

                return $this->sendResponse(
                    ['masters' => Master::with(['annees', 'departement'])->where('departement_id', $idD)->get()],
                    'Master edité avec succès.'
                );
            } else {
                return $this->sendError('Ce master n\'existe pas', 401);
            }
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function mastersSuppression($idD, $idM)
    {
        try {
            $master = Master::findOrFail($idM);

            if ($master->annees->count() != 0) {
                return $this->sendError('Impossible de Supprimer car il est lié a des anneés. Veuillez supprimer tous ses années puis réssayez.');
            }

            if ($master) {
                $master->delete();

                return $this->sendResponse(['masters' => Master::with(['annees', 'departement'])->where('departement_id', $idD)->get()], 'Master supprimé avec succes.');
            } else {
                return $this->sendError('Ce master n\'existe pas', 401);
            }
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    public function masters()
    {
        $masters = Master::with(['annees', 'departement'])->orderBy('created_at', 'desc')->get();
        return $masters;
    }
}
