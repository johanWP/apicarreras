<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableNotes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('notes', function (Blueprint $table) {
            $table->increments('id');
            $table->dateTime('fecha')->nullable();
            $table->integer('race_id')->unsigned();
            $table->string('numero_carrera', 3)->nullable();
            $table->string('nombre_premio')->nullable();
            $table->string('numero_anotacion')->nullable();
            $table->char('tomo', 10)->nullable();
            $table->char('folio', 10)->nullable();
            $table->string('nombre')->nullable();
            $table->char('tipo_doc_caballeriza', 3)->nullable();
            $table->string('num_doc_caballeriza', 10)->nullable();
            $table->string('nombre_caballeriza')->nullable();
            $table->char('tipo_doc_cuidador', 3)->nullable();
            $table->string('num_doc_cuidador', 10)->nullable();
            $table->string('nombre_cuidador')->nullable();
            $table->char('tipo_doc_jockey', 3)->nullable();
            $table->string('num_doc_jockey', 10)->nullable();
            $table->string('nombre_jockey')->nullable();
            $table->string('tipo_doc_capataz', 3)->nullable();
            $table->string('num_doc_capataz', 10)->nullable();
            $table->string('tipo_doc_peon', 3)->nullable();
            $table->string('num_doc_peon', 10)->nullable();
            $table->string('tipo_doc_sereno', 3)->nullable();
            $table->string('num_doc_sereno', 10)->nullable();
            $table->decimal('kg_programa', 6, 2)->nullable();
            $table->decimal('kg_reales', 6, 2)->nullable();
            $table->integer('puesto')->nullable();
            $table->string('orden')->nullable();
            $table->integer('partida')->nullable();
            $table->string('tratamiento')->nullable();
            $table->string('observacion')->nullable();
            $table->char('certificado_starter', 4)->nullable();
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
        Schema::drop('notes');
    }
}
