let screenValue = ""
let calculator = []
let status = 'OFF';

const onOFF = () =>{
    
    if(status === 'OFF'){
        displayScreen(0);
        status = 'ON';
        document.getElementById('on-off').innerHTML = 'OFF';
    }else{
        status = 'OFF';
        document.getElementById('on-off').innerHTML = 'ON';
        displayScreen('');
        screenValue = '';
        calculator = [];
    }
    
}


const displayScreen = (str) => {
    document.getElementById('numbers').value = str
}

const handleOperator = (operator) => {
    if(screenValue.length < 10 && status === 'ON'){
        calculator.push(screenValue, operator)
        screenValue = ""    
    }
}

const handleNumber = (number) => {
    if(screenValue.length < 10 && status === 'ON'){
        screenValue += number
        displayScreen(screenValue)
    }
}

const total = () => {
    calculator.push(screenValue)
    displayScreen(eval(calculator.join('')))
}

const clearScreen = () =>{
    
    screenValue = 0;
    calculator = [0];
    displayScreen(screenValue);
}

const deleteLastVal = () =>{
    
    const displayValue = document.getElementById('numbers').value;
    const len = displayValue.length - 1;
    const newValue = displayValue.substring(0, len);

    displayScreen(newValue);
    screenValue = '';
  
}





