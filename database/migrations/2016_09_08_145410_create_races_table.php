<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;


class CreateRacesTable extends Migration
{
    /**
     * Crea la tabla de Carreras
     *
     * @return void
     */
    public function up()
    {
        Schema::create('races', function (Blueprint $table) {
            $table->increments('id');
            $table->dateTime('fecha')->index();
            $table->string('numero', 3)->nullable();
            $table->string('nombre', 20)->nullable();
            $table->char('reunion', 3)->nullable();
            $table->char('tipo', 3)->nullable();
            $table->char('pista', 3)->nullable();
            $table->char('estado_pista', 1)->nullable();
            $table->integer('distancia')->unsigned()->nullable();
            $table->decimal('monto_premio', 12, 2)->nullable();
            $table->integer('edad_desde')->unsigned()->nullable();
            $table->integer('edad_hasta')->unsigned()->nullable();
            $table->char('sexo', 2)->nullable();
            $table->integer('ganadas_desde')->unsigned()->nullable();
            $table->integer('ganadas_hasta')->unsigned()->nullable();
            $table->decimal('kilos', 6, 2)->nullable();
            $table->char('tiempo', 10)->nullable();
            $table->char('codigo_hipodromo', 3)->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('races');    
    }
}
