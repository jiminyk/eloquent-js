/*
Write a range function that takes two arguments, 
start and end, and returns an array containing all 
the numbers from start up to (and including) end.
*/

function rangeFinder(start, end, step = start < end ? 1 : -1) {
    let array = [];

    if (step > 0) {
        for ( let i = start; i <= end; i += step) array.push(i);
    } else {
        for ( let i = start; i >= end; i += step) array.push(i);
    }
    return array;
}

// find the sum of the array
function sum(array) {
    let total = 0;
    for (let value of array) {
        total += value;
    }
    return total;
}

console.log(sum(rangeFinder(1, 10)));