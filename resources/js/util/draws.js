const album = document.getElementById('album');
const orderBy = document.getElementById('orderBy');

orderBy.addEventListener('change', function(){
    let xhr = new XMLHttpRequest();

    xhr.open('GET', '/draws?orderBy='+this.value, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('X-CSRF-TOKEN', document.head.querySelector("[name=csrf-token]").content);
    xhr.send();

    xhr.onload = () => {
        if (xhr.status == 200) {
            let res = xhr.response;
            let parser = new DOMParser();
            let doc = parser.parseFromString(res, 'text/html');
            let html = doc.getElementById('album').getInnerHTML();
            album.innerHTML = html;
        } else {
            console.log("통신 실패");
        }
    }
});

const bigIcon = document.getElementById('bigIcon');
const smallIcon = document.getElementById('smallIcon');

bigIcon.addEventListener('click', function(){
    if(!album.classList.contains('bigSize')) {
        album.classList.remove('smallSize');
        album.classList.add('bigSize');
    }
});

smallIcon.addEventListener('click', function(){
    if(!album.classList.contains('smallSize')) {
        album.classList.remove('bigSize');
        album.classList.add('smallSize');
    }
});