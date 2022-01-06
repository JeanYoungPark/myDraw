const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext("2d");

canvas.width = document.getElementById('canvasBox').offsetWidth;
canvas.height = 600;

const saveBtn = document.getElementById("save");

ctx.strokeStyle = '#0d6efd';

let painting = false;
let data = [];
let savedArr = [];

function stopPainting(){
    ctx.closePath();
    painting = false;
}

function startPainting(e){
    const x = e.offsetX;
    const y = e.offsetY;

    ctx.beginPath();
    ctx.moveTo(x, y);
    painting = true;
}

function onMouseMove(e){
    if(!painting) {
        return;
    }

    const x = e.offsetX;
    const y = e.offsetY;

    data.push({x:x, y:y});
    ctx.lineTo(x, y);
    ctx.stroke();
}

function strokeWidth(e){
    let width = e.getAttribute('data');
    let items = document.getElementById('strokeWidthDropDown');
    ctx.lineWidth = width;

    for(let i = 0 ; i < items.childElementCount; i++) {
        items.children[i].classList.remove('checked');
    }

    e.parentElement.classList.add('checked');
}

function strokeColor(e){
    let color = e.getAttribute('data');
    let items = document.getElementById('strokeColorDropDown');
    ctx.strokeStyle = color;
    document.getElementById('dropdownMenuButton2').style.backgroundColor = color;

    for(let i = 0 ; i < items.childElementCount; i++) {
        items.children[i].classList.remove('checked');
    }

    e.parentElement.classList.add('checked');
}

function strokeEnd(e){
    let end = e.getAttribute('data');
    let items = document.getElementById('strokeEndDropDown');
    let btn = document.getElementById('dropdownMenuButton3');
    ctx.lineCap = end;

    for(let i = 0 ; i < items.childElementCount; i++) {
        items.children[i].classList.remove('checked');
    }

    e.parentElement.classList.add('checked');
    btn.innerText = end;
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);

    const saveBtn = document.getElementById('save');

    saveBtn.addEventListener("click", function(){
        const form = document.getElementById('form');
        let canvasData = canvas.toDataURL("image/png");
        let input = document.createElement('input');
        
        input.setAttribute("name",'file_name');
        input.setAttribute("value",canvasData);
        form.appendChild(input);
        form.submit();
    });
}