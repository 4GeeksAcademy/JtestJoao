/*
const sum = (a,b) => {
    return a + b
}

const sub = (a,b) => {
    return a - b
}

console.log(sum(10,5))
console.log(sub(20,10))

module.exports = {sum,sub}
*/
const dollarToYen = (dollarAmount) => {
    let dollarCu = 1.07
    return ((1 / dollarCu)*156.5) * dollarAmount
}

const euroToDollar = (euroAmount) => {
    return euroAmount * 1.07
}

const yenToPounds = (yenAmount) => {
    return ((156.5 * 1.13)*yenAmount)
    
}

module.exports = {dollarToYen,euroToDollar,yenToPounds}

console.log(dollarToYen(10))
console.log(euroToDollar(10))
console.log(yenToPounds(10))