// Write a madlib function, which is given a name and a subject. 
// It will return(not print) a new string: (name)'s favorite subject in 
// school is (subject)

// #1
function madlib (name, subject){
    return console.log((name,"favorite subject in school is", subject))
}

madlib ("ash" , "math")

//Write a function tipAmount that is given the bill amount and the level of 
// service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:
// good -> 20% fair -> 15% bad -> 10%

// #2

const good = .2
const fair = .15
const poor = .1

function tipAmount(billAmount, tipAmount){

    let tip = billAmount * tipAmount
    return console.log(tipAmount)
}

tipAmount(40, fair)

// Write a function totalAmount that takes the same arguments as tipAmount except it
 // returns the total as the tip amount plus the bill amount. This function may make
 // use of tipAmount as a sub-task.

 // #3 


function totalAmount (billAmount, tipAmount){
    let tip = billAmount * tipAmount
    let total = billAmount + tipAmount
    return console.log(total)
}

totalAmount(10, good)

// Write a function printNumbers which is given a start number and an end number.
// It will print the numbers from one to the other, one per line:

// #4

let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function printNumbers(){
    //for (arrayOfNumbers = 1; arrayOfNumbers <= 10; arrayOfNumbers++) {
       // console.log(arrayOfNumbers)
    //}
//}

// printNumbers()

function printNumbers(){
    arrayOfNumbers = 1
    while (arrayOfNumbers <= 10) {
        console.log(arrayOfNumbers);
        arrayOfNumbers++;
    }
}

printNumbers()

// Write a function printSquare which is given a size and prints a square of 
// that size using asterisks.

// #5 

