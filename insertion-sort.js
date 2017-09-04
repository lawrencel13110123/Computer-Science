// ===============================================
// RUN THIS USING NODE
// ===============================================

// ================================================
// TEST CASES
// ================================================

// Case 1 - Small Set of Numbers
var arraySize = 40;

// // Case 2 - Large set of Numbers
// var arraySize = 400000;

var array = [];
for (var index = 0; index < arraySize; index++) {
  var randomNumber = Math.round(Math.random() * arraySize);

  array.push(randomNumber);
}




// ================================================
// SOLUTION - Insertion Sort
// ================================================
function insertionSort(arr) {
	// loops through the array
	for (var i = 1 ; arr.length ; i++) {
		// j is the current postiion we are at 
		var j = i ; 

		// compare the current position with the position before it 
		while (j > 0 && arr[j - 1] > array[j]) {
			// if the current position is smaller than the previous position, then swap
			var temp = arr[j - 1]; 
			arr[j - 1] = arr[j]; 
			arr[j] = temp; 

			// this keeps it going down
			j = j - 1 ; 
			console.log(arr.join(" "))

		}
	}
		return arr; 
}

// ================================================
// FUNCTION CALL
// ================================================
console.log("PRE-SORT");
console.log(array.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.log(insertionSort(array).join(" "));
