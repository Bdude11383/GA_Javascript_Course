'use strict';
/*
  Write code that generates random addresses
  Each time you run it, your program should log
  a new randomly-generated address to the console.

  Step 1:
    Create arrays that contain dummy data for each of the following:
    door number, street name, city name, and post code

  Step 2:
    Write code that randomly selects one item from each of these arrays, uses
    the selected values to construct a string containing a random address, and
    then logs the result to the console.

    HINT: You will need to use methods in JavaScript's Math object
    (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

  Step 3:
    Save your work, run the program in Node, and verify
    that a random address is logged.

  Step 4:
    Rerun the program again and verify that a different random address is logged.

  Example output:
    12 Dolphin Street, London , W11 2SE
*/

//STEP 1
const doorNumber = [12, 46, 91]

const streetName = ['Panda Dr.', 'Tiger St.', 'Squirrel Ave.']

const cityName = ['Chicago', 'New York', 'Los Angeles']

const postCode = ['60607', '60062', '60657']

//STEP 2
let randomElement = Math.floor(Math.random()*doorNumber.length)

console.log(doorNumber[randomElement] + ' ' + streetName[randomElement] + ' ' + cityName[randomElement] + ' ' + postCode[randomElement])

//STEP 3
randomElement = Math.floor(Math.random() * doorNumber.length)

console.log(doorNumber[randomElement] + ' ' + streetName[randomElement] + ' ' + cityName[randomElement] + ' ' + postCode[randomElement])

//STEP 4
randomElement = Math.floor(Math.random() * doorNumber.length)

console.log(doorNumber[randomElement] + ' ' + streetName[randomElement] + ' ' + cityName[randomElement] + ' ' + postCode[randomElement])

//OUTPUT OF PROGRAM
//46 Tiger St. New York 60062
//91 Squirrel Ave. Los Angeles 60657
//12 Panda Dr. Chicago 60607