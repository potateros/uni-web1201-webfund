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
