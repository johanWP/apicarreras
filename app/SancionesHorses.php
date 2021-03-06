<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SancionesHorses extends Model
{
    protected $table = 'sanciones_horses';
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

    public function horse()
    {
        return $this->belongsTo('App\Horse');
    }
}
