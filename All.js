const body = document.body.innerHTML;
// console.log(body);


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
    }, 2000);
}