// Create a function called `go` that takes 2 arguments: 
// 1. direction (forwards, backwards, etc.)
// 1. speed (mph).

// The function, when invoked, will print out the following in your console (for example): `The car is moving forward, at 25 mph.

function go(direction, speed) {
    console.log(`The car is moving ${direction}, at ${speed}.`)
}

go("forward", "25 mph");

// Add a condition inside the function to check if the speed is greater than 75 mph. If it is, add an additional message of SLOW DOWN!

// Example:

// The car is moving forward at 82 mph
// SLOW DOWN!


function go(direction, speed) {
    if (speed > 75) {
        console.log(`The car is moving forward at ${speed} mph. SLOW DOWN!`)
    }
    console.log(`The car is moving ${direction}, at ${speed} mph. You're good!`)
}

go("forward", "25")
go("backwards", "90")
go("forward", "76")

// Given the following set of data about chicken birth rates, you need to filter out the objects where the birth rate value is greater than 15 per 1000 chickens for that year. Store the good years in a new array named `bestYears`.

const bestYears = []
const birthRates = [
  { year: 1969, birthRate: 13}, 
  { year: 1970, birthRate: 16}, 
  { year: 1971, birthRate: 15}, 
  { year: 1972, birthRate: 11}, 
  { year: 1973, birthRate: 18}, 
  { year: 1974, birthRate: 17}, 
  { year: 1975, birthRate: 9}
]

for (let i = 0; i < birthRates.length; i++) {
    const currentYear = birthRates[i];

    if (currentYear.birthRate > 15) {
        bestYears.push(currentYear)
    }
}

console.log(bestYears)







birthRates.forEach(function (currentYear) {
    if (currentYear.birthRate > 15) {
        bestYears.push(currentYear)
    }
})

console.log(bestYears)






for (currentYear of birthRates) {
    if (currentYear.birthRate > 15) {
        bestYears.push(currentYear)
    }
}

console.log(bestYears)






const politician = {
    platform: {
        money: "I like it",
        health: "I'm against it"
    },
    district: "Michigan 13"
}

console.log(politician)

for(const policy of politician.platform.money) {
    console.log(policy)
}







// 1. Create a function that logs the result of adding two numbers that were passed in as arguments.
// 2. Create another function that logs the result of subtracting two numbers that were passed in as arguments.
// 3. Invoke each function a couple times with different argument values.
//

function add(a,b){
    console.log("Yay we are adding!!", a + b)
}
function sub(a,b){
    console.log("Yay we are subtracting!!", a - b)
}
function calculate(a,b,operator){
    operator(a,b)
}

add(5,6)
sub(7,4)
calculate(1,3,add)
calculate(1,3,sub)























function range(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}


console.log(range(1,100))

