// // Objects and arrays

// // Weresquirrel excersize
// // Keep a daily log of activites

// // create a data structure to store the log information
// // what is he logging? a list of daily activities, and whether he turned or not
// // daily log entries & turn status
// let journal = [
//     {   
//         events: ["work", "touched tree", "pizza", "running"],
//         squirrel: false
//     },
//     {   
//         events: ["work", "ice cream", "cauliflower", "lasagne", "touched tree", "brushed teeth"],
//         squirrel: false
//     },
//     {   
//         events: ["weekend", "cycling", "break", "peanuts", "beer"],
//         squirrel: true
//     }
// ];

// function addEntry(events, squirrel) {
//     journal.push({events, squirrel});
// }

// addEntry(["work", "touch tree", "watched tv", "brushed teeth"], false);
// addEntry(["weekend", "cycled","peanuts", "pizza", "beer", "tv"], true);

// function printAllEntries() {
//     for(let entry of journal) {
//         console.log(entry);
//     }
// }

// printAllEntries();

// // once there is enough data use correlation to measure the dependance between
// // statistical variables

// // phi coefficient


/// Useful array methods

let exampleArray = [];


// pushing 3 strings to an empty array
exampleArray.push('Pushed a string');
exampleArray.push('Pushed a 2nd String');
exampleArray.push('Pushed a 3rd String');

console.log(exampleArray);

// Remove 1 string from the back of the array
exampleArray.pop();

console.log(exampleArray);

// Add 2 strings to the back of the array
exampleArray.push('Pushed another one');
exampleArray.push('Pushed another two');

console.log(exampleArray);

// shift removes from the front of the array
exampleArray.shift('Shift one');

console.log(exampleArray);

// unshift add to the front of the array
exampleArray.unshift('Unshifted one string');

console.log(exampleArray);



