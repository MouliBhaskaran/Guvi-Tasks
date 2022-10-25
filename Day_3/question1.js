// 1. For the given JSON iterate over all for loops (for, for in, for of, forEach)

let json= [{ 

    "id": "1",
    "name" : "Mouli",
    "age" : "21",
    "location" : "chennai",
    "gender" : "Male",
    "language" : "English"
}];

        


// Using For in loop:

console.log("Using for in loop: ");

for (var key in json) {
    if (json.hasOwnProperty(key)) {
      console.log("ID: ",json[key].id);
      console.log("Name: ",json[key].name);
      console.log("Age: ",json[key].age);
      console.log("location: ",json[key].location);
      console.log("Gender: ",json[key].gender);
      console.log("Language: ",json[key].language);


    }
    }

console.log("\n");


// Using for loop  

console.log("Using for loop: ");

for(let i = 0; i < json.length; i++) {
    let item = json[i];
    console.log('ID: ', item.id);
    console.log('Name: ', item.name);
    console.log('Age: ', item.age);
    console.log('Location: ', item.location);
    console.log('Gender: ', item.gender);
    console.log('Name: ', item.language);
    
}

console.log("\n");

// Using forEach

console.log("Using forEach loop: ");
json.forEach((item) => {
    console.log('ID: ', item.id);
    console.log('Name: ', item.name);
    console.log('Age: ', item.age);
    console.log('Location: ', item.location);
    console.log('Gender: ', item.gender);
    console.log('Name: ', item.language);
    
})

console.log("\n");

// Using for of loop

console.log("Using for of loop: ");

for (const item of json){
    console.log('ID: ', item.id);
    console.log('Name: ', item.name);
    console.log('Age: ', item.age);
    console.log('Location: ', item.location);
    console.log('Gender: ', item.gender);
    console.log('Name: ', item.language);
    
}

