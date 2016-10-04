<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Stable extends Model
{
    protected $table = 'stables';
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
}
