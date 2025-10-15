export const Dashboard = (() => {
  let speed = 0;
  let fuel = 100;
  let status = "Stopped";

  return {
    updateStatus(newStatus) {
      status = newStatus;
      const el = document.getElementById("status");
      el.textContent = status;
      el.className = newStatus;
    },
    updateSpeed(newSpeed) {
      speed = newSpeed;
      document.getElementById("speed").textContent = speed;
    },
    updateFuel(newFuel) {
      fuel = newFuel;
      document.getElementById("fuel").textContent = newFuel.toFixed(1);
    },
    getValues() {
      return { speed, fuel, status };
    }
  };
})();
