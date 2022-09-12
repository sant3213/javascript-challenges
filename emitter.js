 var EvenEmitter = require('events')
 var emitter = new EvenEmitter();
 
 let ar = function(){
	console.log('Printing emitter')
 }
 
 emitter.on('FirstEmitter', ar);
 emitter.emit('FirstEmitter');
 
 /*emitter.getMaxListeners(2)
 emitter.listeners()
 emitter.removeListener('FirstEmitter', ar);
 emitter.removeAllListeners();*/
 
  new Promise((resolve, reject) => {
	  //throw new Error("Whoops!");
	 if(true){
		 resolve('Fist---->Resolved')
	}
	if(true){
	  reject(new Error('Fist---->Rejected'))
	}
	
  })
  .then( data => {
	 console.log(data)})
  .catch(err => {console.log(err)})
 
 new Promise((resolve, reject) => {
   resolve("ok");
 }).then((result) => {
   throw new Error("Whoops!"); 
 }).catch(err => console.log(err)); 
// rejects the promise
// Error: Whoops!


 new Promise((resolve, reject) => {

	throw new error("whoops!");
}).catch(error=> {

	console.log("the error is handled, continue normally");

 }).then(() => console.log("next successful handler runs"));

//The error is handled, continue normally
//Next successful handler runs


Promise.all([
Promise.resolve(1),
Promise.reject(new Error('Last Error'))
])
.then(data => console.log('Last data'))
.catch(err=> console.log(err));