// PARALLAX TEST
var movingTextRight = document.querySelectorAll(".right");
var movingTextLeft = document.querySelectorAll(".left");

new simpleParallax(movingTextRight, {
  orientation: "right",
  scale: 2,
  overflow: true,
});
new simpleParallax(movingTextLeft, {
  orientation: "left",
  scale: 2,
  overflow: true,
});
