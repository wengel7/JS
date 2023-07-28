let count = 0;
document.getElementById("num").innerHTML = count;
document.getElementById("decrease").onclick = function(){
    //if(count > 0){
        count--;
    //}
    document.getElementById("num").innerHTML = count;
};

document.getElementById("reset").onclick = function(){
    count = 0;
    document.getElementById("num").innerHTML = count;
};

document.getElementById("increase").onclick = function(){
    count++;
    document.getElementById("num").innerHTML = count;
};