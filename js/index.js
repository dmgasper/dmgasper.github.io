let topButton = document.getElementById("topBtn");

addEventListener("scroll", (e) => scrollFunction());

function scrollFunction() {
  console.log("Scroll event fired");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    // topButton.classList.remove("d-none");
  } else {
    topButton.classList.add("d-none");
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
