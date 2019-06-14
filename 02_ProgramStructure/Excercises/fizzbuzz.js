
// print out all the numbers from 1 to 100
let number = 1;
while (number < 100){
    number++;
    if (number % 3 == 0 &&  number % 5 == 0){
        console.log('FizzBuzz Motherfucker!')
    } else if (number % 3 == 0) {
        console.log('Fizz');
    } else if (number % 5 == 0) {
        console.log('Buzz');
    } else {
        console.log(number);
    }
}