const hexArray = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

$("#btn").click(makeHex);

function makeHex(){
    let hex = '#'
    
    for (let i =0 ; i<6; i++){
        let random = Math.floor(Math.random()*hexArray.length);
        hex += hexArray[random];
    }
    
    console.log(hex)
    
    $("body").css("background-color",hex);
    
    $("div").text(hex);
}

