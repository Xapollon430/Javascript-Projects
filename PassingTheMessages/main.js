$( document ).ready(function() {
    
    $("#btn").on('click',(e) =>{
        e.preventDefault(); // PREVENT FROM SUBMITTING
        
        if($("input").val()===""){ // CHECK IF THE INPUT IS EMPTY
            $("
              // SWAP CLASSES
        }
        
        else{
            let text = $("input").val();
            
//            if($("#addOn").length){ // CHECK IF THE INPUT HAS ALREADY BEEN THERE
//                
//                console.log("we coming here")
//                $("#addOn").text(`${text}`) // CHANGE THE OLD ADD ON
//            }
//            else { /`/ FIRST TIME INPUTTING SOMETHING
            $("#addAfter").after(`<div id="addOn"> ${text} </div>`); // ADD IT AFTER THE ADDAFTER DIV
//            }
            
            $("input").val(""); //RESET VALUES
        }
        
        
    })
    
    
});