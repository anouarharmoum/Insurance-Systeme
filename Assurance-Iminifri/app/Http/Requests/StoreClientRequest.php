<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreClientRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    protected function prepareForValidation(): void
    {
        $prime = $this->input('prime');
        $avance = $this->input('avance');
        $rest = $prime - $avance;

        $this->merge([
            'rest' => $rest,
            'ended_at' => $this->calculateEndedAt($this->input('cree_on'), $this->input('duree'), $this->input('duration_unit')),
            'duree' => $this->input('duree') . ' ' . $this->input('duration_unit'),
        ]);
    }

    private function calculateEndedAt($cree_on, $duree, $duration_unit)
    {
        $cree_on = strtotime($cree_on);
        if ($cree_on === false) {
            return null;
        }

        if ($duration_unit === 'months') {
            return date('Y-m-d', strtotime("+$duree months", $cree_on));
        } elseif ($duration_unit === 'days') {
            return date('Y-m-d', strtotime("+$duree days", $cree_on));
        }

        return null;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "num_dossier" => ['required', 'max:255'],
            "assure" => ['required', 'max:255'],
            "prime" => ['required', 'max:255'],
            "avance" => ['required', 'max:255'],
            "rest" => ['required', 'max:255'],
            "cree_on" => ['required', 'date'], // 'date' instead of 'Date'
            "duree" => ['required', 'max:255'],
            "ended_at" => ['required', 'date'], // 'date' instead of 'Date'
            "observation" => ['required', Rule::in(['ENC',  'ESP'])]
        ];
    }
}