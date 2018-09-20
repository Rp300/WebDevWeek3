let array = [1,2,3,4,5]

function changeArray(array1) {

	let mappedArray = array1.map(elem => elem * 3)
	console.log(mappedArray)
};

changeArray(array);

