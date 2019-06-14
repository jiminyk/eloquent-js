/// Defining a Function

// pure function to find the square of a number
// arrow function (this *input* produces this *result*)
// When there is only 1 parameter you can omit the parenthesis
// If the body is a single expression, the expression will be returned from the function
const square = n => n * n;

// function that makes noise (side effect)
// if no parameters, just leave empty parenthesis
const makeNoise = () => {
    console.log('Pling!');
}

// pure function that calculates the power from a base n and exponent
// function power(base, exponent){
//     let result = 1;
//     for (let count = 0; count < exponent; count++ ) {
//         result *= base;
//     }
//     return result;
// }

/// Bindings and Scopes

// Scope
// let x = 10;

// if (true) {
//     let y = 20; // not visible to outside
//     var z = 30; // visibile to outside
//     console.log(x + y + z); // 60
// }
// console.log(x + z); // 40

/// The Call Stack

// Control flow

function greet(who){
    console.log('Hello: ' + who);
}

// greet('Harry');
// console.log('Bye');

// Recursion ( When a function calls itself )

// recursive implementation of power
const powerRecursive = ( base, exponent ) => {
    if ( exponent == 0 ) {
        return 1;
    } else {
        return base * powerRecursive(base, exponent - 1);
    }
}

// console.log(powerRecursive(2, 10));

function findSolution(target) {
    function find(current, history) {
      if (current == target) {
        return history;
      } else if (current > target) {
        return null;
      } else {
        return find(current + 5, `(${history} + 5)`) ||
               find(current * 3, `(${history} * 3)`);
      }
    }
    return find(1, "1");
  }
  
//   console.log(findSolution(24));
//   // → (((1 * 3) + 5) * 3)

function printFarmInventory(cows, chickens) {
    let cowString = String(cows);
    while (cowString.length < 3) {
        cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`);

    let chickenString = String(chickens);
    while (chickenString.length < 3) {
        chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`);
}

// printFarmInventory(1, 11);