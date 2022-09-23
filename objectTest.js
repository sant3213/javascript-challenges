
//***************************************************************************************************************************************************************** */
// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// It should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'


// Test Cases:
// myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }) Expected { a: 1, b: 2, c: 3, e: 5, d: 4}
// myFunction({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }) Expected { a: 5, b: 4, c: 3, e: 2, d: 1}


function myFunction(x, y) {
    const { b, ...rest } = y;
    return { ...x, ...rest, d: b };
  }


                    /***************************************************************************************************************************************************************** */


// myFunction({a:1,b:2,c:3},'b')             Expected true
// myFunction({x:'a',y:'b',z:'c'},'a')       Expected false
// myFunction({x:'a',y:'b',z:undefined},'z') Expected true

// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b'
// Return false otherwise
// Tipp: test case 3 is a bit tricky because the value of property 'z' is undefined
// But the property itself exists
function myFunction(a, b) {
    return a.hasOwnProperty(b)
}

function myFunction(a, b) {
    return b in a;
 }

                   /***************************************************************************************************************************************************************** */


 // Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string
// myFunction({  continent: 'Asia',  country: 'Japan'}, 'continent') Expected 'Asia'
// myFunction({  country: 'Sweden',  continent: 'Europe'}, 'country') Expected 'Sweden'
function myFunction(obj, key) {
    return obj[key];
}


                    /***************************************************************************************************************************************************************** */
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tipp: you might want to use the square brackets property accessor

//myFunction({  one: 1,  'prop-2': 2})           Expected   2
//myFunction({  'prop-2': 'two',  prop: 'test'}) Expected 'two'
function myFunction(obj) {
    return obj['prop-2']
}



                    /***************************************************************************************************************************************************************** */

// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object

//myFunction('a','b')  Expected {a:'b'}
//myFunction('z','x')   Expected {z:'x'}
//myFunction('b','w')   Expected {b:'w'}
function myFunction(a, b) {
    return {[a]:b}
}

                    /***************************************************************************************************************************************************************** */

// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object

//myFunction(['a','b','c'],[1,2,3])      Expected {a:1,b:2,c:3}
//myFunction(['w','x','y','z'],[10,9,5,2]) Expected {w:10,x:9,y:5,z:2}
//myFunction([1,'b'],['a',2])              Expected {1:'a',b:2}

function myFunction(a, b) {
    return a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] }), {});
 }

 // iterating, cur is the current value: x,y,z
 // iterating, acc is the accumulator, the result of the object
 // {} is the initial value


                     /***************************************************************************************************************************************************************** */
 // Write a function that takes an object (a) as argument
 // Return an array with all object keys

 // myFunction({a:1,b:2,c:3}) Expected ['a','b','c']
 // myFunction({j:9,i:2,x:3,z:4}) Expected ['j','i','x','z']
 // myFunction({w:15,x:22,y:13}) Expected ['w','x','y']

 function myFunction(a) {
    return Object.keys(a); }

// Input un objeto con propiedades, algunas de ellas estan vacias.
// Llenar los valores en blanco con null
// {a:'x', b:'y', c:''} Expected {a:'x', b:'y', c: null}

                     /***************************************************************************************************************************************************************** */
// Write a function that takes an object (a) as argument
// Return the sum of all object values

//myFunction({a:1,b:2,c:3}) Expected 6
//myFunction({j:9,i:2,x:3,z:4}) Expected 18
//myFunction({w:15,x:22,y:13}) Expected 50
function myFunction(a) {
    return Object.values(a).reduce((sum, cur) => sum + cur, 0);
 }

                     /***************************************************************************************************************************************************************** */

 // Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'

//myFunction({ a: 1, b: 7, c: 3 }) Expected { a: 1, c: 3 }
//myFunction({ b: 0, a: 7, d: 8 }) Expected { a: 7, d: 8 }
//myFunction({ e: 6, f: 4, b: 5, a: 3 })  Expected { e: 6, f: 4, a: 3 }
function myFunction(obj) {
    const { b, ...rest } = obj;
    return rest;
}


                     /***************************************************************************************************************************************************************** */
// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object

//myFunction({a:1,b:2,c:3},3) Expected {a:3,b:6,c:9}
//myFunction({j:9,i:2,x:3,z:4},10) Expected {j:90,i:20,x:30,z:40}
// myFunction({w:15,x:22,y:13},6) Expected {w:90,x:132,y:78}
function myFunction(a, b) {
    return Object.entries(a).reduce((acc, [key, val]) => {
        return { ...acc, [key]: val * b };
    }, {});
 }

function myFunction( a, b ) {
  let rsp = {};
   for (const property in a) {
        rsp = {
         ...rsp,
        [property]: a[property]*b
         }
   }
   return rsp;
 }
 