let color1 = document.querySelector(".color1");

let colorArray = []

for(let i = 0; i <3 ;i++){
    colorArray[i] = Math.floor((Math.random() * 255));
}

color1.style.backgroundColor = `rgb(${colorArray.join()})`;





