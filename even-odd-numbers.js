// find even numbers in an array. code from google
function getEvenNumbers() {
    var arr = [4, 5, 7, 8, 14, 45, 76];

    var evens = arr.filter(number => number % 2 == 0);
    // document.write('Even Numbers: ' + evens);
    console.log('Google > Even numbers:', evens)
}

getEvenNumbers();
// find even numbers in an array. code from my brain
function findEvens(numbers1) {
    for (let i = 0; i < numbers1.length; i++) {
        if (theEvens1 = numbers1.filter(numbers1 => numbers1 % 2 == 0)) {
        }
    }
    return theEvens1;
}
const getEvenNumbers1 = findEvens([23, 19, 46, 24, 12, 98, 38, 56, 68, 76]);
console.log("My Brain > Even numbers:", getEvenNumbers1);
// find odd numbers in an array. code from my brain
function findOdd(numbers2) {
    for (let i = 0; i < numbers2.length; i++) {
        if (theOdds1 = numbers2.filter(numbers2 => numbers2 % 2 != 0)) {
        }
    }
    return theOdds1;
}
const getOddNumbers1 = findOdd([23, 22, 44, 77, 87, 66, 79, 98, 94, 35, 57, 11, 9, 93, 66, 67, 63]);
console.log("My Brain > Odd numbers:", getOddNumbers1);