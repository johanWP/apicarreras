<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SancionesStables extends Model
{
    protected $table = 'sanciones_stables';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        // Ningun campo debe llenarse por la web
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'created_at', 'updated_at', 'deleted_at',
    ];

    protected $dates = ['fecha_desde', 'fecha_hasta', 'fecha_carrera'];

    public function stable()
    {
        return $this->belongsTo('App\Stable');
    }
}
