// BOXES
let allColors = document.querySelectorAll(".color");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let color3 = document.querySelector(".color3");
let color4 = document.querySelector(".color4");
let color5 = document.querySelector(".color5");
let color6 = document.querySelector(".color6");

let winnerColor;

//BUTTONS
let easyButton = document.querySelector("#easy");
let hardButton = document.querySelector("#hard");
let newColors = document.querySelector("#newColors");

//TITLE RGB
let title = document.querySelector("span");
let titleBackground = document.querySelector(".display")

for (let i = 0; i < 6; i++) {
    allColors[i].style.backgroundColor = "white";
}

//When one of the boxes are clicked, it checks for a winner
for (let i = 0; i < allColors.length; i++) {
    allColors[i].addEventListener('click', () => {
        if (checkWinner(allColors[i].style.backgroundColor))
            gameIsDone(allColors[i].style.backgroundColor)
        else
            makeBoxDisappear(allColors[i] );
    })
}

easyButton.addEventListener("click", easyButtonCallBack)

hardButton.addEventListener("click", hardButtonCallBack)


newColors.addEventListener("click", () => { //resets the game
    for (let i = 0; i < 6; i++) {
        allColors[i].style.display = "none";
    }
    easyButton.style.display = "";
    hardButton.style.display = "";
    titleBackground.style.backgroundColor = `rgb(65,120,170)`;
    title.innerHTML = "RGB";

    easyButtonCallBack();


})

function easyButtonCallBack() {
    clearBoxes();
    let rgbArray = [];
    makeThreeColors(rgbArray);
    updateColors(rgbArray, 3);
    let winnerNumber = Math.floor((Math.random() * 2));
    //picking a random color as a winner
    console.log(rgbArray[winnerNumber]);
    winnerColor = `rgb(${rgbArray[winnerNumber].join(", ")})`;
    //Putting the rgb in the title
    title.innerHTML = `RGB (${rgbArray[winnerNumber].join(", ")})`;
}

function hardButtonCallBack() {
    clearBoxes();
    let rgbArray = [];
    makeSixColors(rgbArray);
    updateColors(rgbArray, 6);
    let winnerNumber = Math.floor((Math.random() * 6));
    console.log(rgbArray[winnerNumber]);
    winnerColor = `rgb(${rgbArray[winnerNumber].join(", ")})`;
    title.innerHTML = `RGB (${rgbArray[winnerNumber].join(", ")})`;
}

function checkWinner(color) {
    console.log(color)
    console.log(winnerColor)

    if (color === winnerColor)
        return true;
}


function makeSixColors(rgbArray) { //Making 6 random color RGBS
    let tempArray = []; //storing rgbs in an array, then storing that in an array

    for (let j = 0; j < 6; j++) {
        for (let i = 0; i < 3; i++) {
            tempArray[i] = Math.floor((Math.random() * 256));
        }
        rgbArray[j] = [...tempArray];

    }
}


function makeThreeColors(rgbArray) { //Same as above but for only 3 colors
    let tempArray = [];

    for (let j = 0; j < 3; j++) {
        for (let i = 0; i < 3; i++) {
            tempArray[i] = Math.floor((Math.random() * 256));
        }
        rgbArray[j] = [...tempArray];

    }


}



function updateColors(rgbArray, num) { //takes the array with rgb values and fills the boxes with the color
    for (let i = 0; i < num; i++) {
        allColors[i].style.backgroundColor = `rgb(${rgbArray[i]})`; //putting the colors into 3 or 6 boxes
    }
    if (num === 3) { //displaying only the first 3 boxes
        for (let i = 0; i < 3; i++) {
            allColors[i].style.display = "";
        }
    } else {
        for (let i = 0; i < 6; i++) {
            allColors[i].style.display = "";
        }
    }
}

function makeButtonsDisappear() { //Makes the buttons go away after the player chose a mode.
    easyButton.style.display = "none"
    hardButton.style.display = "none"
}


function gameIsDone(color) {
    allColors.forEach((box) => {
        $(box).fadeIn(); //makes all the boxes appear
        box.style.backgroundColor = color; //gives them all the winning color
    })

    titleBackground.style.backgroundColor = color;
    title.innerHTML = "You Won";
}

function makeBoxDisappear(box) { //makes box disappear if its a wrong guess
    $(box).fadeOut();
}

function clearBoxes() {
    allColors.forEach((box) => {
        box.style.display = "none"; //makes all the boxes appear
    })
    titleBackground.style.backgroundColor = `rgb(65,120,170)`; //resets boxes and background color;
}
