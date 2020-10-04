// ******Add Selectors here*****

const operationString = document.querySelector('.calculator__operation');
const resultString = document.querySelector('.calculator__result');

const btn1 = document.getElementById('1');

const addBtn = document.getElementById('+');

const equalBtn = document.getElementById('=');

// ****add functions here for addition subtraction multiplication and division*****

const additionHandler = () => {
  //
  //
  //
  console.log('addition here');
  console.log('take all the numbers from the operation string add them');
  console.log('and append the result in the result string then display');
  //
  //
  //
};

const displayHandler = () => {
  console.log('find out the operation taking place from operation string');

  // ***** call operation methods eg. additionHandler *****

  console.log('display the result when someone clicks the equal btn');
};

// ******add events here *******

// btn1.addEventListener('click');
//
//
//

// addBtn.addEventListener('click', );

equalBtn.addEventListener('click', displayHandler);
