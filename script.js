var bigBox = document.querySelector("#bigBox");

// We start by generating 16 rows (in a single column) by looping 16 times. While we are looping, we have a nested loop that we will generate 16 smaller divs in a single row
let basicGrid = 16;

function grid() {
  for (let i = 1; i <= basicGrid; i++) {
    var gridDiv = document.createElement('div');
    gridDiv.id = "gridDiv";
    gridDiv.className = "gridDiv";
    gridDiv.setAttribute('style', 'display:flex;flex-display:row;flex-shrink:2;border-bottom: 1px solid black;width:100%; height:100%;');
    bigBox.appendChild(gridDiv);

    for (let j = 1; j <= basicGrid; j++) {
      var smallDiv = document.createElement('div');
      smallDiv.className = "smallDiv";
      smallDiv.id = "smallDiv";
      smallDiv.setAttribute('style', 'border:solid black; border-width:1px;width:100%; height:100%;cursor:pointer');
      gridDiv.appendChild(smallDiv);
    }
  }
}

// By default, we call the grid function to generate our basic grid. 

grid();


// We put in place an event listener. When the user's mouse hovers on a smallDiv, the background color becomes black. 
const boxes = document.querySelectorAll('.smallDiv');

boxes.forEach(box => {
  box.addEventListener('mouseover', function handleClick() {
    box.style.backgroundColor = "black";
  });
});


// We put in place an event listener for when the user wants to reset the smallDiv background color to white.
// The user clicks on the Reset Button to fire the event. 
const elements = document.getElementsByClassName('smallDiv');
var resetButton = document.querySelector("#resetButton");
resetButton.onclick = function () {

  for (const element of elements) {
    element.style.backgroundColor = "aliceblue";
  }
}

// This function will generate a new grid from user input. It first deletes the previous grid before generating a new one. Otherwise, our new grid will append itself to our former.

function GenerateGrid() {

  // Deleting the previous grid by deleting all child nodes.     
  var bigBox = document.querySelector("#bigBox");
  var child = bigBox.lastElementChild;
  while (child) {
    bigBox.removeChild(child);
    child = bigBox.lastElementChild;
  }

  // User inputs the number of rows/columns he wants to see 
  let basicGrid = prompt("Choose Number between 1 and 100 (incl.)")

  // Updating the slider
  slider.value = basicGrid
  sliderMessage.classList.add('content');
  sliderMessage.textContent = slider.value + " X " + slider.value + " Grid";

  // We only generate the grid if the chosen number is in the appropriate range, else we alert the user and call our grid function to display the 16x16 grid. 
  if (basicGrid >= 1 && basicGrid <= 100) {

    for (let i = 1; i <= basicGrid; i++) {
      var gridDiv = document.createElement('div');
      gridDiv.id = "gridDiv";
      gridDiv.className = "gridDiv";
      gridDiv.setAttribute('style', 'display:flex;flex-display:row;flex-shrink:2;border-bottom: 1px solid black;width:100%; height:100%;');
      bigBox.appendChild(gridDiv);

      for (let j = 1; j <= basicGrid; j++) {
        var smallDiv = document.createElement('div');
        smallDiv.className = "smallDiv";
        smallDiv.id = "smallDiv";
        smallDiv.setAttribute('style', 'border:solid black; border-width:1px;width:100%; height:100%;cursor:pointer');
        gridDiv.appendChild(smallDiv);
      }
    }

    // We put in place our event listener. When the user's mouse hovers on a smallDiv, the background color becomes black. 
    const boxes = document.querySelectorAll('.smallDiv');

    boxes.forEach(box => {
      box.addEventListener('mouseover', function handleClick() {
        box.style.backgroundColor = "black";
      });
    });

    // We put in place an event listener for when the user wants to reset the smallDiv background color to white.
    // The user clicks on the Reset Button to fire our Reset event. 
    const elements = document.getElementsByClassName('smallDiv');
    var resetButton = document.querySelector("#resetButton");
    resetButton.onclick = function () {

      for (const element of elements) {
        element.style.backgroundColor = "aliceblue";
      }
    }
  } else {
    alert("Choose Number between 1 and 100 (incl.)");
    slider.value = 16;
    grid();
    sliderMessage.classList.add('content');
    sliderMessage.textContent = slider.value + " X " + slider.value + " Grid";
      const boxes = document.querySelectorAll('.smallDiv');

  boxes.forEach(box => {
    box.addEventListener('mouseover', function handleClick() {
      box.style.backgroundColor = "black";
    });
  });
  }
}

// Slider Function
var sliderMessage = document.querySelector("#slideMessage")
var slider = document.querySelector("#myRange");
sliderMessage.classList.add('content');
sliderMessage.textContent = slider.value;
sliderMessage.textContent = slider.value + " X " + slider.value + " Grid";

slider.oninput = function () {

  // Deleting the previous grid by deleting all child nodes.     
  var bigBox = document.querySelector("#bigBox");
  var child = bigBox.lastElementChild;
  while (child) {
    bigBox.removeChild(child);
    child = bigBox.lastElementChild;
  }

  let basicGrid = slider.value;

  sliderMessage.classList.add('content');
  sliderMessage.textContent = slider.value + " X " + slider.value + " Grid";


  for (let i = 1; i <= basicGrid; i++) {
    var gridDiv = document.createElement('div');
    gridDiv.id = "gridDiv";
    gridDiv.className = "gridDiv";
    gridDiv.setAttribute('style', 'display:flex;flex-display:row;flex-shrink:2;border-bottom: 1px solid black;width:100%; height:100%;');
    bigBox.appendChild(gridDiv);

    for (let j = 1; j <= basicGrid; j++) {
      var smallDiv = document.createElement('div');
      smallDiv.className = "smallDiv";
      smallDiv.id = "smallDiv";
      smallDiv.setAttribute('style', 'border:solid black; border-width:1px;width:100%; height:100%;cursor:pointer');
      gridDiv.appendChild(smallDiv);
    }
  }

  // We put in place our event listener. When the user's mouse hovers on a smallDiv, the background color becomes black. 
  const boxes = document.querySelectorAll('.smallDiv');

  boxes.forEach(box => {
    box.addEventListener('mouseover', function handleClick() {
      box.style.backgroundColor = "black";
    });
  });

  // We put in place an event listener for when the user wants to reset the smallDiv background color to white.
  // The user clicks on the Reset Button to fire our Reset event. 
  const elements = document.getElementsByClassName('smallDiv');
  var resetButton = document.querySelector("#resetButton");
  resetButton.onclick = function () {

    for (const element of elements) {
      element.style.backgroundColor = "aliceblue";
    }
  }
}
