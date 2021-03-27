<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\root_controller;
use App\Http\Controllers\login_controller;
use App\Http\Controllers\registration_controller;


Route::get('/all-users', [root_controller::class, 'all_users']);
Route::post('/on-registration', [registration_controller::class, 'registration']);