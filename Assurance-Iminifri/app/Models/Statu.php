<?php

namespace App\Models;

use Database\Factories\StatuFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Statu extends Model
{
    use HasFactory;
    protected $fillable = ['client_id','status'];
    public function client(){

        return $this->belongsTo(Client::class);
    }
    protected static function newFactory()
{
    return StatuFactory::new();
}
}
