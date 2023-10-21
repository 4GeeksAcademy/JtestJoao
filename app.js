// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;

    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar){
    let EuroValue = valueInDollar / 1.2
    let valueInYen = EuroValue * 127.9;

    return valueInYen;
}
const fromYenToPound = function(valueInYen){
    let EuroValue = valueInYen / 127.9
    let valueInPound = EuroValue * 0.8;

    return valueInPound;
}
// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
