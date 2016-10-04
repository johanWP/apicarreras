<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
// ******** WS Caballerizas ****************
Route::get('/caballerizas/', 'StableController@index');
Route::get('/caballerizas/{id}', 'StableController@show');

// ********** WS de Anotaciones *************
Route::get('/anotaciones/{id}', 'NoteController@show');

