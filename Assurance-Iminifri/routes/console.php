<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

// Existing inspire command
Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

// Register your custom command
Artisan::command('app:check-insurance-clients', function () {
    Artisan::call('app:check-insurance-clients');
})->purpose('Check clients and add them to Duree table if condition is met');
