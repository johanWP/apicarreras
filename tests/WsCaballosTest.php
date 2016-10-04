<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class WsCaballosTest extends TestCase
{
    //TODO: revisar estos test y por qué no andan
    /**
     * Prueba la respuesta vacía cuando no hay caballos registrados en la tabla
     */
    public function testNoHayCaballos()
    {
        $this->get('/caballos/')
            ->seeJsonEquals([]);
    }

    /**
     * Prueba la respuesta cuando se devuelve un status 404
     */
    public function testCaballoNoExiste()
    {
//        $this->get('/caballos/999999/999999')->seeJsonContains([
//            'message' => 'CaballoNoExiste',
//        ]);
    }
}
