// import the function sum from the app.js file
const {fromDollarToYen, fromYentoPound, fromEurotoDollar } = require('./app.js');

// start your first test
test('X Rate should be equal to Y rate', () => {
    //inside the test we call our sum function with 2 numbers
    //let result = fromDollarToYen(8);
    //let result = fromEurotoDollar(3.5)
    //let result = fromEurotoDollar(1)
    let result = fromYentoPound(12790)


    // we expect the sum of those 2 numbers to be 23
    //expect(result).toBe(852.6666666666667)
    expect(result).toBe(80);
});