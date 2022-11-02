class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;

        if (rating == null){ // setting the default value of rating as "PG"
            this.rating = "PG";
        }
        
        

    }
}

const m1 = new Movie('Interstellar', "WarnerBro's Inc")

console.log(m1.rating);