import React from "react";

function DrawsCreate(){
    return (
        <div class="container">
            <div class="d-flex justify-content-around">
                <div class="strokWidth">
                    <button class="dropdown-toggle p-0 border-0 bg-transparent" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"></button>
                    <ul id="strokeWidthDropDown" class="dropdown-menu shadow border-0" aria-labelledby="dropdownMenuButton1">
                        
                    </ul>
                </div>
                <div class="strokeColor">
                    <button class="dropdown-toggle p-0 border-0 rounded-circle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false"></button>
                    <ul id="strokeColorDropDown" class="dropdown-menu flex-wrap shadow border-0 bg-light" aria-labelledby="dropdownMenuButton2">
                    
                    </ul>
                </div>
                <div class="strokEnd dropdown">
                <button class="btn bg-secondary bg-opacity-25 dropdown-toggle" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">butt</button>
                <ul id="strokeEndDropDown" class="dropdown-menu shadow border-0" aria-labelledby="dropdownMenuButton3">
                   
                </ul>
                </div>
            </div>
            <div id="canvasBox" class="border">
                <canvas id="jsCanvas" class="w-100 h-100 bg-white"></canvas>
            </div>
            {/* @if ($errors->any())
                <span class="text-danger">그림을 그린 후 저장해주세요.</span>
            @endif
            <div>
                <form id="form" action="/draws" method="post">
                    @method('post')
                    @csrf
                    <a id="save" class="btn d-block text-white my-0 mx-auto mt-4" href="#">저장</a>
                </form>
            </div> */}
        </div>
    );
}

export default DrawsCreate;