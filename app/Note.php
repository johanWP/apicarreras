<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Note extends Model
{
    use SoftDeletes;
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'notes';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = 
        [
//            'fecha', 'numero_carrera', 'nombre_premio', 'tomo', 'folio', 'nombre',
//            'tipo_doc_caballeriza', 'num_doc_caballeriza', 'nombre_caballeriza',
//            'tipo_doc_cuidador', 'num_doc_cuidador', 'nombre_cuidador',
//            'tipo_doc_jockey', 'num_doc_jockey', 'nombre_jockey', 'kg_programa', 'kg_reales'
        ];
}
