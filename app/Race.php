<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Race extends Model
{
    use SoftDeletes;
    protected $table = 'races';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable =
        [
//            'fecha', 'numero', 'nombre', 'reunion',
//            'tipo', 'pista', 'distancia', 'monto_premio',
//            'edad_desde', 'edad_hasta', 'sexo',
//            'ganadas_desde', 'ganadas_hasta', 'kilos', 'estado_pista', 'tiempo'
        ];

    protected $hidden = ['created_at', 'updated_at', 'deleted_at'];
    protected $dates = ['fecha'];
}
