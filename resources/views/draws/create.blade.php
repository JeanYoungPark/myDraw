@extends('layouts.app')

@section('content')
    <div id="drawCreate"></div>
@endsection

@push('javascript')
    <script type="text/javascript" src="{{ asset('js/canvas.js') }}" defer></script>
@endpush