// Script to fade the color of the navbar as the user scrolls
// Written with help from ChatGPT 3.5

function fadeBetweenColors(startColor, endColor) {
  const container = document.getElementById("container");
  const navbar = document.querySelector(".navbar");
  const section1 = document.getElementById("section1");

  container.addEventListener("scroll", () => {
    const scrollPosition = section1.offsetTop;
    const sectionHeight = section1.clientHeight;

    let alpha = Math.min(Math.max(scrollPosition / sectionHeight, 0), 1);
    const interpolatedColor = interpolateColors(startColor, endColor, alpha);
    console.log(scrollPosition);
    navbar.style.backgroundColor = interpolatedColor;
  });
}

function interpolateColors(color1, color2, alpha) {
  const [r1, g1, b1] = parseColor(color1);
  const [r2, g2, b2] = parseColor(color2);

  const r = Math.round((1 - alpha) * r1 + alpha * r2);
  const g = Math.round((1 - alpha) * g1 + alpha * g2);
  const b = Math.round((1 - alpha) * b1 + alpha * b2);

  return `rgb(${r}, ${g}, ${b})`;
}

function parseColor(color) {
  const match = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (match) {
    return [parseInt(match[1]), parseInt(match[2]), parseInt(match[3])];
  }
  throw new Error("Invalid color format");
}

document.addEventListener("DOMContentLoaded", function () {
  fadeBetweenColors("rgb(255, 0, 0)", "rgb(0, 0, 255)");
});

// function textStyle(x) {
//   return `scale(${x})`;
// }

// const container = document.getElementById("container");
// const navbar = document.querySelector(".navbar");
// const section1 = document.getElementById("section1");
// const primaryColor = "255, 0, 0"; // Example primary color in RGB format

// container.addEventListener("scroll", () => {
//   console.log(navbar);
//   console.log(section1);
//   let alpha;
//   if (section1.offsetTop < 10) alpha = 1;
//   if (section1.offsetTop > 210) alpha = 0.5;
//   else {
//     alpha = 1 - 0.5 * ((section1.offsetTop - 10) / 200);
//   }
//   console.log(alpha);
//   navbar.style.backgroundColor = `rgba(${primaryColor}, ${alpha})`; // Removed the semicolon and fixed the template literal
//   console.log(navbar.style.backgroundColor);
// });
