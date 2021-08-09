

const arr = [1,2,3,4,5,6];
for (let j of arr){
    
}

const arrIterator = arr[Symbol.iterator]();
for (let j of arr){
    console.log(arrIterator.next());
}

const obj = {
    title : "ram",
    pages : 837,
    year : 2981
}



// for (let i of obj){
    
// }

// const objIterator = obj[Symbol.iterator]();
// for (let k of objIterator){
//     console.log(objIterator.next());
// }
let count=0;
let SW8= {[Symbol.iterator]: function (ob){
    if (ob[count] != undefined){
        return (value = ob[count] , done = false);
        count=count+1;
    }
    else {
        return (done = true);
    }
}
}

let checker = SW8[Symbol.iterator](obj);
console.log(checker.next());
console.log(checker.next());

