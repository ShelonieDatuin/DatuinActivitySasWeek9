export function calculateSpeed(currentSpeed, change) {
  return Math.max(0, currentSpeed + change);
}

export function calculateFuel(currentFuel, speed) {
  return Math.max(0, currentFuel - speed * 0.5);
}
