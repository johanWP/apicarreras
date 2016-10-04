<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Professional extends Model
{
    use SoftDeletes;
    protected $table = 'professionals';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable =
        [
//            'tipo_doc', 'num_doc', 'nombre', 'email',
//            'propietario', 'cuidador', 'jockey', 'cuidador_jockey', 'capataz', 'peon', 'sereno',
//            'categoria', 'patente1', 'patente2'
        ];

    protected $hidden = ['created_at', 'updated_at', 'deleted_at'];

}