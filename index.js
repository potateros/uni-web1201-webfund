$(document).ready(function() {
    $(".cross").hide();
    $(".menu").hide();
    $(".hamburger").click(function() {
        $(".menu").slideToggle("slow", function() {
            $(".hamburger").hide();
            $(".cross").show();
        });
    });
    $(".cross").click(function() {
        $(".menu").slideToggle("slow", function() {
            $(".cross").hide();
            $(".hamburger").show();
        });
    });
});

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
    
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

/* $(function() {
    $('#gif-hover').hide();
    $('#hover').on("mouseover", function() {
      $('#hover').hide();
      $('#gif-hover').show();
      $('#pic-hover').hide();
    });

    $('#gif-hover').on("mouseout", function() {
      $('#hover').show();
      $('#gif-hover').hide();
      $('#pic-hover').show();
    });
});
 */
