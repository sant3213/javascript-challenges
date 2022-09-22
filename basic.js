// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result

// myFunction('abcdefg')  Expected // 'efg'
// myFunction('1234')     Expected // '234'
// myFunction('fgedcba')  Expected // 'cba'

function myFunction(str) {
   
    return str.slice(-3);
 }

 "hola".slice(1,2) // Returns o
 "hola".slice(1,3) // Returns ol
 "hola".slice(3)   // Returns a

 