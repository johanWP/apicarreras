<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class NotesTableTest extends TestCase
{
    /**
     * @var string $tabla Nombre de la tabla de Carreras
     */
    protected $tabla = 'notes';

    /**
     * @var array $columns Los campos que debe tener la tabla
     */
    protected $columns =
        [
            'id', 'fecha', 'numero_carrera', 'nombre_premio', 'tomo', 'folio', 'nombre',
            'tipo_doc_caballeriza', 'num_doc_caballeriza', 'tipo_doc_cuidador', 'num_doc_cuidador',
            'tipo_doc_jockey', 'num_doc_jockey', 'kg_programa', 'kg_reales',
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

}
