<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreaTablaSanciones extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sanciones_horses', function (Blueprint $table) {
            $table->increments('id');
            $table->string('tomo', 6);
            $table->string('folio', 6);
            $table->integer('horse_id')->unsigned();
            $table->date('fecha_desde');
            $table->date('fecha_hasta');
            $table->date('fecha_carrera');
            $table->date('fecha_sancion');
            $table->char('habilitado', 5);
            $table->char('codigo_hopodromo', 6);
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
        Schema::dropIfExists('sanciones_horses');
    }
}
