let welcome = document.getElementById("welcome");
let display = document.getElementById("displayEvent");

welcome.addEventListener("click", function () {
  console.log("Event: Click");
  display.innerText = "Event: Click";
});

welcome.addEventListener("mouseover", function () {
  console.log("Event: mouseover");
  display.innerText = "Event: mouseover";
});

welcome.addEventListener("mouseout", function () {
  console.log("Event: mouseout");
  display.innerText = "Event: mouseout";
});

welcome.addEventListener("dblclick", function () {
  console.log("Event: dblclick");
  display.innerText = "Event: dblclick";
});
