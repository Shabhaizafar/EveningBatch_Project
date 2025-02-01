const body = document.body.innerHTML;
const btn_menu = document.querySelector('.menu-btn');


document.body.onload = function(){
    document.body.innerHTML = "";
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET","loader.txt");

    xhttp.onload = function (data) {
        document.body.innerHTML = data.target.response;
    }
    xhttp.send();
    setTimeout(() => {
            document.querySelector('.box1').style.background = "white";
        }, 250);
        setTimeout(() => {
            document.querySelector('.box2').style.background = "white";
        }, 500);
        setTimeout(() => {
            document.querySelector('.box3').style.background = "white";
        }, 750);
        setTimeout(() => {
            document.querySelector('.box4').style.background = "white";
        }, 1000);
    setTimeout(() => {
        document.body.innerHTML = body;
        btn_menu.classList.add('add-btn-bg');
    }, 2000);
}


btn_menu.onclick = function(){
    console.log("wert");
};