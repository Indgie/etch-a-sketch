
const userInput = prompt("Enter number")
const gridContainer = document.querySelector(".grid-container");

for (let j = 0; j < userInput; j++) {
    const gridbox = document.createElement("div");
    gridContainer.appendChild(gridbox);
    gridbox.classList.toggle("grid-box");
    for (let i = 0; i < userInput; i++) {
        const grid = document.createElement("div");
        grid.classList.toggle("grid");
        gridbox.appendChild(grid);
}
}
// function that colors grids in blue
const colorBlue = function (e) {
    e.target.style.background = 'blue';

}
const colorGrid = document.querySelectorAll(".grid");
Array.from(colorGrid).forEach((g) => {
    g.addEventListener("mouseover", colorBlue);
});