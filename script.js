const display = document.querySelector(".display");
const specialChars = ["%", "*", "/", "-", "+", "="];
const buttons = document.querySelectorAll("button");
let OutP = "";


const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && OutP !== "") {
    OutP = eval(OutP.replace("%", "/100"));
  } else if (btnValue === "AC") {
    OutP = "";
  } else if (btnValue === "DEL") {
    OutP = OutP.toString().slice(0, -1);
  } else {
    if (OutP === "" && specialChars.includes(btnValue)) return;
    OutP += btnValue;
  }
  display.value = OutP;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});