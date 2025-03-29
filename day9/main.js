var slideIndex = 1;
function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("slide");

    console.log(slides)
    for (i=0; i < slides.length; i++){
        slides[i].style.display = "none";

    }

    console.log(n)

    if (n > slides.length){
        slideIndex = 1;
    }
    
    if (n < 0){
        slideIndex = slides.length;
    }

    slides[slideIndex-1].style.display = "block";
}

showSlides();


function plusSlide(n){
    slideIndex += n;
    showSlides(slideIndex);
}

setInterval(plusSlide,3000,1)