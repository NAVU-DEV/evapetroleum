<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HomeContent extends Model
{
    use HasFactory;
    protected $fillable = [
        'hero_title',
        'hero_description',
        'left_card_image',
        'left_card_title',
        'left_card_description',
        'center_card_image',
        'center_card_title',
        'center_card_description',
        'right_card_image',
        'right_card_title',
        'right_card_description',
        'about_us',
        'email',
    ];
}
