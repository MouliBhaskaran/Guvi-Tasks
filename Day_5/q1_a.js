// 1)Print odd numbers in an array


// anonymous  function

var a = function(array){
    for(var i = 0 ; i< array.length ; i++){
          if(array[i]%2!=0){
             console.log(array[i])
          } 
     }
  }

a([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//   IIFE function


(function(array){
for(var i = 0 ; i< array.length ; i++){
          if(array[i]%2!=0){
             console.log(array[i])
          } 
     }
})([1,2,3,4])