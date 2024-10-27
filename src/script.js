const container = document.querySelector("#container");
const button = document.querySelector("button");
let gridSize = 16;

setGridSize(gridSize);

button.addEventListener("click", () => {
  container.replaceChildren();
  gridSize = prompt("Input Grid Size");
  if (gridSize < 2 || gridSize > 100) {
    alert("Grid cannot be more than 100x100 or less than 2x2");
    setGridSize(16);
  } else {
    setGridSize(gridSize);
  }
});

function setGridSize(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const div = document.createElement("div");
      div.style.width = `${(1 / gridSize) * 100}%`;
      div.style.height = `${(1 / gridSize) * 100}%`;
      div.className = "border flex-grow bg-blue-400";
      container.append(div);
    }
  }
}

container.addEventListener("mouseover", (event) => {
  event.target.className += " bg-blue-900";

  setTimeout(() => {
    event.target.classList.remove("bg-blue-900");
  }, 500);
});
