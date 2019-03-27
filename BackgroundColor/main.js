let button = $('#btn')

let colorArray = ["red","blue","green","pink","black","purple","orange","yellow"];

let counter = 0;

button.click(changeColor);

function changeColor(){
    $("body").css("background-color", colorArray[counter])
    counter++;
    if(counter===colorArray.length){
        counter=0;
    }
}    
