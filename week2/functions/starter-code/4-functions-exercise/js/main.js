'use strict';
// -------------------------------------------------------------------------------
// Part 1 - Declaring and calling functions
// -------------------------------------------------------------------------------

// 1. Declare a function. Give it the name "logDate".
// a. Inside the function, log the following value to the console:
//    new Date()
//    (Note: This code uses the Date object to fetch the current date and time.)
const logDate = () => {
  console.log(new Date())
}

// b. Call the function
logDate()

// -------------------------------------------------------------------------------
// Part 2 - Predicting outcomes
// -------------------------------------------------------------------------------

// ---- A ------

// Look at the below function. Predict what will happen when the function is called.

function hotOrNot(temp) {
  temp > 25 ? true : false;
};

hotOrNot(25);


// ---- B ------

// Look at the below function. Predict what will happen when the function is called.
function priceCheck(title, listPrice, taxRate) {
  let salesTax = listPrice * taxRate;
  let total = listPrice + salesTax;
  console.log(title + ' costs £' + total + '.');
};

priceCheck('Catcher in the Rye', 15, .10);


// -------------------------------------------------------------------------------
// Part 3 - declaring variables inside functions
// -------------------------------------------------------------------------------

// write a function called makeAPizza. Inside the function body, declare 3 variables - topping1, topping2 and topping3.
// assign the variables a value eg. 'pepperoni' or 'cheese'
// console.log the sentence "Coming right up! A pizza with" + your 3 variables/toppings


const makeAPizza = () => {
  const topping1 = 'pepperoni'
  const topping2 = 'bacon'
  const topping3 = 'jalapeno'
  console.log('Coming right up!  A pizza with ' + topping1 + ', ' + topping2 + ' and ' + topping3)
}

// invoke the function

makeAPizza()

// -------------------------------------------------------------------------------
// Part 4 - Passing parameters
// -------------------------------------------------------------------------------

// write a function called makeAVeggiePizza.
// the function should take 3 arguments which will be the toppings
// the function should console.log "Coming right up! A pizza with" + your 3 arguments/toppings

const makeAVeggiePizza = (topping1, topping2, topping3) => {
  console.log('Coming right up!  A pizza with ' + topping1 + ', ' + topping2 + ' and ' + topping3)
}

makeAVeggiePizza('green peppers','mushrooms','onions')

// invoke the function with your 3 favourite toppings


const add = (a, b) => {
  return a + b
}

const result = add(9, 5);

console.log(result);

function makeGreeting(name, establishment, isCurrent) {
  if(isCurrent) {
    return `Hello ${name}, we hope you are enjoying your time at ${establishment}`
  }
  return `Hello ${name}, welcome to ${establishment} where we love JavaScript`
}

const anasGreeting = makeGreeting('Ana', 'GA', true)
console.log(anasGreeting);

const anniesGreeting = makeGreeting('Annie', 'General Assembly')
console.log(anniesGreeting);