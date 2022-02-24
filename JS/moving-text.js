const breakPoint = document
  .querySelector(".moving-text-container")
  .getBoundingClientRect().bottom;

var movingTextRight = document.querySelectorAll(".right");
document.addEventListener("scroll", () => {
  if (document.body.scrollTop < breakPoint) {
    movingTextRight.forEach((element) => {
      element.style.transform = "translateX(" + window.scrollY * 0.5 + "px)";
    });
  }
});

var movingTextLeft = document.querySelectorAll(".left");
document.addEventListener("scroll", () => {
  if (document.body.scrollTop < breakPoint) {
    movingTextLeft.forEach((element) => {
      element.style.transform = "translateX(" + window.scrollY * -0.5 + "px)";
    });
  }
});
