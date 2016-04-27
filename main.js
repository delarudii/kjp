/****************** SLIDER ************************/
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();


/**************** NAVBAR SCROLL ******************/
$(document).ready(function() {
    var stickyNavTop = $('.container-fluid').offset().top;

    var stickyNav = function(){
    var scrollTop = $(window).scrollTop();

    if (scrollTop > stickyNavTop) { 
      $('.container-fluid').addClass('sticky');
      $('.navbar-header').addClass('sticky1');
      $('.navbar-nav').addClass('sticky2');
    } 
    else {
      $('.container-fluid').removeClass('sticky');
      $('.navbar-header').removeClass('sticky1');
      $('.navbar-nav').removeClass('sticky2');
  }};

  stickyNav();

  $(window).scroll(function() {
    stickyNav();
  });
});


$(document).ready(function(){
    $("#toggle").click(function(){
        $("#reviews1").slideDown(500);
        $(toggle).css("display", "none");
    });
});

$(document).ready(function(){
  $("#toggle1").click(function(){
        $("#reviews1").slideUp(500);
         $(toggle).css("display", "block");
    });
 });
