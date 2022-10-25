// convert all the strings to title caps in a string array 

// 1. Anonymous function 

var a = function (str) {
    str = str.toLowerCase().split(' ');

    for (var i = 0; i < str.length; i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }

    return str.join(' ');
}


console.log(a("mouli"));


// 2. IIFE function 


(function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return console.log(str.join(' ')); 
  })

('MOULI IS MY NAME');
