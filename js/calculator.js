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
    document.getElementById('numbers').value = str;
}

const handleOperator = (operator) => {
    if(screenValue.length < 10 && status === 'ON'){
        calculator.push(screenValue, operator)
        screenValue = ''    
    }else{
        alert('Please turn on the calculator');
    }
}

const handleNumber = (number) => {

    if(screenValue.length < 10 && status === 'ON'){
        screenValue += number
        displayScreen(screenValue)
    }else{
        alert('Please turn on the calculator');
    }

}

const total = () => {
    calculator.push(screenValue)
    calculator = [eval(calculator.join(''))]
    let total
    if (calculator[0] > 9999999999 || calculator < -999999999) {
        total = calculator[0].toExponential(4)
    } else if (calculator[0].toString().length > 10) {
        const n = calculator[0].toString().split('.')
        total = calculator[0].toFixed(9 - n[0].toString().length)
    } else {
        total = calculator[0]
    }
    displayScreen(total);
    calculator = [];
    screenValue = '';    
}

const resetButton = () =>{
    if(status === 'ON'){
        screenValue = '';
        calculator = [];
        displayScreen(0);
        status = 'ON';
    }else{
        alert('Please turn on the calculator');
    }
}





