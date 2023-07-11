//-----SLIDER-----
let slider = document.getElementById("myRange");
let output = document.getElementById("sliderValue");
output.innerHTML = slider.value + " x " + slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
function sliderValueChange() {
  output.innerHTML = this.value + " x " + this.value;
  userInput = parseInt(this.value);
  updateGrid(userInput);
}

slider.oninput = sliderValueChange;


//-----GRID------
let userInput = 10; // Default grid size
const gridContainer = document.querySelector(".grid-container");

function updateGrid(size) {
  // Clear the existing grid
  gridContainer.innerHTML = "";

  // Create the new grid
  for (let j = 0; j < size; j++) {
    const gridbox = document.createElement("div");
    gridContainer.appendChild(gridbox);
    gridbox.classList.toggle("grid-box");
    for (let i = 0; i < size; i++) {
      const grid = document.createElement("div");
      grid.classList.toggle("grid");
      gridbox.appendChild(grid);
      
      // Add event listener to color the grid on mouseover
      grid.addEventListener("mouseover", colorPicked);
      let rainbowColor = document.querySelector("#rainbow");
      rainbowColor.addEventListener("click", () => {
        grid.addEventListener("mouseover", randomizedColor);
      })
    }
  }
}

// Initial grid creation
updateGrid(userInput);

// Color the grid block with the selected color
function colorPicked(e) {
  const colorPicker = document.getElementById("colorpicker");
  const selectedColor = colorPicker.value;
  e.target.style.background = selectedColor;
}

// Generate a random color and apply it to the grid block
function randomizedColor(e) {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  e.target.style.background = randomColor;
}

//RESET grid with button
const selectedButton = document.querySelector("#reset");
selectedButton.addEventListener('click', () => {
    updateGrid(userInput);
  });






//____________OLD___CODE_________//


/*//-----SLIDER-----
let slider = document.getElementById("myRange");
let output = document.getElementById("sliderValue");
output.innerHTML = slider.value + " x " + slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
function sliderValueChange() {
  output.innerHTML = this.value + " x " + this.value;
    userInput = parseInt(this.value);
}
slider.oninput = sliderValueChange;


//-----GRID------
let userInput = 10;//prompt("Enter number")
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
//----COLORING----
const colorPicked = function (e) {
    const colorPicker = document.getElementById("colorpicker");
    const selectedColor = colorPicker.value;
    e.target.style.background = selectedColor;

}
const randomizedColor = function(e) {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    e.target.style.background = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
  }

const colorGrid = document.querySelectorAll(".grid");
Array.from(colorGrid).forEach((g) => {
    g.addEventListener("mouseover", randomizedColor);
});*/

