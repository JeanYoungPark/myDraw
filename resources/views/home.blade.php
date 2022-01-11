@extends('layouts.app')

@section('content')
<div id="home" class="container d-flex flex-wrap">
    @foreach ($draws as $draw)
        <div class="border"><a href="{{ asset('draws/'.$draw->id) }}">
            <img src="{{ asset('storage/drawImgs/'.$draw->user_id."/".$draw->file_name) }}" alt="">   
        </a></div>
    @endforeach
</div>
@endsection
