const circles = document.querySelectorAll('.circle');
let delay = 0;

circles.forEach(circle => {
  circle.style.animationDelay = delay + 's';
  delay += 0.25;
});
