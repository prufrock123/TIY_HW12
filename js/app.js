

//PART 1
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
            // date array setup
            var dates = [
                new Date(2014, 9, 4),
                new Date(2014, 9, 3),
                new Date(2014, 8, 30),
                new Date(2012, 8, 1),
                new Date(2014, 2, 13)
            ];
            // return dates; // was testing to make sure dates returned correctly. 
 
            /**
             * This was just a test to practice finding the earliest date, even tho it doesn't sort.
             */
                // var earliestDate = new Date(2020, 10, 10);

                // dates.forEach(function(individualDate){
                //     if (+individualDate < +earliestDate){
                //         earliestDate = individualDate
                //     }
                // })
                // return earliestDate;
             
            /**
             * For each element of the dates array we are going to perform some function.
             * This function will take the element and compare it to all of the other elements in the array.
             * once we have hold of the element, how do we tell JS to compare this element to the elements in the array
             * after it? We want to compare the element to the array elements greater than array[element's index]... hm.
             * like if element < (array.forEach(function(element, i){ return  })
             *
             *
             * Ok start over. For each element, compare it to each element of the array with an index greater than array[element's index].
             * if (element < array.forEach(function(unit, i){ if (i > index){ return unit }))
             */
            
            //comments
                    //     +dates.slice(index).forEach(function(unit, i){
                    //     return unit;
                    // })){
                    //     swap(dates, i, index);
                    // }
                    // if (+element < +dates[index+1]){
                    //     swap(dates, index, index+1);
                    // }
            
            function swap(array, lesser, greater){
                var temp = array[greater];
                    array[greater] = array[lesser];
                    array[lesser] = temp;
            }

            function getIndexOfLowestElement(array){
                var indexOfLowestElement = 0;
                array.forEach(function(element, index){
                    if (array[index] < array[indexOfLowestElement]){
                        indexOfLowestElement = index;
                    }
                });
                return indexOfLowestElement;
            }


            dates.forEach(function(element, index){
                var slicedDates = dates.slice(index+1);
                var indexOfLowestElement = getIndexOfLowestElement(slicedDates)+(index+1)
                if (+dates[index] > +dates[indexOfLowestElement]){
                    swap(dates, indexOfLowestElement, index);
                } 


            });
            return dates;
        }

    //------------------
    // Custom forEach 
    
        /*Setup*/
        Array.prototype.customForEach = function(callback, array){
            for (var i = 0; i < this.length; i++){
                callback(this[i], i, this)
            }
        }
  

        // 1.
        function sumForEachCustom() {
            var slicedArgs = Array.prototype.slice.call(arguments);
            var sum = 0;
            slicedArgs.customForEach(function(element){
                sum += element;
            });
            return sum;
        }
        
        // 2.
        function averageForEachCustom() {
            var slicedArgs = Array.prototype.slice.call(arguments);
            var sum = 0;
            slicedArgs.customForEach(function(element){
                sum += element
            });
            return sum/slicedArgs.length;
        }
         
        // 3.
        function largestNumberForEachCustom(){
            var slicedArgs = Array.prototype.slice.call(arguments);
            var largestNumber = 0;
            slicedArgs.customForEach(function(element){
                if (element > largestNumber){
                    largestNumber = element;
                }
            })
            return largestNumber;
        }
        // 4.
        function longestStringForEachCustom(){
            var slicedArgs = Array.prototype.slice.call(arguments);
            var largestString = "";
            slicedArgs.customForEach(function(element){
                if (element.length > largestString.length){
                    largestString = element;
                }
            });
            return largestString;
        }
        
        // 5.
        function sortDateForEachCustom() {
            
            /*setup dates array*/
            var dates = [
                new Date(2014, 9, 4),
                new Date(2014, 9, 3),
                new Date(2014, 8, 30),
                new Date(2012, 8, 1),
                new Date(2014, 2, 13)
            ]
            
            function swap(array, greater, lesser){
                var temp = array[greater];
                    array[greater] = array[lesser];
                    array[lesser] = temp;
            }

            function getIndexOfLowestElement(array){
                var indexOfLowestElement = 0;
                array.customForEach(function(element, index){
                    if (element < array[indexOfLowestElement]){
                        indexOfLowestElement = index;
                    }
                });
                return indexOfLowestElement;
            }

            dates.customForEach(function(element, index){
                var slicedDates = dates.slice(index+1);
                var indexOfLowestElement = getIndexOfLowestElement(slicedDates)+index+1;
                if (+element > +dates[indexOfLowestElement]){
                    swap(dates, index, indexOfLowestElement);
                }
            })
            return dates;

        } 
// 
// 
// 
// 
// ------------------------------------------------------------------------
//PART 2
    // set up arrays
    var numbers = [1,12,4,18,9,7,11,3,101,5,6];
    var strings = ['this','is','a','collection','of','words'];

    var customers = [
        { firstname : 'Joe', lastname : 'Blogs'},
        { firstname : 'John', lastname : 'Smith'},
        { firstname : 'Dave', lastname : 'Jones'},
        { firstname : 'Jack', lastname : 'White'}
    ];

    // console.log(customers);

    // // YOUR CODE WILL GO IN THIS NEXT SECTION
    // // find all customers whose firstname starts with 'J',
    // // map() those people into an array of objects like: { name : c.firstname + " " + c.lastname }
    // // then sort alphabetically

    // var projections = customers
    //     .filter(function(c){ /* ... */ })
    //     .map(function(c){  /* ... */ })
    //     .sort(sortByName);

    // function sortByName(c1, c2) {
    //     "use strict";
    //     //...
    // }

    // console.log(projections);
    // Tested both options below to make sure they worked.

function sortMyObjects(customers){

    function firstLetterJ(element) {
        return element.firstname[0] === "J";
    }
    var filteredCustomers = customers.filter(firstLetterJ);

    // var filteredCustomers = customers.filter(function(person){
    //     return person.firstname[0] === "J";
    // });
    // console.log(filteredCustomers);

    var mapFirstLastName = filteredCustomers.map(function(person){
        return Object.create(Object.prototype, { name: {value: person.firstname + " " + person.lastname }});
        // return {name: person["firstname"] + " " + person.lastname};
    }); 
    // console.log(mapFirstLastName);

    var sortedByFirstName = mapFirstLastName.sort(function sortByName(a, b){
        if (a.name < b.name){
            return -1
        } else if ( a.name > b.name){
            return 1
        } else {
            return 0;
        }
    });
    // console.log(sortedByFirstName); // weird. the sortedByFirstName function also sorts the mapFirstLastName even tho it comes after...


    return sortedByFirstName;
};

console.log(sortMyObjects(customers));

// var object = { key: "value", second: "value2" }
// var object2 = Object.create(Object.prototype, {key: {value: "value"}, second: {value: "value2"} })
// console.dir(object)
// console.dir(object2)
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 

// function reject(list, predicate){
//     list.forEach(function(element, index){
//         predicate(element);
//     });
// }
















