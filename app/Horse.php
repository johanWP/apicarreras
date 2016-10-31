<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Horse extends Model
{
    protected $table = 'horses';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [];
    protected $hidden = ['created_at', 'updated_at', 'deleted_at'];
    protected $dates = ['fecha_nacimiento', 'fecha_muerte'];
}