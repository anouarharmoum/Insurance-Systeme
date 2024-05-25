<?php
namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Duree;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $totalClients = Client::count();
        $totalAvance = Client::sum('avance');
        $totalCompleted = Client::whereHas('status', function($query) {
            $query->where('status', 'completed');
        })->count();
        $totalENC = Client::query()
        ->where('Observation', 'ENC')
        ->count();
        $totalRespererInsurance = Duree::count();
        
        $totalRest = Client::sum('rest');
        $totalPending = Client::whereHas('status', function($query) {
            $query->where('status', 'pending');
        })->count();
        $totalESP = Client::query()
        ->where('Observation', 'ESP')
        ->count();

        return inertia('Dashboard', [
            'totalClients' => $totalClients,
            'totalAvance' => $totalAvance,
            'totalCompleted' => $totalCompleted,
            'totalENC' => $totalENC,
            'totalRespererInsurance' => $totalRespererInsurance,
            'totalRest' => $totalRest,
            'totalPending' => $totalPending,
            'totalESP' => $totalESP,
        ]);
    }
}
