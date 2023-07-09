<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LeaseBook extends Model
{
    use HasFactory;
    protected $fillable = [
        'ship_id',
        'company',
        'email',
        'document',
        'book_status',
        'booked_until'
    ];
}
