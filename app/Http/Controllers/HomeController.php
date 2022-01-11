<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Draw;

class HomeController extends Controller
{
    
    public function index(Draw $draw)
    {
        $draws = Draw::inRandomOrder()->take(12)->get();
        return view('home', [
            'draws'=> $draws
        ]);
    }
}
