
// Test 

function test(label, body) {
    if (!body()) console.log(`Failed: ${label}`);
}

// test("convert Latin text to uppercase", () => {
//     return "hello".toUpperCase() == "HELLO";
// });
// test("convert Greek text to uppercase", () => {
//     return "Χαίρετε".toUpperCase() == "ΧΑΊΡEΤΕ";
// });
// test("don't convert case-less characters", () => {
//     return "مرحبا".toUpperCase() == "مرحبا";
// });

// Exceptions
// function promptDirection(question) {
//     let result = prompt(question);
//     if (result.toLowerCase() == "left") return "L";
//     if (result.toLowerCase() == "right") return "R";
//     throw new Error("Invalid direction: " + result);
// }

// function look() {
//     if (promptDirection("Which way?") == "L") {
//         return "a house";
//     } else {
//         return "two angry bears";
//     }
// }

// try {
//     console.log("You see", look());
// } catch (error) {
//     console.log("Something went wrong: " + error);
// }