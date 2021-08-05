const item = {
    name : 'anish',
    surname : 'Maharjan',
    location :{
        state : 'bagmati',
        area : 51
    }

}
//console.log(Object.keys(item)[1]);
var result={};

result = Object.assign(item, result);
console.log(Object.keys(result));


var count1='';
var count2='';
for(let i in item ){
   result.i=item.i;
    //console.log(i);
}
console.log(item);
console.log(result);
