const myPromise = new Promise((resolve, reject) => {
	let connection = false;
	
	if(connection) {
		resolve('Connected successfuly')
	} else {
		reject('Connection refused');
	}
});

myPromise
	.then(data => console.log(data))
	.catch(err => console.log(err))