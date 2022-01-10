@extends('layouts.app')

@section('content')
    <div id="drawShow">
        <div class="container">
            <a href="{{ asset('/storage/drawImgs/'.$draws->user_id."/".$draws->file_name) }}" download="myDraw" type="button" class="btn btn-primary">이미지 저장</a>
            <div>
                <img src="{{ asset('/storage/drawImgs/'.$draws->user_id."/".$draws->file_name) }}" alt="">
            </div>
        </div>
    </div>
@endsection