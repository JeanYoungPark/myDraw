@extends('layouts.app')

@section('content')
    <div id="drawCreate">
        <div class="container">
            <div class="d-flex justify-content-around">
                <div class="strokWidth">
                    <button class="dropdown-toggle p-0 border-0 bg-transparent" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"></button>
                    <ul id="strokeWidthDropDown" class="dropdown-menu shadow border-0" aria-labelledby="dropdownMenuButton1">
                        <li class="checked"><a class="dropdown-item" href="#" data="1" onClick=strokeWidth(this)>1</a></li>
                        <li><a class="dropdown-item" href="#" data="5" onClick=strokeWidth(this)>5</a></li>
                        <li><a class="dropdown-item" href="#" data="10" onClick=strokeWidth(this)>10</a></li>
                        <li><a class="dropdown-item" href="#" data="15" onClick=strokeWidth(this)>15</a></li>
                        <li><a class="dropdown-item" href="#" data="20" onClick=strokeWidth(this)>20</a></li>
                    </ul>
                </div>
                <div class="strokeColor">
                    <button class="dropdown-toggle p-0 border-0 rounded-circle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false"></button>
                    <ul id="strokeColorDropDown" class="dropdown-menu flex-wrap shadow border-0 bg-light" aria-labelledby="dropdownMenuButton2">
                        <li class="checked d-flex justify-content-center py-2"><a class="dropdown-item rounded-circle bg-primary" href="#" onClick=strokeColor(this) data="0d6efd"></a></li>
                        <li class="d-flex justify-content-center py-2"><a class="dropdown-item rounded-circle bg-secondary" href="#" onClick=strokeColor(this) data="#6c757d"></a></li>
                        <li class="d-flex justify-content-center py-2"><a class="dropdown-item rounded-circle bg-success" href="#" onClick=strokeColor(this) data="#198754"></a></li>
                        <li class="d-flex justify-content-center py-2"><a class="dropdown-item rounded-circle bg-warning" href="#" onClick=strokeColor(this) data="#ffc107"></a></li>
                        <li class="d-flex justify-content-center py-2"><a class="dropdown-item rounded-circle bg-info" href="#" onClick=strokeColor(this) data="#0dcaf0"></a></li>
                        <li class="d-flex justify-content-center py-2"><a class="dropdown-item rounded-circle bg-dark" href="#" onClick=strokeColor(this) data="#212529"></a></li>
                        <li class="d-flex justify-content-center py-2"><a class="dropdown-item rounded-circle bg-white" href="#" onClick=strokeColor(this) data="#ffffff"></a></li>
                    </ul>
                </div>
                <div class="strokEnd dropdown">
                <button class="btn bg-secondary bg-opacity-25 dropdown-toggle" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">butt</button>
                <ul id="strokeEndDropDown" class="dropdown-menu shadow border-0" aria-labelledby="dropdownMenuButton3">
                    <li class="checked"><a class="dropdown-item" href="#" data="butt" onClick=strokeEnd(this)>butt</a></li>
                    <li><a class="dropdown-item" href="#" data="round" onClick=strokeEnd(this)>round</a></li>
                    <li><a class="dropdown-item" href="#" data="square" onClick=strokeEnd(this)>square</a></li>
                </ul>
                </div>
            </div>
            <div id="canvasBox" class="border">
                <canvas id="jsCanvas" class="w-100 h-100 bg-white">
            </div>
            <div>
                <form id="form" action="/draws" method="post">
                    @method('post')
                    @csrf
                    <a id="save" class="btn d-block text-white my-0 mx-auto mt-4" href="#">저장</a>
                </form>
            </div>
        </div>
    </div>
@endsection

@push('javascript')
    <script type="text/javascript" src="{{ asset('js/canvas.js') }}" defer></script>
@endpush