<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOwnersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('owners', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('stable_id')->unsigned();
            $table->integer('professional_id')->unsigned();

//            $table->char('tipo_doc_caballeriza', 4);
//            $table->string('num_doc_caballeriza', 20);
//            $table->char('tipo_doc_propietario', 4);
//            $table->string('num_doc_propietario', 20);
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
        Schema::dropIfExists('owners');
    }
}
