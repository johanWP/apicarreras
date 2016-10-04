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
            $table->boolean('propietario')->default(0);
            $table->boolean('cuidador')->default(0);
            $table->boolean('jockey')->default(0);
            $table->boolean('cuidador_jockey')->default(0);
            $table->boolean('capataz')->default(0);
            $table->boolean('peon')->default(0);
            $table->boolean('sereno')->default(0);
            $table->char('categoria', 4)->default(0);
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
