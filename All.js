const body = document.body.innerHTML;
const btn_menu = document.querySelector('.menu-btn');

// document.body.onload = function () {
//     document.body.innerHTML = "";
//     const xhttp = new XMLHttpRequest();
//     xhttp.open("GET", "loader.txt");

//     xhttp.onload = function (data) {
//         document.body.innerHTML = data.target.response;
//     }
//     xhttp.send();
//     setTimeout(() => {
//         document.querySelector('.box1').style.background = "white";
//     }, 250);
//     setTimeout(() => {
//         document.querySelector('.box2').style.background = "white";
//     }, 500);
//     setTimeout(() => {
//         document.querySelector('.box3').style.background = "white";
//     }, 750);
//     setTimeout(() => {
//         document.querySelector('.box4').style.background = "white";
//     }, 1000);
//     setTimeout(() => {
//         document.body.innerHTML = body;
//     }, 2000);
// }
document.body.addEventListener('click', function (event) {
    if (event.target.innerText == 'menu') {
        document.querySelector('.side-menu').style.display = "grid";
    }
    if (event.target.innerText == 'close') {
        document.querySelector('.side-menu').style.display = "none";
    }
});


// setInterval(() => {
//     if(scrollY>0){
//         location.href = "#sec-2";   
//     }else if(screenY<window.innerHeight){
//         location.href = "#sec-1";   
//     }
// },0);


// -----------------------


function All() {
    document.querySelector('.past-c').style.left = "0vw";
    document.querySelector('.past-c').style.transition = 'all 2s';
}



const ul = document.querySelector('.past-ul');
ul.addEventListener('mouseover',function(event){
    if(event.target.tagName=='BUTTON' && !event.target.parentElement.classList.contains('active')){
        event.target.parentElement.classList.add('active');
    }
});
ul.addEventListener('mouseout',function(event){
    if(event.target.tagName=='BUTTON' && event.target.parentElement.classList.contains('active')){
        event.target.parentElement.classList.remove('active');
    }
});
ul.addEventListener('click',function(event){
    if(event.target.tagName=='BUTTON' && event.target.innerText=="INTRO1"){
        document.querySelector('.section-4').style.top = "0vh";
    }
});
