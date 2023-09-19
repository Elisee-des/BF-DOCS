<?php

namespace App\Http\Controllers\Api\Common;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UniversiteController extends Controller
{
    public function mon_univesite()
    {
        $user = Auth()->user();
    }
}
