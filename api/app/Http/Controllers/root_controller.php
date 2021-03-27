<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Crypt;

class root_controller extends Controller
{
    // all users
    function all_users(){
        $users = DB::table('users')->get();
        return json_encode($users);
    }
}
