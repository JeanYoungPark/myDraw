@extends('layouts.app')

@section('content')
    <div id="draw">
        <div class="container">
            <div class="d-flex justify-content-between">
                <a class="btn bg-secondary rounded bg-opacity-50" href="/draws/create">그림 그리기</a>
                <div class="d-flex">
                    <div class="searchBox border position-relative">
                        <input class="border-0 h-100" type="text">
                        <div id="searchBtn" class="position-absolute">
                            <span class="d-block w-100 h-100"></span>
                        </div>
                    </div>
                    <div class="orderBox border mx-2">
                        <select class="border-0 w-100 h-100">
                            <option>최신순</option>
                            <option>오래된순</option>
                        </select>
                    </div>
                    <div class="d-flex">
                        <div id="bigIcon" class="icon d-flex align-items-center">
                            <img src="{{ asset('images/bigIcon.png') }}" alt="big icon" />
                        </div>
                        <div id="smallIcon" class="icon d-flex align-items-center">
                            <img src="{{ asset('images/smallIcon.png') }}" alt="small icon" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="album bigSize pt-3 d-flex flex-wrap">
                @foreach ($draws as $draw)
                    <div class="border"><a class="d-block w-100 h-100" href="/draws/{{ $draw->id }}"><img src="{{ asset('storage/drawImgs/'.$draw->user_id."/".$draw->file_name) }}"></a></div>
                @endforeach
            </div>
        </div>
    </div>
@endsection