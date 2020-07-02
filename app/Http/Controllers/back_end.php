<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\konsumen;
use App\transaksi;
use App\Http\Requests\CustomersReq;


class back_end extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index_show(){

        return view("index");
    }
    public function index()
    {
        $data = konsumen::all();

        return response()->json($data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CustomersReq $request)
    {
        $post = konsumen::create($request->all());

        return response()->json($post);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = konsumen::find($id);

        return response()->json($data);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $post = konsumen::find($id)->update($request->all());

        return response()->json($post);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $payment = konsumen::findOrFail($id);

        if (!$payment->delete()) {
            return response()->json([
                'msg' => 'Deleting Failed'
            ],400);
        }
        $response = [
            "msg" => "Data $id Success Deleted"
        ];


        return response()->json(['done']);
    }
}
