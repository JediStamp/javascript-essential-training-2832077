/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Vehicle from "./Vehicle.js";

const car = new Vehicle("Betsy", "Nissan", "Altima", 4, 5, false, 2, 3);

const truck = new Vehicle("Sally", "GMC", "Sierra", 4, 7, false, 3, 3);

console.log("The vehicle car:", car);
console.log("The vehicle truck:", truck);
console.log("The truck is now running:", truck.drivingStatus);
truck.setDrivingStatus(true);
console.log("The truck is now running:", truck.drivingStatus);
