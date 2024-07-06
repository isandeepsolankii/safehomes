// Preloader
window.addEventListener("load", function () {
  // Simulate a loading process
  setTimeout(function () {
    // Hide the preloader
    document.getElementById("preloader").style.display = "none";
    // Show the main content
    document.getElementById("content").style.display = "block";
  }, 2000); // Adjust the timeout duration as needed
});

/**
 * Back to top button
 */
let backtotop = select(".back-to-top");
if (backtotop) {
  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      backtotop.classList.add("active");
    } else {
      backtotop.classList.remove("active");
    }
  };
  window.addEventListener("load", toggleBacktotop);
  onscroll(document, toggleBacktotop);
}

document.addEventListener("DOMContentLoaded", function () {
  var backToTopButton = document.getElementById("back-to-top");

  // Show the button when the user scrolls down 100px from the top
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  // Scroll back to the top when the button is clicked
  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
