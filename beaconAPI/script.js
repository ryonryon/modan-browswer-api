const baconURL = "https://putsreq.com/m2FKjOU8L1XaFVA5U9MQ";
function sendEvent(strEvent) {
  if (navigator.sendBeacon) {
    navigator.sendBeacon(baconURL, strEvent);
  }
}

window.addEventListener("load", e => {
  sendEvent("test load Bacon");

  this.document.getElementById("button1").addEventListener("click", () => {
    sendEvent("button 1 click");
  });

  this.document.getElementById("button2").addEventListener("click", () => {
    sendEvent("button 2 click");
  });
});

window.addEventListener("unload", e => {
  sendEvent("test unload Bacon");
});
