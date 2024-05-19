<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ClientResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [

            'id' => $this->id,
            'num_dossier'=> $this->num_dossier,
            'assure' => $this->assure,            
            'prime' => $this->prime,
            'avance' => $this->avance,
            'rest' => $this->rest,
            'cree_on' =>  (new Carbon($this->cree_on))->format('Y-m-d'),                                                  
            'duree' => $this->duree,            
            'ended_at' => (new Carbon($this->ended_at))->format('Y-m-d'), 
            // 'duration_unit'=> $this->duration_unit,    
            'Observation' => $this->Observation,
        ];
    }
}
