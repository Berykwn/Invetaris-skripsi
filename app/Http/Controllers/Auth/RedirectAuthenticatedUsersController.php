<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RedirectAuthenticatedUsersController extends Controller
{
    public function home()
    {
        if (auth()->user()->role == 'admin') {
            return redirect('/adminDashboard');
        }
        elseif(auth()->user()->role == 'operator'){
            return redirect('/operatorDashboard');
        }
        else{
            return auth()->logout();
        }
    }
}
