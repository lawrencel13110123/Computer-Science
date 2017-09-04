// if we want to add a number to the front of the array 

var array = [31.9, 35.3, 42.4, 42.4, 60.8]

function createNew (arr, element) {
	var newArr = []; 
	newArr[0] = element; 
	for (var i = 1 ; i < arr.length + 1 ; i++) {
		newArr[i] = array[i - 1]
	}

	return(newArr)
}


console.log(createNew(array, 10))
