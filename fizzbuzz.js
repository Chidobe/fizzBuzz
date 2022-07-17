
//prompt user for a number

let userInput = parseInt(prompt("choose a number", 16));

//go from 1 to the number

for (let i = 1; i <= userInput; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz")
    } else if (i % 3 === 0){
        console.log("Fizz")
    } else if (i % 5 === 0){
        console.log("Buzz")
    } else {
        console.log(i)
    }
}
