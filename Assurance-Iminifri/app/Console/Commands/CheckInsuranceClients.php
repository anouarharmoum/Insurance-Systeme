<?php

namespace App\Console\Commands;

use App\Models\Client;
use App\Models\Duree;
use Illuminate\Console\Command;

class CheckInsuranceClients extends Command
{
    protected $signature = 'app:check-insurance-clients';
    protected $description = 'Check clients and add them to Duree table if condition is met';

    public function handle()
    {
        $clients = Client::whereDate('ended_at', '<=', now())->limit(5)->get();


        foreach ($clients as $client) {
            // Check if the client already has an entry in the Duree table to avoid duplicates
            if (!$client->duree) {
                Duree::create([
                    'client_id' => $client->id,
                ]);
            }
        }

        $this->info('CheckInsuranceClients command executed successfully.');
    }
}
