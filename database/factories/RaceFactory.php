<?php

$factory->define(App\Race::class, function (Faker\Generator $faker) {
    $localisedFaker = Faker\Factory::create("es_AR");
    $reunion = rand(1, 9);
    $sexo = ['M', 'H', 'A'];
    $estado_pista = ['M', 'H', 'A'];
    return [
        'fecha' =>  Carbon\Carbon::now(),
        'numero'=> rand(1,12),
        'nombre'=> $localisedFaker->name,
        'reunion'=> $reunion,
        'tipo'=> rand(1,5),
        'pista'=> rand(1,5),
        'distancia'=> rand(1000, 5000),
        'monto_premio'=> rand(10000, 100000),
        'edad_desde'=> 0,
        'edad_hasta'=> rand(1, 5),
        'sexo'=> $sexo[rand(0,2)],
        'ganadas_desde'=> 1,
        'ganadas_hasta'=> rand(1, 8),
        'kilos'=> rand(0,99).'.'.rand(0,99),
        'estado_pista'=> $estado_pista[rand(0,3)],
        'tiempo' => $localisedFaker->time
    ];
});
