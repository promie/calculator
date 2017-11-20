let screenValue = ""
let calculator = []


const displayScreen = (str) => {
    document.getElementById('numbers').value = str
}

const handleOperator = (operator) => {
    if(screenValue.length < 10){
        calculator.push(screenValue, operator)
        screenValue = ""    
    }
}

const handleNumber = (number) => {
    if(screenValue.length < 10){
        screenValue += number
        displayScreen(screenValue)
    }
}

const total = () => {
    calculator.push(screenValue)
    displayScreen(eval(calculator.join('')))
}

const clearScreen = () =>{
    
    document.getElementById('numbers').value = '';
    screenValue = '';

}

const deleteLastVal = () =>{
    
    const displayValue = document.getElementById('numbers').value;
    const len = displayValue.length - 1;
    const newValue = displayValue.substring(0, len);

    document.getElementById('numbers').value = newValue;
    screenValue = '';
    
}



