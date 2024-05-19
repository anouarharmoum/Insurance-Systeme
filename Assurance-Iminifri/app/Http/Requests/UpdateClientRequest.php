<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateClientRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'num_dossier' => 'required|string|max:255',
            'assure' => 'required|string|max:255',
            'prime' => 'required|numeric',
            'avance' => 'required|numeric',
            'cree_on' => 'required|date',
            'duree' => 'required|integer',
            'observation' => 'required|string|max:255',
        ];
    }
}
