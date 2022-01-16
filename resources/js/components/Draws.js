import React from "react";

function DrawBtn (){
    return;
}

function Draws() {
    return (
        <div class="container">
            <div class="d-flex justify-content-between">
                <a class="btn bg-secondary rounded bg-opacity-50" href="/draws/create">그림 그리기</a>
                <div class="d-flex">
                    <div class="orderBox border mx-2">
                        <select id="orderBy" class="border-0 w-100 h-100">
                            <option value="latest">최신순</option>
                            <option value="oldest">오래된순</option>
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
            {/* <div id="album" class="bigSize pt-3 d-flex flex-wrap">
                @foreach ($draws as $draw)
                    <div class="border"><a class="d-block w-100 h-100" href="/draws/{{ $draw->id }}"><img src="{{ asset('storage/drawImgs/'.$draw->user_id."/".$draw->file_name) }}"></a></div>
                @endforeach
            </div> */}
        </div>
    );
}


export default Draws;

// if (document.getElementById("drawCreate")) {
//     ReactDOM.render(<DrawCreate />, document.getElementById("drawCreate"));
// }