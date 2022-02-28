var movingImgTop = document.querySelectorAll(".top-container-img");
var movingImgBottom = document.querySelectorAll(".bottom-container-img");

new simpleParallax(movingImgTop, {
  orientation: "up",
  overflow: true,
});
new simpleParallax(movingImgBottom, {
  orientation: "up",
  overflow: true,
});
