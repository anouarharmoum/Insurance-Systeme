<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    protected function schedule(Schedule $schedule)
    {
        // Schedule your command to run every minute for testing purposes
        $schedule->command('app:check-insurance-clients')->everyMinute();
    }

    protected function commands()
    {
        $this->load(__DIR__.'/Commands');
    
        require base_path('routes/console.php');
    }
    
}
