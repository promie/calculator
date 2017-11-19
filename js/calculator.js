//Eval() function


/*

Function #1
Logic for On and Off Button


Function #2
Get the numbers to appear on the screen
- onclick function that takes in one parameter with the value to the screen
- IF value is equal to AC = set value to zero




Function #3
Get total value when press equal
- eval to the value of the display (eval() function)


Functionn #4
Back space, the CE button.

Things to consider:
- What happens when a user presses and Operator first?
- What happens when the user presses the Operator twice?
- Working out the length of the digits

*/

/*
Function #2
Get the numbers to appear on the screen
- onclick function that takes in one parameter with the value to the screen
- IF value is equal to AC = set value to zero
*/


const screenValue = document.getElementById('numbers');



const displayScreen = (number) =>{
    
    if(screenValue.value.length < 10){
        return screenValue.value += number;
    }
}

const clearScreen = () =>{
    return screenValue.value = '';
}

const total = () =>{

    const number = screenValue.value;
    const newTotal = eval(number);

    screenValue.value = newTotal;

}

const deleteLastVal = () =>{

    const displayValue = screenValue.value;
    const len = displayValue.length - 1;
    const newValue = displayValue.substring(0, len);

    screenValue.value = newValue;

}




