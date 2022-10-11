var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);

}
var slideIndex = 0;
showSlides1();

function showSlides1() {
    var i;
    var slides = document.getElementsByClassName("mySlides1");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides1, 2000);

}
var slideIndex = 0;
showSlides2();

function showSlides2() {
    var i;
    var slides = document.getElementsByClassName("mySlides2");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides2, 2000);

}
function search() {
    document.getElementById("search").style.display = "block"
    document.getElementById("break").style.display = "block"
 }

 function break1() {
    document.getElementById("search").style.display = "none"
    document.getElementById("break").style.display = "none"
 }
 function Reviews() {
    message = document.getElementById("message1").value
    document.getElementById("name_Reviews").innerHTML = message
    message1 = document.getElementById("message").value
    document.getElementById("for_Reviews").innerHTML = message1
    document.getElementById("Reviews1").style.display = "block"
 }