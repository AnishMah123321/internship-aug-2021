//write a function which takes and array and numberofextractin  (say n ) in argument. the function should extract last n items in the array 
let numbers=[1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 12, 32, 4, 5, 3, 54];
	function extractionFunction(inputArray, numberOfExtractions) {
        let count = inputArray.length;
        let start = count-numberOfExtractions;
        let outputArray=inputArray.slice(start, count);
        //console.log(outputArray);
		return outputArray;			
	}
    
//getting input here
let input=4;
let finalArray=extractionFunction(numbers, input);
console.log(finalArray);