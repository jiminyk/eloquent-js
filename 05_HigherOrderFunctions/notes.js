
/// Abstracting repetition

// let labels = [];

function repeat(n, action) {
    for ( let i = 0; i < n; i++ ) {
        action(i);
    }
}

// repeat(5, i => {
//     labels.push(`Unit ${i + 1}`);
// });

// console.log(labels);

/// Higher-order functions

// functions that operate on other functions, either by taking them as
// arguments or by returning them, are called higher-order functions

// Functions that create new functions:
// function greaterThan(n) {
//     return m => m > n;
// }
// let greaterThan10 = greaterThan(10);
// console.log(greaterThan10(11));
// // true

// functions that change other functions
// function noisy(f) {
//     return (...args) => {
//         console.log('calling with', args);
//         let result = f (...args);
//         console.log('called with', args, ', returned', result);
//         return result;
//     };
// }
// noisy(Math.min)(3, 2, 1);

// functions that provide new types of control flow

function unless (test, then) {
    if (!test) then();
}

// let evens = [];

// repeat (5, n => {
//     unless (n % 2 == 1, () => {
//         evens.push(n + 'is even');
//     });
// });

// console.log(evens);

/// Script Data Set
// higher order functions shine in data processing


// Filtering arrays
function filter (array, test) {
    let passed = [];
    for ( let element of array ) {
        if ( test(element) ) {
            passed.push(element)
        }
    }
    return passed;
}

// console.log ( filter (SCRIPTS, script => script.living));

function map (array, transform ) {
    let mapped = [];
    for ( let element of array ) {
        mapped.push(transform(element));
    }
    return mapped;
}

// let rtlScripts = SCRIPTS.filter(s => s.direction == 'rtl');

// console.log(map(rtlScripts, s => s.name));

/// summarizing with reduce
// a common thing to do with arrays is compute a single value from them

// build a value by repeatedly taking a single element from the array and combining
// it with the current value