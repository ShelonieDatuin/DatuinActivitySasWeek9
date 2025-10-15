import { registerButtonEvent } from './eventModule.js';
import { calculateSpeed, calculateFuel } from './compositionModule.js';
import { Dashboard } from './patternModule.js';
import { createVehicle } from './factoryModule.js';
import { EventEmitter } from './observerModule.js';

const vehicle = createVehicle("car");
const eventBus = new EventEmitter();

eventBus.on("engineStart", () => Dashboard.updateStatus("Running"));
eventBus.on("engineStop", () => Dashboard.updateStatus("Stopped"));
eventBus.on("updateDashboard", ({ speed, fuel }) => {
  Dashboard.updateSpeed(speed);
  Dashboard.updateFuel(fuel);
});

registerButtonEvent("btnStart", () => eventBus.emit("engineStart"));
registerButtonEvent("btnStop", () => eventBus.emit("engineStop"));
registerButtonEvent("btnAccelerate", () => {
  const { speed, fuel, status } = Dashboard.getValues();
  if (status === "Stopped") return alert("Start the engine first!");
  const newSpeed = calculateSpeed(speed, vehicle.acceleration);
  const newFuel = calculateFuel(fuel, newSpeed);
  eventBus.emit("updateDashboard", { speed: newSpeed, fuel: newFuel });
});
registerButtonEvent("btnBrake", () => {
  const { speed, fuel } = Dashboard.getValues();
  const newSpeed = calculateSpeed(speed, -vehicle.acceleration);
  eventBus.emit("updateDashboard", { speed: newSpeed, fuel });
});
