<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

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

    public function leaseBook(): HasMany
    {
        return $this->hasMany(LeaseBook::class, 'ship_id', 'id')->where('book_status', 'Accepted');
    }
}
