<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SancionesProfessionals extends Model
{
    protected $table = 'sanciones_professionals';
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

    public function professional()
    {
        return $this->belongsTo('App\Professional');
    }
}
