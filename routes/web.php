<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/',"front_end@index");
Route::get('/transaksi',"front_end@index_transaksi");
Route::resource('posts','back_end');
Route::resource('postss','transaksi_back_end');