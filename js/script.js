/*apertura menu e chiusura menu quando sei in schermi piccoli es: telefono */

$('#hamburger').click(function(){
    $('.nav-hamb').addClass('active');
    $('.hamburger').addClass('active');
    $('.close').addClass('active');
});

$('.close').click(function(){
    $('.nav-hamb').removeClass('active');
    $('.hamburger').removeClass('active');
    $('.close').removeClass('active');
});




/* testo macchina da scrivere main uno */


var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString("Hi, I'm Nico")
    .pauseFor(2500)
    .deleteAll()
    .typeString("I'm a Junior Web Developer")
    .pauseFor(2500)
    .deleteChars(13)
    .typeString('<strong style="color:red;">Full Stack Web Developer!</strong>')
    .pauseFor(2500)
    .start();
