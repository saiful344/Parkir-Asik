<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Customers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('konsumen',function (Blueprint $table) {
            $table->id();
            $table->string('konsumen',100);
            $table->string('jenis_kendaraan',100);
            $table->string('no_polisi',100);
            $table->date('tgl_lahir');
            $table->enum('jenis_kelamin',['L','P']);
            $table->string('no_hp',100);
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
        Schema::dropIfExists('konsumen');
    }
}
