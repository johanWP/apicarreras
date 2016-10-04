<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class WsCaballerizasTest extends TestCase
{
    /**
     * Prueba el WS de Listar caballerizas
     *
     * @return void
     */
    public function testListarCaballerizas()
    { //TODO: Quitar comentario cuando haya datos en la tabla
/*
        $this->get('/caballerizas/')
            ->seeJsonStructure([
                '*' => [
                    'id', 'tipo_doc', 'num_doc',
                    'num_doc_propietario1', 'num_doc_propietario2', 'num_doc_propietario3',
                    'num_doc_propietario4', 'num_doc_propietario5', 'num_doc_propietario6',
                    'num_doc_propietario7'
                ]
            ]);
*/
//        $this->assertTrue(true);
    }

    /**
     * Prueba la respuesta vacía cuando no hay caballerizas registradas en la tabla
     */
    public function testNoHayCaballerizas()
    {
        $this->get('/caballerizas/')
            ->seeJsonEquals([]);
    }

    /**
     * Prueba la respuesta cuando se devuelve un status 404
     */
    public function testCaballerizaNoExiste()
    {
        $this->get('/caballerizas/999999')->seeJsonContains([
            'message' => 'CaballerizaNoExiste',
        ]);
    }

}
