<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CustomersReq extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
          $rules =[
            "konsumen" => "required",
            "jenis_kendaraan" => "required",
            "no_polisi" => "required",
            "tgl_lahir" => "required",
            "jenis_kelamin" => "required",
            "no_hp" => "required",
        ];

        return $rules;
    }
}
