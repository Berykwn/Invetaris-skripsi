<?php

use App\Http\Controllers\AdminDashboardController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\RedirectAuthenticatedUsersController;
use App\Http\Controllers\InventarisController;
use App\Http\Controllers\PegawaiController;
use App\Http\Controllers\RuangController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// Route::get('/', function() {
//     Inertia::render('Auth.Login');
// });
Route::group(['middleware' => 'auth'], function() {
    Route::inertia('/', 'Auth/Login');
    

    Route::get("/redirectAuthenticatedUsers", [RedirectAuthenticatedUsersController::class, "home"]);

    Route::group(['middleware' => 'checkRole:admin'], function() {
        Route::get('adminDashboard', [AdminDashboardController::class, 'index'])->name('adminDashboard');
        //Route Inventaris
        Route::get('adminDashboard/inventaris', [InventarisController::class, 'index'])->name('inventaris');
        Route::get('adminDashboard/detailinventaris', [InventarisController::class, 'show'])->name('detail.inventaris');
        Route::get('adminDashboard/editinventaris', [InventarisController::class, 'edit'])->name('edit.inventaris');
        Route::post('/adminDashboard/tambahinventaris', [InventarisController::class, 'store'])->name('tambah.inventaris');
        Route::post('/adminDashboard/updateinventaris', [InventarisController::class, 'update'])->name('update.inventaris');
        Route::post('/adminDashboard/deleteinventaris', [InventarisController::class, 'destroy'])->name('delete.inventaris');
        // Route Pegawai
        Route::get('/adminDashboard/pegawai', [PegawaiController::class, 'index'])->name('Pegawai');
        Route::get('/admindashboard/pegawai/editPegawai', [PegawaiController::class, 'edit'])->name('edit.pegawai');
        Route::post('/adminDashboard/tambahpegawai', [PegawaiController::class, 'store'])->name('tambah.pegawai');
        Route::post('/adminDashboard/updatepegawai', [PegawaiController::class, 'update'])->name('update.pegawai');
        Route::post('/adminDashboard/deletepegawai', [PegawaiController::class, 'destroy'])->name('delete.pegawai');

        // Route Ruangan
        Route::get('/adminDashboard/ruangan', [RuangController::class, 'index'])->name('ruangan');
        Route::get('/admindashboard/editruangan', [RuangController::class, 'edit'])->name('edit.ruangan');
        Route::post('/adminDashboard/tambahruangan', [RuangController::class, 'store'])->name('tambah.ruangan');
        Route::post('/adminDashboard/updateruangan', [RuangController::class, 'update'])->name('update.ruangan');
        Route::post('/adminDashboard/deleteruangan', [RuangController::class, 'destroy'])->name('delete.ruangan');

    });
    Route::group(['middleware' => 'checkRole:operator'], function() {
        Route::inertia('/operatorDashboard', 'OperatorDashboard')->name('operatorDashboard');
    });
    // Route::group(['middleware' => 'checkRole:guest'], function() {
    //     Route::inertia('/guestDashboard', 'GuestDashboard')->name('guestDashboard');
    // });
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
