// script.js

function changeColor() {
    // Predefined color names
    const colorNames = [
      "red", "orange", "yellow", "green", "blue", "indigo", "violet", "black", "brown"
    ];
  
    // Prompt the user to select a color
    const selectedColor = prompt("Choose a color: \n" + colorNames.join(", ")).toLowerCase();
  
    // Get the body element
    const body = document.body;
  
    // Validate the user input and change the background color
    if (colorNames.includes(selectedColor)) {
      body.style.backgroundColor = selectedColor;
    } else {
      alert("Invalid color choice. Please choose a valid color.");
    }
  }
  