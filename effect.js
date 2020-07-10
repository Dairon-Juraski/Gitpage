var i = 0;
var txt = 'Dairon Juraski';
var speed = 100;

typeWriter();

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("name").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}