// Sum of all numbers in an array 

 // 1. anonymous function 

 let a = [ 1, 2, 3, 4, 5];
 
 let sum = function(arr){
  
    var sum = 0; 
    for (let i = 0; i < arr.length; i++){

        
        //console.log(arr[i]);
        sum = sum + arr[i];
        

    }
    
    return sum;
 }

console.log(sum(a));


// 2. IIFE function

(function(array){
    var sum = 0;
         for(var i = 0 ; i< array.length ; i++){
            sum = sum + array[i];
          }
          return console.log(sum);
 })
    
    
([1,2,3,4, 5])

