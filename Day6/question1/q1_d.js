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

// creating an instance of class Movie

const movie = new Movie("Casino Royale", "Eon Productions", "PG13");

console.log(movie);