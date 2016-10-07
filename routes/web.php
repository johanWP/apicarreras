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
Route::get('/caballerizas/{id}', 'StableController@show')->middleware('apiCarreras');

// ********** WS de Anotaciones *************
Route::get('/anotaciones/{idCarrera}', 'NoteController@anotaciones');

// ********** WS de Carreras  ***************
Route::get('/carreras/', 'RaceController@index');
Route::get('/carreras/porFecha/{inicio}/{fin}', 'RaceController@CarrerasPorFecha');

// ********** WS de Ratificaciones para Palermo *************
Route::get('/ratificaciones/porCarrera/{idCarrera}', 'NoteController@ratificaciones');

