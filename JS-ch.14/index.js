//switch statments
//Just like if but different in the way it do it cases

let grade = "A";

// if(grade == "A"){
//     console.log(grade);
// }
// else if(grade == "B"){
//     console.log(grade);
// }
// else if(grade == "C"){
//     console.log(grade);
// }
// else if(grade == "D"){
//     console.log(grade);
// }
// else{
//     console.log("You failed");
// }

switch(grade){
    case "A":
        console.log(grade);
        break;//break help to stop the case to continue exciting the next case
    case "B":
        console.log(grade);
        break;
    case "C":
        console.log(grade);
        break;
    case "D":
        console.log(grade);
        break;
    default:
        console.log("You failed");    
}