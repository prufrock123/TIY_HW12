// window.onload = app;

// function app() {
//     "use strict";


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


    //------------------
    // for loop
        // 1.
        function sumForLoop() {
                "use strict";
                var slicedArgs = Array.prototype.slice.call(arguments); // call works here. Dif between apply and call is that call passes any number of args into function, apply passes only the second and it has to be an array. In this case, .slice([])= .slice() so it doesn't matter that there is a second argument at all, so call and apply don't matter?
                var sum = 0;
                for (var i = 0; i < slicedArgs.length; i++) {
                    sum += slicedArgs[i];
                }
                return sum;
        }


        // 2.
        function averageForLoop() {
            'use strict';
            var slicedArgs = Array.prototype.slice.call(arguments); // see comment for sumForLoop
            var sum = 0;
            for (var i = 0; i < slicedArgs.length; i++) {
                sum += slicedArgs[i];
            }
            return sum / slicedArgs.length;
        }


        // 3.
        function largestNumberForLoop() {
            'use strict';
            var slicedArgs = Array.prototype.slice.call(arguments);
            // var sortedArray = []
        	    // var sortedNumber = slicedArgs.sort(function(a, b) {
        	    //     return a > b ? -1 : 1
        	    // })
        	    /**
        	     * AHHAHAHAHA. when I ran largestNumberForLoop(2, 4, 10, 44, 1, 2)
        	     * it returned 7. I have NO idea how that happened so I'm saving this in comments
        	     * for lawls. Before this, I tried "splice" instead of slice.
        	     */
        	    // return sortedNumber[0]
        	    // for (i=0; i<slicedArgs.length; i++){
        	    // 	if (slicedArgs[i] > slicedArgs[i+1]){
        	    // 		sortedArray = slicedArgs.unshift(slicedArgs.slice(slicedArgs[i]));
        	    // 	} else {
        	    // 		sortedArray = slicedArgs.push(slicedArgs.slice(slicedArgs[i]));
        	    // 	}
        	    // 	return sortedArray;
        	    // }
        	    // 
            function swap(array, lesser, greater) {
                    var temp = array[lesser];
                        array[lesser] = array[greater];
                        array[greater] = temp;
                }
                // for(var i = 0; i < slicedArgs)

            for (var i = 0; i < slicedArgs.length; i++) {
                // var emptyArray = []
                for (var j = i + 1; j < slicedArgs.length; j++) {
                    if (slicedArgs[i] < slicedArgs[j]) {
                        swap(slicedArgs, i, j);
                    }
                }
            }
            console.dir(slicedArgs);
            return slicedArgs[0];

            //     for (var i = 0; i < slicedArgs.length; i++) {
            //         if (typeof slicedArgs[i + 1] === "undefined" && slicedArgs[i] > slicedArgs[0]) {
            //             sortedArray.unshift(slicedArgs[i]);
            //         } else if (typeof slicedArgs[i + 1] !== "undefined" && slicedArgs[i] > slicedArgs[i + 1]) {
            //             sortedArray.unshift(slicedArgs[i]);
            //         } else {
            //             sortedArray.push(slicedArgs[i]);
            //         }
            //         console.dir(sortedArray.toString())
            //     }
            //     // 
            // return sortedArray[0];

            // for (var i = 0, largestNumber = 0; i < slicedArgs.length; i++) {
            //     largestNumber = 
            //     	largestNumber < slicedArgs[i] ? 
            //     		slicedArgs[i] : 
            //     		largestNumber;
            // }

            // return largestNumber;
        }


        // 4.
        function longestStringForLoop() {
            'use strict';
            function swap(array, lesser, greater){ // I know I could have just defined swap in the app function scope, but I wanted to do it each time for practice.
                var temp = array[lesser];
                    array[lesser] = array[greater];
                    array[greater] = temp;
            }
            var slicedArgs = Array.prototype.slice.apply(arguments);
                for (var i = 0; i < slicedArgs.length; i++){
                    for (var j = i+1; j < slicedArgs.length; j++){
                        if (slicedArgs[i].length < slicedArgs[j].length){
                            swap(slicedArgs, i, j);
                        }
                    }
                }

            return slicedArgs[0];
        }

        // 5. given an array of Date() objects (Oct 4th 2014, Oct 3rd 2014, Sept 30th 2014, Sept 1st 2012, 
        // March 13th 2010), in that order, sort them chronologically. 
        // Use http://devdocs.io/javascript/global_objects/date for reference on creating Date() 
        // objects with a specific date.
        /* setup */
            var dates = [
                new Date(2014, 9, 4),
                new Date(2014, 9, 3),
                new Date(2014, 8, 29),
                new Date(2014, 9, 1),
                new Date(2014, 2, 13)
            ];

        function sortDateForLoop() {
            'use strict';
            function swap(array, greater, lesser){
                'use strict';
                var temp = array[greater];
                array[greater] = array[lesser];
                array[lesser] = temp;
            }
            for (var i = 0; i < dates.length; i++) {
                for (var j = i+1; j < dates.length; j++) {
                    if (+dates[i] > +dates[j]) {
                        swap(dates, i, j);
                    }
                }
            }
            return dates;
        }

    //------------------
    // Array.forEach
        // 1.
        function sumForEach() {
            var slicedArgs = Array.prototype.slice.call(arguments);
            var sum = 0;
            slicedArgs.forEach(function(element){ //this works without specifying index as an argument because we don't need it in the function.
                sum += element;
            });
            return sum;
        }
        
        // 2.
        function averageForEach() {
            var slicedArgs = Array.prototype.slice.call(arguments);
            var sum = 0
            slicedArgs.forEach(function(element){
                sum += element;
            });
            return sum/slicedArgs.length

        }
         
        // 3.
        function largestNumberForEach(){
            var slicedArgs = Array.prototype.slice.call(arguments);
            var largestNumber = 0;
            slicedArgs.forEach(function(element){
                if(element > largestNumber){
                    largestNumber = element;
                }
            });
            return largestNumber;
         
        }
        // 4.
        function longestStringForEach(){
            var slicedArgs = Array.prototype.slice.call(arguments);
            var longestString = "";
            slicedArgs.forEach(function(element, index, splitArgs){  // Going ahead and including all of forEach's arguments for practice.
                if (element.length > longestString.length){
                    longestString = element;
                }
            });
            // return slicedArgs
            return longestString; 
        }
        
        // 5.
        function sortDateForEach() {

        }

    //------------------
    // Custom forEach 
        // 1.
        function sumForEachCustom() {

        }
        
        // 2.
        function averageForEachCustom() {

        }
         
        // 3.
        function largestNumberForEachCustom(){
         
        }
        // 4.
        function longestStringForEachCustom(){

        }
        
        // 5.
        function sortDateForEachCustom() {
            
        } 
// }
