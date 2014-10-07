// use EACH of the iteration methods discussed in class today (for loop, Array.forEach, custom forEach) 
// for EACH of the following problems
// 1. calculate the sum of numbers (can be any number of arguments)
// 2. calculate the average of numbers
// 3. find the largest number of the inputs
// 4. find the longest string of the inputs
// 
// 5. given an array of Date() objects (Oct 4th 2014, Oct 3rd 2014, Sept 30th 2014, Sept 1st 2012, 
// March 13th 2010), in that order, sort them chronologically. 
// Use http://devdocs.io/javascript/global_objects/date for reference on creating Date() 
// objects with a specific date.



// for loop
// 1.
function sumForLoop(){
	var slicedArgs = Array.prototype.slice.call(arguments); // call works here. Dif between apply and call is that call passes any number of args into function, apply passes only the second and it has to be an array. In this case, .slice([])= .slice() so it doesn't matter that there is a second argument at all, so call and apply don't matter?
	var sum = 0;
	for (i=0;i<slicedArgs.length;i++){
		sum += slicedArgs[i];
	}
	return sum;
}

function averageForLoop(){
	var slicedArgs = Array.prototype.slice.call(arguments);
	var sum = 0;
	for (i=0; i<slicedArgs.length; i++){
		sum += slicedArgs[i]; 
	}
	return sum/slicedArgs.length
}




// Array.forEach



// custom forEach






















