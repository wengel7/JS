//Converting Temperature
 
document.getElementById("submitButton").onclick = function(){

    let temp = document.getElementById("textBox").value;
    temp = Number(temp);

    if(document.getElementById("cButton").checked){
        temp = toCelsius(temp);
        document.getElementById("textLable").innerHTML = temp + "°C";
        document.getElementById("cButton").remove;    }

    else if(document.getElementById("fButton").checked){
        temp = toFalhrenheit(temp);
        document.getElementById("textLable").innerHTML = temp + "°F";
    }

    else{
        alert(`No unit have been clicked`);
    }
    
};

 
function toCelsius(temp){
    return (temp - 32) * (5/9);
}

function toFalhrenheit(temp){
    return (temp * 9/5) + 32;
}

