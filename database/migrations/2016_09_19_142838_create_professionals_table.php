<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProfessionalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('professionals', function (Blueprint $table) {
            $table->increments('id');
            $table->string('tipo_doc', 6);
            $table->string('num_doc', 40);
            $table->string('nombre', 100);
            $table->string('email', 100);
            $table->char('propietario', 1)->default(' ');
            $table->char('cuidador', 1)->default(' ');
            $table->char('jockey', 1)->default(' ');
            $table->char('cuidador_jockey', 1)->default(' ');
            $table->char('capataz', 1)->default(' ');
            $table->char('peon', 1)->default(' ');
            $table->char('sereno', 1)->default(' ');
            $table->char('categoria', 4)->default(' ');
            $table->char('patente1', 4)->nullable();
            $table->char('patente2', 4)->nullable();
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
        Schema::dropIfExists('professionals');
    }
}
