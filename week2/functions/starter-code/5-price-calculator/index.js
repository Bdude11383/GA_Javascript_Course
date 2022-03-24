//'use strict';

  //Write code to to calculate a customer's total cost in pounds based on product price, tax rate, shipping cost,
  //and the currency they're using for the purchase (pounds or euros).

  // Create a function called calcTotal() that accepts parameters for all the
  //  necessary information.
    

const CalcTotal = (productPrice, taxRate, shippingCost, currency) => {

  // Start your calculations by converting the price from euro to pounds if necessary 
  //(HINT: use a conditional statement, and call the convertEurosToPounds() function.)
const convertEurosToPounds = (euros) => {
  const pounds = euros * 0.83
  return(pounds)
}

  if (currency === 'euros') {
    productPrice = convertEurosToPounds(productPrice)
  }

   // Calculate and store the total tax (price times tax).
  const totalTax = productPrice * taxRate

  // Calculate and store the total cost (the total of price, total tax, and shipping).
  const totalCostRaw = productPrice + totalTax + shippingCost

  // Convert the total cost to two decimal places (HINT: look up the toFixed() method).
  const totalCost = totalCostRaw.toFixed(2)

  // Log the total cost to the console, with text describing what the value is.
  console.log(totalCost + 'is the sum of product, tax and shipping costs')

  return totalCost

}

// Call the function with the arguments 85.43 for price, 0.0825 for tax rate,
//  and 7.95 for shipping cost, and pounds as the currency, and verify that the
//  values returned are realistic.

console.log(CalcTotal(85.43, 0.0825, 7.95, 'pounds'))

// Call the function again with the same values but changing the currency to
//  euro and verify that you get a different, but realistic, result.

//console.log(totalCost(85.43, 0.0825, 7.95, 'euros'))

 



