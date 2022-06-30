// Get element from HTML
const grid = document.getElementById("block-container");

const colorPicker = document.getElementById("color-picker");

const eraser = document.getElementById("eraser");
const rainbow = document.getElementById("rainbow");
const color = document.getElementById("color");
const clear = document.getElementById("clear");

const slider = document.getElementById("slider");
const size = document.getElementById("size");

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

// Update grid size
function updateGridSize() {
  grid.style.gridTemplateColumns = `repeat(${slider.value}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${slider.value}, 1fr)`;
}

// Update color of blocks
function updateColor(block) {
  if (colorValue === 1) {
    block.style.backgroundColor = colorPicker.value;
  } else if (colorValue === 2) {
    block.style.backgroundColor = getRandomColor();
  } else {
    block.style.backgroundColor = "white";
  }
}

// Create and add blocks to grid and update color
for (let i = 0; i < Number(slider.value) ** 2; i++) {
  blocks[i] = document.createElement("div");
  blocks[i].classList.add("block");
  grid.appendChild(blocks[i]);

  blocks[i].addEventListener("mouseover", () => {
    updateColor(blocks[i]);
  });
}

// Change the preferred mode
color.addEventListener("click", () => {
  colorValue = 1;
});

rainbow.addEventListener("click", () => {
  colorValue = 2;
});

colorPicker.addEventListener("change", () => {
  colorValue = 1;
});

eraser.addEventListener("click", () => {
  colorValue = 3;
});

clear.addEventListener("click", () => {
  blocks.forEach((block) => {
    block.style.backgroundColor = "white";
  });
});

// Change the size and number of gird on changing slider
slider.addEventListener("change", (e) => {
  grid.innerHTML = "";

  blocks = [];
  updateGridSize();

  for (let i = 0; i < Number(slider.value) ** 2; i++) {
    blocks[i] = document.createElement("div");
    blocks[i].classList.add("block");
    grid.appendChild(blocks[i]);

    blocks[i].addEventListener("mouseover", () => {
      updateColor(blocks[i]);
    });
  }
  size.textContent = `${slider.value} × ${slider.value}`;
});
