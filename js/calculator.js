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
    const total = eval(calculator.join(''))
    displayScreen(total);
    
    calculator = [total];
    screenValue = '';
}

const resetButton = () =>{
    if(status === 'ON'){
        screenValue = '';
        calculator = [];
        displayScreen(0);
        status = 'ON';
    }
}





