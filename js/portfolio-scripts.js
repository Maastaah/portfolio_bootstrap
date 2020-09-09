$(document).ready(function () {
  // When the user scrolls the page, execute myFunction
  window.onscroll = function () {
    stickyMenu();
  };

  // Get the navbar
  var navbar = document.getElementById("flex-navbar");

  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function stickyMenu() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }

  $(".work_content").hide();
  $(".collapsible").click(function () {
    $(this).next().slideToggle("slow");
  });
});
