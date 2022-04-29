/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const car = {
  name: "Betsy",
  make: "Nissan",
  model: "Altima",
  seatbelts: 4,
  airbags: 5,
  seatConfig: {
    front: 2,
    back: 3,
  },
  runStatus: false,
  toggleRunStatus: function (runStatus) {
    this.runStatus = runStatus;
  },
};

const truck = {
  name: "Sally",
  make: "GMC",
  model: "Sierra",
  seatbelts: 6,
  airbags: 7,
  seatConfig: {
    front: 3,
    back: 3,
  },
  runStatus: true,
  toggleRunStatus: function (runStatus) {
    this.runStatus = runStatus;
  },
};

console.log("Car: ", car);
console.log("Truck:", truck);

const laptop = {
  type: "Asus",
  ram: 16,
  ramUnits: "GB",
  case: "black",
  peripherals: {
    mouse: false,
    keyboard: true,
    monitor: {
      monitor1: true,
      monitor2: true,
    },
  },
};

console.log("Laptop:", laptop);
