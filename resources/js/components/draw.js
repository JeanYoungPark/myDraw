import React from "react";
import ReactDOM from "react-dom";

function DrawBtn (){
    return <a className="btn bg-secondary rounded bg-opacity-50" href="/draws/create">그림 그리기</a>;
}

function Draw() {
    return (
        <div className="container d-flex justify-content-between">
            {DrawBtn()}
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
        <div></div>
    );
}

export default {Draw, DrawCreate};

if (document.getElementById("draw")) {
    ReactDOM.render(<Draw />, document.getElementById("draw"));
}

if (document.getElementById("drawCreate")) {
    ReactDOM.render(<DrawCreate />, document.getElementById("drawCreate"));
}