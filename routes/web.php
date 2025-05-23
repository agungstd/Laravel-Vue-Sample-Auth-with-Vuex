<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Catch-all route for Single Page Application (SPA)
Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*')->name('spa');