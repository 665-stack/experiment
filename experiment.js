// very basic code 
const number1 = 4;
const reminder1 = number1 % 2 == 0;
console.log('Even with simple code', reminder1)
//Get even number with for loop
function findEven1(number2) {
    for (let i = 0; i < number1; i++) {
        const reminder2 = number2 % 2 == 0;
        return reminder2;
    }
    // return reminder2;
}
const getEven1 = findEven1(2231);
console.log("Even with for loop", getEven1);
//Get even number with if else
function findEven2(number3) {
    if (number3 % 2 == 0) {
        return true;
    }
    return false;
}
const getEven2 = findEven2(232);
console.log('Even with if else', getEven2);
//Get odd number with if else
function findOdd1(number4) {
    if (number4 % 2 != 0) {
        return true;
    }
    return false;
}
const getOdd1 = findOdd1(21323);
console.log('Odd with if else', getOdd1);
//Get odd number with for loop
function findOdd2(number5) {
    for (let i = 0; i < number5; i++) {
        const reminder3 = number5 % 2 != 0;
        return reminder3;
    }
}
const getOdd2 = findOdd2(3453);
console.log("Odd with for loop", getOdd2);