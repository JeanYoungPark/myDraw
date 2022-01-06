import React from "react";
import ReactDOM from "react-dom";

function DrawBtn (){
    return;
}

function Draw() {
    return (
        <div className="container d-flex justify-content-between">
            <a className="btn bg-secondary rounded bg-opacity-50" href="/draws/create">그림 그리기</a>
            <div className="d-flex">
                <div className="searchBox border position-relative">
                    <input className="border-0 h-100" type="text"></input>
                    <div id="searchBtn" className="position-absolute">
                        <span className="d-block w-100 h-100"></span>
                    </div>
                </div>
                <div className="orderBox border mx-2">
                    <select className="border-0 w-100 h-100">
                        <option>최신순</option>
                        <option>오래된순</option>
                    </select>
                </div>
                <div className="d-flex">
                    <div id="bigIcon" className="icon d-flex align-items-center">
                        <img src="/images/bigIcon.png" alt="big icon" />
                    </div>
                    <div id="smallIcon" className="icon d-flex align-items-center">
                        <img src="/images/smallIcon.png" alt="small icon" />
                    </div>
                </div>
            </div>
        </div>
    );
}

function DrawCreate(){
    return (
        <div className="container">
            <div className="d-flex justify-content-around">
                <div className="strokWidth">
                    <button className="dropdown-toggle p-0 border-0 bg-transparent" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"></button>
                    <ul id="strokeWidthDropDown" className="dropdown-menu shadow border-0" aria-labelledby="dropdownMenuButton1">
                        <li className="checked"><a className="dropdown-item" href="#" data="1" onClick={(e) => strokeWidth(e)}>1</a></li>
                        <li><a className="dropdown-item" href="#" data="5" onClick={(e) => strokeWidth(e)}>5</a></li>
                        <li><a className="dropdown-item" href="#" data="10" onClick={(e) => strokeWidth(e)}>10</a></li>
                        <li><a className="dropdown-item" href="#" data="15" onClick={(e) => strokeWidth(e)}>15</a></li>
                        <li><a className="dropdown-item" href="#" data="20" onClick={(e) => strokeWidth(e)}>20</a></li>
                    </ul>
                </div>
                <div className="strokeColor">
                    <button className="dropdown-toggle p-0 border-0 rounded-circle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false"></button>
                    <ul id="strokeColorDropDown" className="dropdown-menu flex-wrap shadow border-0 bg-light" aria-labelledby="dropdownMenuButton2">
                        <li className="checked d-flex justify-content-center py-2"><a className="dropdown-item rounded-circle bg-primary" href="#" onClick={(e) => strokeColor(e)} data="0d6efd"></a></li>
                        <li className="d-flex justify-content-center py-2"><a className="dropdown-item rounded-circle bg-secondary" href="#" onClick={(e) => strokeColor(e)} data="#6c757d"></a></li>
                        <li className="d-flex justify-content-center py-2"><a className="dropdown-item rounded-circle bg-success" href="#" onClick={(e) => strokeColor(e)} data="#198754"></a></li>
                        <li className="d-flex justify-content-center py-2"><a className="dropdown-item rounded-circle bg-warning" href="#" onClick={(e) => strokeColor(e)} data="#ffc107"></a></li>
                        <li className="d-flex justify-content-center py-2"><a className="dropdown-item rounded-circle bg-info" href="#" onClick={(e) => strokeColor(e)} data="#0dcaf0"></a></li>
                        <li className="d-flex justify-content-center py-2"><a className="dropdown-item rounded-circle bg-dark" href="#" onClick={(e) => strokeColor(e)} data="#212529"></a></li>
                        <li className="d-flex justify-content-center py-2"><a className="dropdown-item rounded-circle bg-white" href="#" onClick={(e) => strokeColor(e)} data="#ffffff"></a></li>
                    </ul>
                </div>
                <div className="strokEnd dropdown">
                <button className="btn bg-secondary bg-opacity-25 dropdown-toggle" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">butt</button>
                <ul id="strokeEndDropDown" className="dropdown-menu shadow border-0" aria-labelledby="dropdownMenuButton3">
                    <li className="checked"><a className="dropdown-item" href="#" data="butt" onClick={(e) => strokeEnd(e)}>butt</a></li>
                    <li><a className="dropdown-item" href="#" data="round" onClick={(e) => strokeEnd(e)}>round</a></li>
                    <li><a className="dropdown-item" href="#" data="square" onClick={(e) => strokeEnd(e)}>square</a></li>
                </ul>
                </div>
            </div>
            <div id="canvasBox" className="border">
                <canvas id="jsCanvas" className="w-100 h-100 bg-white" />
            </div>
            <div>
                <from id="form" action="/draws/store" method="POST">
                    <a id="save" className="btn d-block text-white my-0 mx-auto mt-4" href="#">저장</a>
                </from>
            </div>
        </div>
    );
}



export default {Draw, DrawCreate};

if (document.getElementById("draw")) {
    ReactDOM.render(<Draw />, document.getElementById("draw"));
}

if (document.getElementById("drawCreate")) {
    ReactDOM.render(<DrawCreate />, document.getElementById("drawCreate"));
}