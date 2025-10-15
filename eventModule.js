export function registerButtonEvent(buttonId, callback) {
  const btn = document.getElementById(buttonId);
  if (btn) btn.addEventListener("click", callback);
}
