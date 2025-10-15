export function createVehicle(type) {
  if (type === "car") {
    return { type: "Car", maxSpeed: 180, acceleration: 20 };
  }
  if (type === "motorcycle") {
    return { type: "Motorcycle", maxSpeed: 120, acceleration: 30 };
  }
  return { type: "Vehicle", maxSpeed: 100, acceleration: 15 };
}
