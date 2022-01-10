const album = document.getElementById('album');
const orderBy = document.getElementById('orderBy');

orderBy.addEventListener('change', function(){
    var xhr = new XMLHttpRequest();

    xhr.open('GET', '/draws?orderBy='+this.value, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('X-CSRF-TOKEN', document.head.querySelector("[name=csrf-token]").content);
    xhr.send();

    xhr.onload = () => {
        if (xhr.status == 200) {
            let res = xhr.response;
            var parser = new DOMParser();
            var doc = parser.parseFromString(res, 'text/html');
            var html = doc.getElementById('album').getInnerHTML();
            album.innerHTML = html;
        } else {
            console.log("통신 실패");
        }
    }
});