// Get element from HTML
const grid = document.getElementById("block-container");

const colorPicker = document.getElementById("color-picker");

const black = document.getElementById("black");
const random = document.getElementById("random");
const custom = document.getElementById("custom");

let blocks = [];
let colorValue = 1;

// Generate random color code
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Create and add blocks to grid
for (let i = 0; i < 16 ** 2; i++) {
  blocks[i] = document.createElement("div");
  blocks[i].classList.add("block");
  grid.appendChild(blocks[i]);
}

// Change the preferred color
black.addEventListener("click", () => {
  colorValue = 1;
});

custom.addEventListener("click", () => {
  colorValue = 2;
});

random.addEventListener("click", () => {
  colorValue = 3;
});

colorPicker.addEventListener("change", () => {
  colorValue = 2;
});

// Update color of blocks
blocks.forEach((block) => {
  block.addEventListener("mouseover", (e) => {
    if (colorValue === 1) {
      e.target.style.backgroundColor = "black";
    } else if (colorValue === 2) {
      e.target.style.backgroundColor = colorPicker.value;
    } else {
      e.target.style.backgroundColor = getRandomColor();
    }
  });
});
