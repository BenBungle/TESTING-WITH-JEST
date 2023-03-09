// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
function fromDollarToYen(dollarAmount) {
    let yenRate = oneEuroIs["JPY"] / oneEuroIs["USD"]; // calculate the yen exchange rate using the ratio of JPY to USD
    let yenAmount = dollarAmount * yenRate; // convert the dollar amount to yen using the exchange rate
    return yenAmount;
}
function fromYentoPound(yenAmount) {
    let poundRate = oneEuroIs["GBP"] / oneEuroIs["JPY"];
    let poundAmount = yenAmount * poundRate;
    return poundAmount;
}
function fromEurotoDollar(EuroAmount) {
    let dollarRate = oneEuroIs["USD"] / 1;
    let dollarAmount = EuroAmount * dollarRate;
    return dollarAmount;
}
// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = {fromDollarToYen, fromYentoPound, fromEurotoDollar };