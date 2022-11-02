class Uber{
    constructor(distance, vehicleType, waitingtime ){
        this.distance = distance;
        this.vehicleType = vehicleType; 
        this.waitingtime = waitingtime; // in mins

    }


    getPrice(){
        let price = 0; 
        let baserate_sedan = 20; // 20 rupees for a km
        let baserate_suv = 35; // 20 rupees for a km

        

        if (this.vehicleType =="sedan" ){
            price = (this.distance * baserate_sedan) + this.waitingtime;
            console.log(`The price of the Trip: ${price} rupees`);
        } 
        
        if (this.vehicleType =="suv"){
            price = (this.distance * baserate_suv) + this.waitingtime;
            console.log(`The price of the Trip: ${price} rupees`);
        }

    }
}


const ride1 = new Uber(30, "sedan",0);
const ride2 = new Uber(30, "sedan", 30); // waiting time 
const ride3 = new Uber (30, "suv", 0);
const ride4 = new Uber(30, "suv", 30);


ride1.getPrice();
ride2.getPrice();
ride3.getPrice();
ride4.getPrice();