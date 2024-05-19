<?php

namespace Database\Seeders;

use App\Models\Client;
use App\Models\Statu;
use App\Models\User;
use Illuminate\Database\Seeder;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => bcrypt('20042005')
        ]);

        $clients = Client::factory()
            ->count(20)
            ->hasStatus(1)

            ->create();

        // Conditionally create durees for clients whose insurance has ended
        foreach ($clients as $client) {
            if ($client->ended_at <= now()) {
                $client->duree()->create();
            }
        }
    }
}
