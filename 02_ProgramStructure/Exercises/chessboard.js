let string = '';
size = 8;

for ( y = 0; y < size; y++ ) {
    for ( x = 0; x < size; x++ ) {
        if( (x + y) % 2 == 0){
            string += ' ';
        } else {
            string += '#';
        }
    }
    string += '\n';
}

console.log(string);