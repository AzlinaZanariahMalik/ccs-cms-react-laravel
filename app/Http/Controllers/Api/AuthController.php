<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    
    public function signup(SignupRequest $request)
    {
         //get the validated data
         $data = $request->validated();
         /** @var \App\Models\User $User */
         $user = User::create([
             'name' => $data['name'],
             'email' => $data['email'],
             'role' => $data['role'],
             'password' => bcrypt($data['password']),
 
         ]);
         $token = $user->createToken('main')->plainTextToken;
         //get the response the data that was also define in front end
         return response(compact('user', 'token' ));
    }
    public function login(LoginRequest $request)
    {
       //get the validated data
       $credentials = $request->validated();
       //trying to login the user
       if (!Auth::attempt($credentials)){

        //if login fail
        return response([
            'message' => 'The Provided email or password is incorrect'
        ], 422);
       }
       /** @var User $user  */
       //get the user information
       $user = Auth::user();
       //call the created token
       $token = $user->createToken('main')->plainTextToken;
       //get the response the data that was also define in front end
       return response(compact('user', 'token' ));



    }
    public function logout(Request $request)
    {
        /** @var User $user */
        //get the user
        $user = $request->user();
        $user->currentAccessToken()->delete();
        
        //return response
        return response('', 204);

    }
    
}
