//Calc functionality
console.log("JavaScript file loaded!");

const display = document.getElementById("display");

function appendToDisplay(input){
    console.log("JavaScript Button file loaded!");

    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Invalid Expression!";
    }
}