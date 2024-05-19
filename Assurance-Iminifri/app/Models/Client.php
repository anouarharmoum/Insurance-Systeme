<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;
    protected $fillable = ['num_dossier','assure','prime','avance','rest','cree_on','duree','ended_at','observation'];

    public function status()
    {
        return $this->hasOne(Statu::class);
    }

    /**
     * Get the durees associated with the client.
     */
    public function duree()
    {
        return $this->hasone(Duree::class);
    }
}
