class Vehicle {
  // Constructor method, defines properties
  constructor(
    name,
    make,
    model,
    numDoors,
    numAirbags,
    drivingStatus,
    numSeatsFront,
    numSeatsBack
  ) {
    this.name = name;
    this.make = make;
    this.model = model;
    this.numDoors = numDoors;
    this.numAirbags = numAirbags;
    this.drivingStatus = drivingStatus;
    this.seatConfiguration = {
      front: numSeatsFront,
      back: numSeatsBack,
    };
  }
  // Allow user to change driving status
  setDrivingStatus(drivingStatus) {
    this.drivingStatus = drivingStatus;
  }
  // Allow user to change seat configuration
  setSeatConfiguration(numSeatsFront, numSeatsBack) {
    this.numSeatsFront = numSeatsFront;
    this.numSeatsBack = numSeatsBack;
  }
}

export default Vehicle;
