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
            $table->string('nombre_premio', 100)->nullable();
            $table->char('tomo', 6)->nullable();
            $table->char('folio', 6)->nullable();
            $table->string('nombre', 100)->nullable();
            $table->char('tipo_doc_caballeriza', 6)->nullable();
            $table->string('num_doc_caballeriza', 12)->nullable();
            $table->string('nombre_caballeriza')->nullable();
            $table->char('tipo_doc_cuidador', 6)->nullable();
            $table->string('num_doc_cuidador', 12)->nullable();
            $table->string('nombre_cuidador', 100)->nullable();
            $table->char('tipo_doc_jockey', 6)->nullable();
            $table->string('num_doc_jockey', 12)->nullable();
            $table->string('nombre_jockey', 100)->nullable();
            $table->string('tipo_doc_capataz', 6)->nullable();
            $table->string('num_doc_capataz', 12)->nullable();
            $table->string('nombre_doc_capataz', 100)->nullable();
            $table->string('tipo_doc_peon', 6)->nullable();
            $table->string('num_doc_peon', 12)->nullable();
            $table->string('nombre_doc_peon', 100)->nullable();
            $table->string('tipo_doc_sereno', 6)->nullable();
            $table->string('num_doc_sereno', 12)->nullable();
            $table->string('nombre_doc_sereno', 100)->nullable();
            $table->decimal('kg_programa', 6, 2)->nullable();
            $table->decimal('kg_reales', 6, 2)->nullable();
            $table->string('puesto', 6)->default('0')->nullable();
            $table->string('orden', 4)->nullable();
            $table->integer('partida')->nullable();
            $table->string('tratamiento', 100)->nullable();
            $table->string('observacion', 200)->nullable();
            $table->char('certificado_starter', 4)->nullable();
            $table->string('diferencia', 10)->nullable();
            $table->string('diferencia_acumulada', 10)->nullable();
            $table->decimal('monto_premio', 12, 2)->nullable();
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
