<?php

namespace App\Console\Commands;

use App\Models\Client;
use Illuminate\Console\Command;

class CheckInsuranceClients extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:check-insurance-clients';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Check clients and add them to Duree table if condition is met';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $clients = Client::whereDate('ended_at', '<=', now())->get();

        foreach ($clients as $client) {
            $client->duree()->create();
        }

        $this->info('CheckInsuranceClients command executed successfully.');
    }
}
