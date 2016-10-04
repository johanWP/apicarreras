<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHorsesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('horses', function (Blueprint $table) {
            $table->increments('id');
            $table->string('tomo', 6);
            $table->string('folio', 6);
            $table->string('sexo', 2);
            $table->string('nombre')->index();
            $table->date('fecha_nacimiento');
            $table->date('fecha_muerte')->nullable();
            $table->integer('ganadas_comunes')->default(0);
            $table->integer('ganadas_clasicos')->default(0);
            $table->integer('ganadas_grupos')->default(0);
            $table->integer('ganadas_internacionales')->default(0);
            $table->integer('ganadas_series')->default(0);

//            $table->date('vacuna1')->nullable();
//            $table->date('vacuna2')->nullable();
//            $table->date('vacuna3')->nullable();
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
        Schema::dropIfExists('horses');
    }
}
