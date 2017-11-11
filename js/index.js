//For index.html slideshow
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slides");

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > x.length) {
        slideIndex = 1;
    }

    x[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

document.getElementById("submitBtn").onclick = function submitted(){
    var input = document.getElementById("email").value;
    alert("Thank you for signing up to our newsletter. Your email is: " + input);
}
