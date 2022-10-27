class Flight {
    constructor(capacity) {
      this.capacity = capacity;
      this.passengers = [];
    }
  
    add_passenger(name) {
      if(this.open_seats()) {
        this.passengers.push(name);
        return true;
      }
      return false;
    }
  
    open_seats() {
      return this.capacity - this.passengers.length;
    }
  }
  
  let flight1 = new Flight(3);
  
  let people = ["Harry", "Ron", "Hermione", "Ginny"];
  for(let person of people) {
    if(flight1.add_passenger(person)) {
      console.log("Added " + person + " to flight successfully");
    }
    else {
      console.log("No available seats for " + person);
    }
  }