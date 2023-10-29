<?php

namespace Database\Factories;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Factories\Factory;

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
        $title = $this->faker->sentence(2);
        $slug = Str::slug($title) . '-' . Str::random(10);
        $category = $this->faker->word;
        $description = $this->faker->paragraph;
        $price = $this->faker->randomNumber(3, true);

        // Generate a fake image using lorempixel.com
        $imagePath = "{$this->faker->numberBetween(1, 1000)}";

        // get content from api
        $imageContent = file_get_contents("https://placehold.co/600x400/");

        // save content to storage/app/public/image
        Storage::disk('public')->put($imagePath, $imageContent);

        return [
            'title' => $title,
            'slug' => $slug,
            'category' => $category,
            'description' => $description,
            'price' => $price,
            'image' => $imagePath,
        ];
    }
}
