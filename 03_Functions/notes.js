/// Defining a Function

// pure function to find the square of a number
const square = function(n) {
    return n * n;
}

// function that makes noise (side effect)
const makeNoise = function(){
    console.log('Pling!');
}

// pure function that calculates the power from a base n and exponent
const power = function(base, exponent){
    let result = 1;
    for (let count = 0; count < exponent; count++ ) {
        result *= base;
    }
    return result;
}

/// Bindings and Scopes

// Scope
let x = 10;

if (true) {
    let y = 20; // not visible to outside
    var z = 30; // visibile to outside
    console.log(x + y + z); // 60
}
console.log(x + z); // U+2912  40