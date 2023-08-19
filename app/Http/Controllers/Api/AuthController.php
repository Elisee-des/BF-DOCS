<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\BaseController;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

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
            return $this->sendResponse(['infos_user' => Auth::user(), 'access_token' => $accessToken], 'Utilisateur connecté succès');
        } else {
            return $this->sendError('Unauthorised. Invalid credentials.', 'Le nom d\'utilisateur ou le mot de passe est incorrecte', 401);
        }
    }

    public function register(Request $request)
    {
        try {

            $validator = Validator::make($request->all(), [
                'nom' => 'string|required',
                'prenom' => 'string|required',
                'password' => 'string|required|min:4',
                'email' => 'email|required',
                'ine' => 'string|required',
                'telephone' => 'integer|required',
            ]);

            if ($validator->fails()) {
                return $this->sendError('Erreur de validation des champs.', $validator->errors(), 400);
            }

            $user = new User();
            $user->nom = $request->nom;
            $user->prenom = $request->prenom;
            $user->ine = $request->ine;
            $user->telephone = $request->telephone;
            $user->email = $request->email;
            $user->password = Hash::make($request->password);

            if ($request->photo != null) {

                $photo_64 = $request->photo; //your base64 encoded data
                // $extension = explode('/', explode(':', substr($pdf_64, 0, strpos($pdf_64, ';')))[1])[1];   // .jpg .png .pdf
                $replace = substr($photo_64, 0, strpos($photo_64, ',') + 1);
                $file = str_replace($replace, '', $photo_64);
                $myImage = str_replace(' ', '+', $file);
                $filename = Str::slug($request->nom . $request->prenom) . '.png';

                Storage::disk('public')->put('uploads/users/' . $filename, base64_decode($myImage));
                $path = 'uploads/users/' . $filename;

                $user->photo = $path;
            }
            $user->save();

            return $this->sendResponse(['infos_user' => $user], 'Compte creé avec succes.');
        } catch (Exception $e) {
            return response()->json($e);
        }
    }
}
