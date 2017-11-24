# Javascript Calculator
Free Code Camp Advanced Project.
This is probably one of the hardest projects that I've encountered so far.
The most difficult part was to get the logic right for the to function like the real
calculator. The new js methods used were the .eval() and .toExponential().

The challenging task to come up with an algorithm to ensure the length of the result is
exactly 10 digits. The logic is included in the total() function.

```
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
```
My mentor, Tony Johnson, has again helped me with both the structure and
cleanliness of the code. This project took over a week to complete just figuring
out the logic alone.

### Project

Check out the completed projected - [Javascript Calculator](https://promie.github.io/calculator/)

### Preview

![alt text](https://github.com/promie/calculator/blob/master/img/preview2.PNG "Main App")