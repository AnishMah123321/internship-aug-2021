//Find number of occurence of a value in an array

let array = [ 1, 2, 3, 5, 3, 4, 4, 5, 6, 6, 7, 9, 12, 12];
//let array = [ 1, 2 ,1 , 3 ,3];

let occurence = [0];
let count=0,check = 0;

for (i in array){
    
    for (j in array){
        if (j!=i){
        if (array[j] == array [i]){
            // USE SET
        for(l in occurence){
            check=0;
            for (k in occurence){
                if(occurence[k]==array[i]){
                    check=check+1;
                    //console.log(check);
                }
  
            }
            if (check==0){
            occurence[count]=array[i];  
            console.log(occurence[count]);
            count=count+1;
            
            }
        }
        }
    }
    

    }
}