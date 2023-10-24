<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Storage;
use App\Models\Product;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = $this->faker->word;
        $category = $this->faker->word;
        $description = $this->faker->paragraph;
        $price = $this->faker->randomNumber(3, true);

        // Generate a fake image using lorempixel.com
        $imagePath = "images/{$this->faker->numberBetween(1, 1000)}.jpg";

        // get content from api
        $imageContent = file_get_contents("https://placehold.co/600x400/");

        // save content to storage/app/public/image
        Storage::disk('public')->put($imagePath, $imageContent);

        return [
            'title' => $title,
            'category' => $category,
            'description' => $description,
            'price' => $price,
            'image' => $imagePath,
        ];
    }
}
