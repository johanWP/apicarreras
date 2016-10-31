<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Carbon\Carbon;

/**
 * Class RacesTableTest
 */
class RacesTableTest extends TestCase
{
    /**
     * @var string $tabla Nombre de la tabla de Carreras
     */
    protected $tabla = 'races';

    /**
     * @var array $columns Los campos que debe tener la tabla
     */
    protected $columns =
        [
            'id','fecha', 'numero', 'nombre', 'reunion', 'estado_pista',
            'tipo', 'pista', 'distancia', 'monto_premio',
            'edad_desde', 'edad_hasta', 'sexo', 'tiempo',
            'ganadas_desde', 'ganadas_hasta', 'kilos',
            'created_at', 'updated_at', 'deleted_at'
        ];

    /**
     * Test para verificar la existencia de la tabla Race para Carreras.
     *
     * @return void
     */
    public function testTablaExiste()
    {
        $this->assertTrue(Schema::hasTable($this->tabla));
    }

    /**
     * Test para verificar los campos en la tabla
     * @return void
     */
    public function testCamposExisten()
    {
        for ($i=0; count($this->columns) > $i; $i++)
        {
            $this->assertTrue(Schema::hasColumn($this->tabla, $this->columns[$i]));
        }
    }

    public function testCarrerasIndex()
    {
        $this->visit('/carreras/')
            ->assertResponseOk();
    }

    public function testPorIdNoExiste()
    {
        $this->get('/carreras/porId/fakeID')
            ->seeJson(["message" => "CarreraNoExiste"]);
    }

    public function testPorFechaInvalida()
    {
        $this->get('/carreras/porFecha/2016-09-01/2016-09-00')
            ->seeJson(["message" => "FechaInvalida"]);
    }
    
    public function testPorFechaFormatoIncorrecto()
    {
        $this->get('/carreras/porFecha/2016-09-01/2016-09--10')
            ->seeJson(["message" => "FechaEnFormatoIncorrecto"]);
    }

    public function testPorFecha()
    {
        $hoy = Carbon::today()->toDateString();
        $ayer = Carbon::yesterday()->toDateString();
        $this->get('/carreras/porFecha/'. $ayer .'/'. $hoy)
            ->assertResponseOk();
    }
}
