<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

use App\Models\Draw;

class DrawController extends Controller
{
    public function index(Request $request){
        if($request->orderBy == 'oldest') {
            $draws = Draw::where('user_id', auth()->id())->get();
        }else {
            $draws = Draw::latest()->where('user_id', auth()->id())->get();
        }

        return view('draws.index', [
            'draws' => $draws
        ]);
    }

    public function create(){
        return view('draws.create');
    }

    public function store(Request $request){
        
        $img = $request->input('file_name');
        $img = str_replace('data:image/png;base64,','',$img);
        $img = str_replace(' ', '+', $img);
        $imgName = Str::random(10).'.'.'png';
        $dir = 'public/drawImgs/'.auth()->id();

        if(!file_exists($dir)){
            Storage::makeDirectory($dir);
        }

        Storage::disk('local')->put($dir."/".$imgName, base64_decode($img));

        $values['file_name'] = $imgName;
        $values['user_id'] = auth()->id();
        
        $draw = Draw::create($values);

        return redirect('/draws');
    }

    public function show(Draw $draw){
        abort_if(auth()->id() != $draw->user_id, 403);
        return view('draws.show', [
            'draws' => $draw
        ]);
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
