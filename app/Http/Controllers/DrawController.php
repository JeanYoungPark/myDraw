<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DrawController extends Controller
{
    public function index(){
        return view('draws.index');
    }

    public function create(){
        return view('draws.create');
    }

    public function store(){
        return view('draws.store');
    }

    public function show(){
        return view('draws.show');
    }

    public function edit(){
        return view('draws.	edit');
    }

    public function update(){
        return view('draws.	update');
    }

    public function destroy(){
        return view('draws.	destroy');
    }
}
