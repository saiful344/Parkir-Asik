<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class front_end extends Controller
{
    public function index(){
        return view("home/index");
    }
    public function index_transaksi(){
        return view("transaksi/index");
    }
}
