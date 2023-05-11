// Sticky Nav Bar for Index.html

var navbarIndex = document.getElementById("navbar-index");

var stickyIndex = navbarIndex.offsetTop;
window.onscroll = function () {
  navbarStickIndex();
};
function navbarStickIndex() {
  if (window.pageYOffset >= stickyIndex) {
    navbarIndex.classList.add("sticky");
  } else {
    navbarIndex.classList.remove("sticky");
  }
}
