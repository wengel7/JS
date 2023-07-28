// Checking more then 1 condition we use ...
//"&&" stands for "and" meaning both condition must be met
//"||" stands for "or" meaning 1 condition atleast must be met
//
let temp = 30;
if(temp == 0 || temp < 30){
    console.log("the weather is good!");
}
else if(temp >= 30 && temp >= 0){
    console.log("the weather is bad!");
}