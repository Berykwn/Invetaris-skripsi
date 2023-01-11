<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Controller;
use App\Models\Ruang;
use App\Models\Pegawai;
use App\Models\Inventaris;

class AdminDashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('AdminDashboard', [
            'title' => 'Admin Dashboard',
            'pages' => 'dashboard',
            'inventaris' => Inventaris::count(),
            'pegawai' => Pegawai::count(),
            'ruang' => Ruang::count(),
        ]);
    }
}
