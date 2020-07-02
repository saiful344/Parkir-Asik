<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Transaction extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transaksi',function (Blueprint $table) {
            $table->id();
            $table->string('konsumen',100)->nullable();;
            $table->string('no_polisi',100);
            $table->string('tgl_masuk',100);
            $table->time('waktu_masuk', 0)->nullable();;
            $table->time('waktu_keluar', 0)->nullable();;
            $table->string('biaya',100)->nullable();;
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
        //
    }
}
