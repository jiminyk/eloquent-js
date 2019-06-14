// Objects and arrays

// Weresquirrel excersize
// Keep a daily log of activites

// create a data structure to store the log information
// what is he logging? a list of daily activities, and whether he turned or not
// daily log entries & turn status
let journal = [
    {   
        events: ["work", "touched tree", "pizza", "running"],
        squirrel: false
    },
    {   
        events: ["work", "ice cream", "cauliflower", "lasagne", "touched tree", "brushed teeth"],
        squirrel: false
    },
    {   
        events: ["weekend", "cycling", "break", "peanuts", "beer"],
        squirrel: true
    }
];

function addEntry(events, squirrel) {
    journal.push({events, squirrel});
}

addEntry(["work", "touch tree", "watched tv", "brushed teeth"], false);
addEntry(["weekend", "cycled","peanuts", "pizza", "beer", "tv"], true);

function printAllEntries() {
    for(let entry of journal) {
        console.log(entry);
    }
}

printAllEntries();

// once there is enough data use correlation to measure the dependance between
// statistical variables

// phi coefficient
