<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class transaksi extends Model
{
	 protected $table = "transaksi";

     protected $fillable = ['no_polisi','tgl_masuk','waktu_masuk','waktu_keluar','biaya'];

     public function konsumen(){
    	return $this->belongsTo('App\konsumen','no_polisi');
    }
}
