 /// Bean Counting

 // write a function countBs that takes a string as its only arg and returns a number
 // that indicates how many uppercase B characters there are in the string

 function countChars(string, ch) {
    let count = 0;
    for (let i = 0; i < string.length; i++ ) {
        if (string[i] == ch) {
            count += 1;
        }
    }
    return count;
 }

 function countBs(string) {
     return countChars(string, "B");
 }

 console.log(countBs("BuBBlegum")); // 3

 console.log(countChars("kakkerlak", "k")); // 4