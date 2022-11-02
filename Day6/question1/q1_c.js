class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;

        if (rating == null){ // setting the default value of rating as "PG"
            this.rating = "PG";
        }else{
            this.rating = rating;
        }
    }

    // method getPG
    getPG(array){

        var result = array.filter((element) => element.rating =="PG");

        return result; 
    }
}

// creating multiple movie instances 
let movie1 = new Movie ("Cars", "Pixar", "PG");
let movie2 = new Movie ("Batman Begins", "WarnerBros", "PG");
let movie3 = new Movie ("Ironman", "Marvel Studios", "PG13");
let movie4 = new Movie ("Black Panther", "Marvel Studios", "PG");
let movie5 = new Movie ("Billa", "AVM", "PG");

let array = [movie1, movie2, movie3, movie4, movie5];

console.log(movie1.getPG(array));
