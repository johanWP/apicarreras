<?php


$factory->define(App\Note::class, function (Faker\Generator $faker) {
    static $password;
    $localisedFaker = Faker\Factory::create("es_AR");
    $tipo_doc = ['DNI', 'LM', 'CED'];

    return [
        'fecha' => Carbon\Carbon::now(),
        'numero_carrera' => rand(1,12),
        'nombre_premio' => $localisedFaker->unique()->name,
        'tomo' => rand(100, 999),
        'folio' => $localisedFaker->unique()->randomDigitNotNull,
        'nombre' => $localisedFaker->unique()->name,
        'tipo_doc_caballeriza' => $tipo_doc[rand(0,2)],
        'num_doc_caballeriza' => $localisedFaker->unique()->numberBetween(111111, 99999999),
        'nombre_caballeriza' => $localisedFaker->unique()->name,
        'tipo_doc_cuidador' =>  $tipo_doc[rand(0,2)],
        'num_doc_cuidador' => $localisedFaker->unique()->numberBetween(111111, 99999999),
        'nombre_cuidador' => $localisedFaker->unique()->name,
        'tipo_doc_jockey' =>  $tipo_doc[rand(0,2)],
        'num_doc_jockey' => $localisedFaker->unique()->numberBetween(111111, 99999999),
        'nombre_jockey' => $localisedFaker->unique()->name,
        'kg_programa' => $localisedFaker->randomFloat(2, 1, 80),
        'kg_reales' => $localisedFaker->randomFloat(2, 1, 80)
    ];
});