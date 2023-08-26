<?php

namespace App\Http\Controllers\Api\Private;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\Controller;
use App\Models\Option;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class OptionController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->sendResponse(['options' => $this->options()], 'Liste des options');
    }

    public function optionsListe($idL)
    {
        return $this->sendResponse(['options' => Option::with(['licence', 'annees'])->where('licence_id', $idL)->get()], 'Liste des options');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function optionsAjout(Request $request, $idL)
    {
        try {
            $validator = Validator::make($request->all(), [
                'nom' => 'required',
                'abreviation' => 'required',
            ]);

            if ($validator->fails()) {
                return $this->sendError('Erreur de validation des champs.', $validator->errors(), 400);
            }

            $option = new Option();
            $option->nom = $request->nom;
            $option->abreviation = $request->abreviation;
            $option->licence_id = $idL;
            $option->save();

            return $this->sendResponse(
                ['options' => Option::with(['licence', 'annees'])->where('licence_id', $idL)->get()],
                'Une option a été ajouté avec success.'
            );
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    /**
     * Display the specified resource.
     */
    public function optionsDetail($idO)
    {
        try {
            $option = Option::with(['annees', 'licence'])->findOrFail($idO);

            if ($option) {
                return $this->sendResponse(['Option' => $option], 'Detail de l\'option');
            } else {
                return $this->sendError('Cette option n\'existe pas', 401);
            }
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function optionsEdition(Request $request, $idL, $idO)
    {
        try {
            $option = Option::findOrFail($idO);

            if ($option) {

                $validator = Validator::make($request->all(), [
                    'nom' => 'required',
                    'abreviation' => 'required',
                ]);

                if ($validator->fails()) {
                    return $this->sendError('Erreur de validation des champs.', $validator->errors(), 400);
                }

                $option->nom = $request->nom;
                $option->abreviation = $request->abreviation;
                $option->licence_id = $idL;
                $option->save();

                return $this->sendResponse(
                    ['options' => Option::with(['licence', 'annees'])->where('licence_id', $idL)->get()],
                    'Option edité avec succes.'
                );
            } else {
                return $this->sendError('Cette option n\'existe pas', 401);
            }
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function optionsSuppression($idL, $idO)
    {
        try {
            $option = Option::findOrFail($idO);

            if ($option) {
                $option->delete();

                return $this->sendResponse(['options' => Option::with(['licence', 'annees'])->where('licence_id', $idL)->get()], 'Licence supprimer avec succes.');
            } else {
                return $this->sendError('Cette option n\'existe pas', 401);
            }
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    public function options()
    {
        $options = Option::with(['licence', 'annees'])->orderBy('created_at', 'desc')->get();
        return $options;
    }
}
