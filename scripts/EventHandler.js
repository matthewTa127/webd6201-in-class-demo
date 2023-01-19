let welcome = document.getElementById("welcome");
let display = document.getElementById("displayEvent");

let userDisplay = document.getElementById("userDisplay");
let passDisplay = document.getElementById("passDisplay");

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

function validateForm() {
  let x = document.forms["myForm"]["username"].value;
  let y = document.forms["myForm"]["password"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  } else {
    console.log(`Username: ${x} \n Password: ${y}`);
    userDisplay.textContent = x;
    passDisplay.textContent = y;
    return false;
  }
}
