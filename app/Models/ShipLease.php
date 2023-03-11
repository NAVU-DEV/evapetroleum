<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShipLease extends Model
{
    use HasFactory;
    protected $fillable = [
        'image',
        'name',
        'built',
        'yard',
        'lwt',
        'rate',
        'status',
    ];
}
