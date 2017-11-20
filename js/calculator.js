//Eval() function


/*

Function #1
Logic for On and Off Button


Function #2
Get the numbers to appear on the screen
- onclick function that takes in one parameter with the value to the screen
- IF value is equal to AC = set value to zero


yes HAHAHAHA
Function #3
Get total value when press equal
- eval to the value of the display (eval() function)


Things to consider:
- What happens when a user presses and Operator first?
- What happens when the user presses the Operator twice?
- Working out the length of the digits

*/


//const screenValue = document.getElementById('numbers');
//let totalValue = '';
//const maxLength = 10;

var screenValue = ""
var calculator = []


const displayScreen = (str) => {
    document.getElementById('numbers').value = str
}

const handleOperator = (operator) => {
    calculator.push(screenValue, operator)
    screenValue = ""
    console.log(calculator)
}

const handleNumber = (number) => {
    screenValue += number
    displayScreen(screenValue)
}

const total = () => {
    calculator.push(screenValue)
    displayScreen(eval(calculator.join('')))
}

/*
const displayScreen = (number) =>{
    
    if(number === '+' || number === '-' || number ==='*' || number === '/' ){
        return totalValue += number;
        
    }

    if(screenValue.value.length < maxLength){
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

const onOFF = () =>{
    
    let status = document.getElementById('on-off').innerHTML;
    
    if(status === 'ON'){
        screenValue.value = 'WELCOME';
        status = 'OFF';
    }   
    

}

*/


