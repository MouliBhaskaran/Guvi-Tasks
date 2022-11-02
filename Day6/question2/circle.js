class Circle{
    constructor(radius, color){
        this.radius = radius;
        this.color = color;
    }


    // getradius method
    get getRadius(){
        console.log(`The Radius of Circle: ${this.radius}`);
    }

    // setRadius method 

    set setRadius(x){
        this.radius = x;

        return this.radius;
    }

    // getColor method 

    get getColor(){
        console.log(`The color of Circle: ${this.color}`);
    }

    // setColor method

    set setColor(x){
        this.color = x;

        console.log(`The new color of Circle: ${this.color} `);
    }

    //toString method 
    toString(){
        console.log(`Circle [radius = ${this.radius}, color = ${this.color}]`);
    }

    // getArea()

    getArea(){
        let pi = Math.PI;
        let r_square = Math.pow(this.radius, 2)

        let area  = pi * r_square

        console.log(`Area of Circle: ${area.toFixed(2)}`);
    }

    // getCircumference()

    getCircumference(){
        let pi = Math.PI;

        let circum = 2 * pi * this.radius;

        console.log(`Circumference of Circle: ${circum.toFixed(2)}`);
    }

}

let circle = new Circle(2.0, "red");

// getter methods 
circle.getRadius; // 2.0
circle.getColor // prints red

// setter methods 

circle.radius = 4.5

circle.getRadius; // 4.5

circle.color = "black";

circle.getColor; // black


// printing the area and circumference 

circle.getArea()
circle.getCircumference()

