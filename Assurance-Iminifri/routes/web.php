<?php

use App\Http\Controllers\ClientController;
use App\Http\Controllers\DureeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StatusController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DashboardController;
use Inertia\Inertia;



Route::redirect('/', '/register')->name('register');
// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');
Route::middleware(['auth', 'verified'])->group(function () {
    // Route::get('/note', [NoteController::class,'index'])->name('note.index');

    // Route::get('/note/create', [noteController::class,'create'])->name('note.create');

    // Route::post('/note', [NoteController::class,'store'])->name('note.store');

    // Route::get('/note/{id}/edit', [NoteController::class,'edit'])->name('note.edit');

    // Route::put('/note/{id}', [NoteController::class,'update'])->name('note.update');

    // Route::get('/note/{id}', [NoteController::class,'show'])->name('note.show');

    // Route::delete('/note/{id}', [NoteController::class,'destroy'])->name('note.destroy');


    Route::resource('client', ClientController::class);
    Route::resource('status', StatusController::class);
    Route::resource('duree', DureeController::class);
    Route::get('/duree/print', [DureeController::class, 'print'])->name('duree.print');
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
});
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
