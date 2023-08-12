<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\BaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends BaseController
{
    public function login(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'email' => 'email|required',
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            return $this->sendError('Erreur de validation des champs.', $validator->errors(), 400);
        }

        $loginData = request(['email', 'password']);

        if (!Auth::attempt($loginData)) {
            return $this->sendError('Unauthorised. Invalid credentials.', 'Le nom d\'utilisateur ou le mot de passe est incorrecte', 401);
        }
        if (auth()->attempt($loginData)) {
            $accessToken = auth()->user()->createToken('authToken')->accessToken;
            return $this->sendResponse(['infos_user' => Auth::user(), 'access_token' => $accessToken], 'Avec succès');
        } else {
            return $this->sendError('Unauthorised. Invalid credentials.', 'Le nom d\'utilisateur ou le mot de passe est incorrecte', 401);
        }
    }

}
