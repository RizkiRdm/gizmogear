<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'slug', 'category', 'description', 'price', 'image'];

    // accessor image
    protected function Image(): Attribute
    {
        return Attribute::make(
            get: fn ($image) => asset('/storage/images/' . $image)
        );
    }
}
