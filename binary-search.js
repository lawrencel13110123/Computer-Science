// array must be sorted 
var array = [1, 20, 25, 38, 46, 68, 98, 201, 221, 235, 456, 580, 790, 1111];
var search = binarySearch(array, 46); 

console.log(search)

function binarySearch(stuff, searchElement) {
	// the element that we are at 
	var currentElement;
	// the index that we are at  
	var currentIndex; 
	// the last index of the array 
	var maxIndex = stuff.length - 1;
	// the first index of the array 
	var minIndex = 0; 


	while (minIndex <= maxIndex) {
		// current index is same as mid index 
		currentIndex = Math.floor((minIndex + maxIndex) / 2); 

		// current element is established by the current index of a array
		currentElement = stuff[currentIndex]; 
		console.log('Start Index: ', minIndex)
    	console.log('End Index: ', maxIndex)
    	console.log('Current Element', stuff[currentIndex])

    	// if the currentElement is less than our target search
    	// we set the current element as the starting index 
    	if (currentElement < searchElement) {
    		minIndex = currentIndex + 1; 
    	}
    	// if the currentElement is greater than our target search
    	// we set the current element as the ending index 
    	else if (currentElement > searchElement) {
    		maxIndex = currentIndex - 1; 
    	}
    	// we found the number 
    	else {
	    	console.log('Current Index: ', currentIndex)
	      	console.log('Current Element', stuff[currentIndex])
	     	console.log(" ------- ")
	      	return currentIndex;
    	}
	}
}
