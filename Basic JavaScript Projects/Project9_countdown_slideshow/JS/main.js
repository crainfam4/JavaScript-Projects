function countdown() {                             //This function provides a countdown
    var seconds = document.getElementById("seconds").value;

    function tick() {                              //This function displays a 1-second lower display with each passing second
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);         //This pauses the countdown for 1 second
        if (seconds == -1) {
            alert("Time's up!");                   //When the display would otherwise be -1, it displays an alert to say Time's Up
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}

var slideIndex = 1;                        //Indicates to show slide 1 initially
showSlides(slideIndex);

//Next/previous controls
function plusSlides(n) {                          //A function that moves the slides to the next or previous one by pressing the left or right arrow
    showSlides(slideIndex += n);
}

//Thumbnail image controls
function currentSlide(n) {                        //A function that displays the slide in accordance to the dot that is selected
    showSlides(slideIndex = n);
}

function showSlides(n) {                          //This function shows the slides as described below
    var i;                                        //Specifying a specific slide
    var slides = document.getElementsByClassName("mySlides");   //Regarding all the slides
    var dots = document.getElementsByClassName("dot");          //Pertains to the dots for the slides
    if (n > slides.length) {slideIndex = 1}      //If the number of the slide exceeds the number of slides, display first slide
    if (n < 1) {slideIndex = slides.length}      //If it is less than the total number of slides, display that slide 
    for (i = 0; i < slides.length; i++) {        //This sets it to hide each of the slides before starting with slide 1
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {          //Replace the dots from active to "" before a numbered slide
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";    //Displays the slides as a block element
    dots[slideIndex-1].className += " active";       //Sets the respective dot to active in regard to the number of the slide
}