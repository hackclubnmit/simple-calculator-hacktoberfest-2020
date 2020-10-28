// ******Add Selectors here*****

const operationString = document.querySelector('.calculator__operation');
const resultString = document.querySelector('.calculator__result');

const btn0 = document.getElementById('0');
const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');
const btn4 = document.getElementById('4');
const btn5 = document.getElementById('5');
const btn6 = document.getElementById('6');
const btn7 = document.getElementById('7');
const btn8 = document.getElementById('8');
const btn9 = document.getElementById('9');
const btnDot = document.getElementById('.');
const btnPercent = document.getElementById('%');

const addBtn = document.getElementById('+');
const subsBtn = document.getElementById('-');
const multiplyBtn = document.getElementById('*');
const divideBtn = document.getElementById("/");
const equalBtn = document.getElementById('=');
const resetBtn = document.getElementById("reset");
const removeLastBtn = document.getElementById("removeLast");

// ****add functions here for addition subtraction multiplication and division*****
const displayHandler = () => {
  resultString.innerHTML = eval(operationString.innerHTML);
};

const appendText = (character) => {
  operationString.innerHTML += character
}

const removeLastChar = () => {
  if (operationString.innerHTML.length >= 1) {
    operationString.innerHTML = operationString.innerHTML.substring(0, operationString.innerHTML.length - 1);
  }
}

const resetInput = () => {
  operationString.innerHTML = "";
  resultString.innerHTML = "";
}

const handleDot = () => {
  let display = operationString.innerHTML;
  let operators = ["-", "+", "/", "*"]
  //if no number or the last number is an operator, append "0." instead of only "."
  if (display.length === 0 || operators.includes(display.charAt(display.length - 1))) {
    appendText("0.")
    return;
  }
  else {
    //only append dot if current number does not already include a dot.
    let numbers = display.split(/[-/*+]/)
    if (numbers[numbers.length - 1].includes(".")) return;
    else appendText(".")
  }
}

const handleOperator = (symbol) => {
  let display = operationString.innerHTML;
  let operators = ["-", "+", "/", "*"]
  // user can't start with an operator apart from minus eg "-4" but not "/4"  
  if (display.length === 0) {
    if (symbol === "-") {
      appendText(symbol)
      return;
    } else return;
  }
  // prevent duplicate operators eg "4-*+4" 
  if (operators.includes(display.charAt(display.length - 1))) {
    return;
  }
  // otherwise add symbol to display
  appendText(symbol)
}


// ******add events here *******

equalBtn.addEventListener('click', displayHandler);
addBtn.addEventListener('click', () => handleOperator("+"));
subsBtn.addEventListener('click', () => handleOperator("-"));
multiplyBtn.addEventListener('click', () => handleOperator("*"));
divideBtn.addEventListener('click', () => handleOperator("/"));
resetBtn.addEventListener('click', () => resetInput());
removeLastBtn.addEventListener('click', () => removeLastChar());

btn0.addEventListener('click', () => appendText("0"));
btn1.addEventListener('click', () => appendText("1"));
btn2.addEventListener('click', () => appendText("2"));
btn3.addEventListener('click', () => appendText("3"));
btn4.addEventListener('click', () => appendText("4"));
btn5.addEventListener('click', () => appendText("5"));
btn6.addEventListener('click', () => appendText("6"));
btn7.addEventListener('click', () => appendText("7"));
btn8.addEventListener('click', () => appendText("8"));
btn9.addEventListener('click', () => appendText("9"));
btnDot.addEventListener('click', () => handleDot());
btnPercent.addEventListener('click', () => appendText('%'));