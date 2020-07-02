<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class konsumen extends Model
{
    protected $table = "konsumen";

	protected $fillable = ['konsumen','jenis_kendaraan','no_polisi','tgl_lahir','jenis_kelamin','no_hp'];
}
