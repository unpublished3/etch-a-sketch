const grid = document.getElementById("block-container");

let blocks = [];

for (let i = 0; i < 16 ** 2; i++) {
  blocks[i] = document.createElement("div");
  blocks[i].classList.add("block");
  grid.appendChild(blocks[i]);
}

blocks.forEach((block) => {
  block.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "black";
  });
});
