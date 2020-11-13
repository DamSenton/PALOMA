var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
 var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-65px";
  }
  prevScrollpos = currentScrollPos;

  if ($(this).scrollTop() > 50) {
    /*height in pixels when the navbar becomes non opaque*/
    $("#navbar").addClass("dark-background");
    $(".nav-link").removeClass("nav-item-black");
    $(".nav-link").addClass("nav-item-white");
  } else {
    $("#navbar").removeClass("dark-background");
    $(".nav-link").addClass("nav-item-black");
     $(".nav-link").removeClass("nav-item-white");
  }
};
//  ---------- Credit to w3schools.com -----------//

$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    /*height in pixels when the navbar becomes non opaque*/
    $(".opaque-navbar").addClass("opaque");
  } else {
    $(".opaque-navbar").removeClass("opaque");
  }
});
