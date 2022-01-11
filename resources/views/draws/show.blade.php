@extends('layouts.app')

@section('content')
    <div id="drawShow">
        <div class="container">
            @if (auth()->id() == $draws->user_id)
                <a href="{{ asset('/storage/drawImgs/'.$draws->user_id."/".$draws->file_name) }}" download="myDraw" type="button" class="btn btn-primary">이미지 저장</a>
            @endif
            <div>
                <img src="{{ asset('/storage/drawImgs/'.$draws->user_id."/".$draws->file_name) }}" alt="">
            </div>
        </div>
    </div>
@endsection