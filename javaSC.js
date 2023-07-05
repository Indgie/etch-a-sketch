const gridContainer = document.querySelector(".grid-container");
for (let j = 0; j < 16; j++) {
    for (let i = 0; i < 16; i++) {
        const grid = document.createElement("div");
        grid.classList.toggle("grid");
        gridContainer.appendChild(grid);
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