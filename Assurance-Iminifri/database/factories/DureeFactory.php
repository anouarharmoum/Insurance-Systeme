<?php
namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Duree;
use Carbon\Carbon;
use App\Models\Client;

class DureeFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
   

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // $currentDate = Carbon::now();

        // // Retrieve clients with ended_at smaller than or equal to the current date
        // $clients = Client::where('ended_at', '<=', $currentDate)->get();
        
        //   // Extract client IDs
        //   $clientIds = $clients->pluck('id')->toArray();
       

        return[
        // 'client_id' => $this->faker->randomElement( $clientIds),                
        ];
    }
}  





 // $durees = [];

        // foreach ($clients as $client) {
        //     $durees[] = [
        //         'client_id' => $client->id,
      
       
        //     ];
        // }
        // $client = Client::inRandomOrder()->first();