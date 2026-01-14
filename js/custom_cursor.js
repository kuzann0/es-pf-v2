// Custom cursor functionality with smooth tracking
const cursors = document.querySelectorAll(".cursor");
const cursorBig = document.querySelector(".cursor.big");
const cursorSmall = document.querySelector(".cursor.small");

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

// Track mouse position
document.addEventListener("mousemove", (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

// Smooth animation for cursor movement
function animate() {
  // Smooth follow for big cursor
  const easingBig = 0.15; // Slower movement for big cursor
  currentX += (mouseX - currentX) * easingBig;
  currentY += (mouseY - currentY) * easingBig;
  cursorBig.style.transform = `translate(${
    currentX - cursorBig.offsetWidth / 2
  }px, ${currentY - cursorBig.offsetHeight / 2}px)`;

  // Direct follow for small cursor (more precise)
  cursorSmall.style.transform = `translate(${
    mouseX - cursorSmall.offsetWidth / 2
  }px, ${mouseY - cursorSmall.offsetHeight / 2}px)`;

  requestAnimationFrame(animate);
} // Add hover effect to all clickable elements
var clickableElements = document.querySelectorAll("a, button");
clickableElements.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    cursor.forEach((point) => {
      point.classList.add("hover");
    });
  });

  item.addEventListener("mouseleave", () => {
    cursor.forEach((point) => {
      point.classList.remove("hover");
    });
  });
});

// Start the animation
animate();

// Hide cursors when mouse leaves the window
document.addEventListener("mouseleave", () => {
  cursors.forEach((cursor) => (cursor.style.opacity = "0"));
});

document.addEventListener("mouseenter", () => {
  cursors.forEach((cursor) => (cursor.style.opacity = "1"));
});
