class Person{
    constructor(name, age, lang, location, job, bloodgroup){

        this.name = name;
        this.age = age; 
        this.lang = lang; 
        this.location = location;
        this.job = job;
        this.bloodgroup = bloodgroup;
    }


    getName(){
        console.log(`Name: ${this.name}`);
    }

    getAge(){
        console.log(`Age: ${this.age}`);
    }

    getLang(){
        console.log(`Language: ${this.lang}`);
    }

    getLocation(){
        console.log(`Location: ${this.location}`);
    }

    getJob(){
        console.log(`Job: ${this.job}`);
    }

    getBloodGroup(){
        console.log(`Bloodground: ${this.bloodgroup}`);
    }
}

const person1 = new Person("Mouli Bhaskaran", 21,"English", "Chennai -Tamilnadu- India", "Software Engineer", "O+ve");


person1.getName();
person1.getAge();
person1.getLang();
person1.getLocation();
person1.getJob();
person1.getBloodGroup();

