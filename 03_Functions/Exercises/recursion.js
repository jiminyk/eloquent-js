

// define a recursive function isEven that accepts a single argument and return a bool

function isEven(n) {
    if ( n == 0) {
        return true;
    } else  if ( n == 1) {
        return false;
    } else if ( n < 0) {
        return isEven(-n);
    } else {
        return isEven(n - 2);
    }
}

console.log(isEven(-10)); // true