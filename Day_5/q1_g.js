// Return median of two sorted arrays of same size

let arr = [1, 1, 2, 3, 4];


var s = function(array){
    let dup = [...new Set(array)];
    console.log(dup);
  }


s(arr);



(function(array){
    let dup = [...new Set(array)];
    console.log(dup);
   })([1,1,2,3,4])