<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Client>
 */
class ClientFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $faker = $this->faker;

        $numDossier = $faker->numberBetween(1000, 9999) . '/' . $faker->numberBetween(22, 25);
        $assure = $faker->firstName . ' ' . $faker->lastName;
        $prime = $faker->randomFloat(2, 100, 1000);
        $avance = $faker->randomFloat(2, 0, $prime);
        $rest = $prime - $avance;
        $cree_on = $faker->dateTimeThisYear();
        $duree = $faker->randomElement([15, 3, 12, 24, 36]);
        $durationUnit = $faker->randomElement(['months', 'days']);
        $dureeString = $duree . ' ' . $durationUnit;
        $endedAt = clone $cree_on;

        if (strpos($dureeString, 'months') !== false) {
            $months = (int)filter_var($dureeString, FILTER_SANITIZE_NUMBER_INT);
            $endedAt->modify('+' . $months . ' months');
        } elseif (strpos($dureeString, 'days') !== false) {
            $days = (int)filter_var($dureeString, FILTER_SANITIZE_NUMBER_INT);
            $endedAt->modify('+' . $days . ' days');
        }

        $observation = $faker->randomElement(['ESP', 'ENC']);

        return [
            'num_dossier' => $numDossier,
            'assure' => $assure,
            'prime' => $prime,
            'avance' => $avance,
            'rest' => $rest,
            'cree_on' => $cree_on,
            'duree' => $dureeString,
            'ended_at' => $endedAt,
            'observation' => $observation,
        ];
    }
}