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
Route::get('/caballerizas/porNombre/{nombre}', 'StableController@porNombre');
//Route::get('/caballerizas/{token}/{id}', 'StableController@show')->middleware('apiCarreras');

// ********** WS de Anotaciones *************
Route::get('/anotaciones/{idCarrera}', 'NoteController@anotaciones');

// *********  WS Ejemplares ****************
Route::get('/ejemplares/porTomoFolio/{tomo}/{folio}', 'HorseController@porTomoFolio');
Route::get('/ejemplares/porNombre/{nombre}', 'HorseController@porNombre');
// ********** WS de Carreras  ***************
Route::get('/carreras/', 'RaceController@index');
Route::get('/carreras/porFecha/{inicio}/{fin}', 'RaceController@porFecha');
Route::get('/carreras/{id}', 'RaceController@porId');

// ********** WS de Ratificaciones para todos *************
Route::get('/ratificaciones/porCarrera/{idCarrera}', 'NoteController@ratificaciones');

// ********** WS de Profesionales para todos *************
Route::get('/profesionales', 'ProfessionalController@index');
Route::get('/profesionales/{professional}', 'ProfessionalController@show');
Route::get('/profesionales/porDoc/{tipo_doc}/{num_doc}', 'ProfessionalController@porDoc');
Route::get('/profesionales/porNombre/{nombre}', 'ProfessionalController@porNombre');
 
