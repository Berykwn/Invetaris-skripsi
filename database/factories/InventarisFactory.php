<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Inventaris>
 */
class InventarisFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'nama' => fake()->catchPhrase(),
            'kondisi' => fake()->sentence(),
            'keterangan' => fake()->sentence(),
            'jumlah' => fake()->biasedNumberBetween(),
            'kode' => Str::random(5),
        ];
    }
}
