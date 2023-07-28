// document.getElementById("myButton").onclick = function(){
//     if(document.getElementById("myCheckbox").checked){
//         console.log("Checked");
//     }
//     else{
//         console.log("Not checked");
//     }
// }

//We can write this clean for readablity

document.getElementById("myButton").onclick = function(){
    
    const myCheckbox = document.getElementById("myCheckbox").checked
    const visa = document.getElementById("visa").checked;
    const paypal = document.getElementById("paypal").checked;
    const masterCard = document.getElementById("masterCard").checked;

    if(myCheckbox){
        console.log("Checked");
    }
    else{
        console.log("Not checked");
    }

   if(visa){
            console.log("Payed with visa");
    }
    else if(paypal){
        console.log("Payed with PayPal");
    }   
    else if(masterCard){
        console.log("Payed wirth master card");
    } 
    
}

