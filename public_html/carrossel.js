var slideIndex = 1;
showSlides(slideIndex);

var slideInterval = setInterval(function () {
plusSlides(1);
}, 2000);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("carousel-slide");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
slides[slideIndex-1].style.display = "block";
}

var carouselSlides = document.getElementsById("img-slide");
for (var i = 0; i < carouselSlides.length; i++) {
carouselSlides[i].addEventListener("click", function() {
clearInterval(slideInterval);
});
}