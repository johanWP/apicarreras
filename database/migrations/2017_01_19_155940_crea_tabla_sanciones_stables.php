<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreaTablaSancionesStables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sanciones_stables', function (Blueprint $table) {
            $table->increments('id');
            $table->string('tipo_doc', 6);
            $table->string('num_doc', 20);
            $table->integer('stable_id')->unsigned();
            $table->date('fecha_desde');
            $table->date('fecha_hasta');
            $table->char('tipo_sancion', 3);
            $table->char('codigo_hipodromo', 6);
            $table->date('fecha_carrera')->nullable();
            $table->integer('numero_carrera');
            $table->string('texto_sancion');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sanciones_stables');
    }
}
