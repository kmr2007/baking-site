window.onscroll = function () {
  navbarStickAbout();
};

// Index
var navbarAbout = document.getElementById("navbar-about");
var stickyAbout = navbarAbout.offsetTop;
function navbarStickAbout() {
  if (window.pageYOffset >= stickyAbout) {
    navbarAbout.classList.add("sticky");
  } else {
    navbarAbout.classList.remove("sticky");
  }
}
