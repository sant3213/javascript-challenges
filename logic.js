var second = 0;
var minute = 0;
var hour = 0;
var d = new Date();

setInterval(
    function(){
        d = new Date();
        second = d.getSeconds() * 6;
        minute = d.getMinutes() * 6;
        hour = d.getHours() * 30 + Math.round(minute / 12 );
        document.getElementById("second-hand").style.transform = "rotate(" + second +"deg)";
        document.getElementById("minute-hand").style.transform = "rotate(" + minute +"deg)";
        document.getElementById("hour-hand").style.transform = "rotate(" + hour +"deg)";
        
    }
)

function flatten(array) {
  let newArray = [];

  function helper(array) {
    for (let i = 0; i < array.length; i++) {
        //console.log(Array.isArray(array[i]));
      if (Array.isArray(array[i])) {
        helper(array[i]);
      } else {
        newArray.push(array[i]);
      }
    }
  }
  helper(array);
  return newArray;
}

flatten([1, 2, [3, 4, [5]]]);


let arrayToOrder = [5,3,9,10,7,2];

function orderArray() {
    for(let i=0; i < arrayToOrder.length; i++) {
        for(let j = 0; j < arrayToOrder.length - 1 - i; j++){
            if(arrayToOrder[j] > arrayToOrder[j+1]){
                [arrayToOrder[j], arrayToOrder[j+1]]= [arrayToOrder[j+1], arrayToOrder[j]];
            }
        }
    }
    return arrayToOrder;
}
const result = orderArray();
console.log(result);

function fibonacci(limit){
    let fibonacciArray = [0, 1];
    for(let i=2; i < limit; i++) {
        fibonacciArray[i] = fibonacciArray[i-2]+ fibonacciArray[i-1];
    }
    return fibonacciArray;
}

function fibonacciRecursive(n){
    if(n === 1 || n ===2) {
        return 1;
    }
    if(n > 2) {
        return fibonacciRecursive(n-1) + fibonacciRecursive(n-2)
    }
}
const rsp = fibonacci(20);
console.log(rsp);

const rspRe = fibonacciRecursive(5);
console.log(rspRe);

function inversString(str) {
    let result = '';
    for(let i= str.length-1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

const inverseStringResult = inversString('holaa');
console.log(inverseStringResult);