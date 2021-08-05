//write a flatten function with following behaviour


let mixedArray = [100, 5, 'a', [3, 1, 5], 7, 9, [3, ['a', 'b']]]

function flatten(mixedArray) {
    let newArray=mixedArray.flat(4);
    //console.log(newArray);
    return newArray;
}
let finalArray = flatten(mixedArray);
console.log(finalArray);


//output should be [100, 5, 'a', 3, 1, 5, 7, 9, 3, 'a', 'b']