<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class HorsesTableTest extends TestCase
{
    /**
     * @var string $tabla Nombre de la tabla de Caballos
     */
    protected $tabla = 'horses';

    /**
     * @var array $columns Los campos que debe tener la tabla
     */
    // Este array debe mantenerse consistente con $fillable en el Modelo Horse
    protected $columns =
        [
            'id', 'tomo', 'folio', 'nombre', 'sexo', 
            'ganadas_comunes', 'ganadas_clasicos', 'ganadas_grupos', 'ganadas_internacionales', 'ganadas_series',
            'fecha_nacimiento', 'fecha_muerte',
            'created_at', 'updated_at', 'deleted_at'
        ];

    /**
     * Test para verificar la existencia de la tabla Professionals para profesionales (cuidadores, jockeys, etc.).
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
    
    public function testPorTomoFolioNoExiste()
    {
        $ranTomo = rand(1, 100); $ranFolio = rand(1, 100);
        $this->get('/ejemplares/porTomoFolio/'. $ranTomo .'/'. $ranFolio)
            ->see('EjemplarNoExiste');
    }

    public function testPorNombreNoExiste()
    {
        $ranNombre = rand(100000, 999999);
        $this->get('/ejemplares/porNombre/'. $ranNombre)
            ->see('EjemplarNoExiste');
//            ->assertResponseStatus(404);
    }

    public function testPorTomoFolio()
    {
        $tomo = '1103'; $folio = '624';
        $this->visit('/ejemplares/porTomoFolio/'. $tomo .'/'. $folio)
            ->seeJson(["nombre" => "NEGRA MORA"]);
    }

    public function testPorNombre()
    {
        $nombre = 'VINO';
        $this->visit('/ejemplares/porNombre/'. $nombre)
            ->assertResponseOk();
    }
}
