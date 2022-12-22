const { fromEuroToDollar } = require('./app.js')
test("One euro should be 1.2 dollars", function(){
    //import the function from app.js

    
// use the function like its suppoed to be used
const dollars = fromEuroToDollar(1)
// if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
const expected = 1.2; 

// this is the comparison for the unit test
 expect(dollars).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

//////////////////////////////////////

const { fromDollarToYen } = require('./app.js')
test("One euro should be 1.2 dollars", function(){

const Yen = fromDollarToYen(1.2)

const expected = 127.9; 


 expect(Yen).toBe(expected);
})

/////////////////////////////////////

const { fromYenToPound } = require('./app.js')
test("One euro should be 1.2 dollars", function(){

const Pound = fromYenToPound(127.9)

const expected = 0.8; 


 expect(Pound).toBe(expected);
})