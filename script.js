document.addEventListener("keydown", (e) => {
  if (e.key === "Backspace") {
    const inputField = document.getElementById("input");
    const inputValue = inputField.value;
    inputField.value = inputValue.slice(0,-1);
  }
});
document.addEventListener("keypress", (e) => {

  if (e.key === "Enter") {
    calculate();
  }
});
function appendToInput(value) {
  document.getElementById("input").value += value;
}

function clearInput() {
  document.getElementById("input").value = "";
}

function calculate() {
  const input = document.getElementById("input").value;
  try {
    const result = eval(input);
    document.getElementById("input").value = result;
  } catch (error) {
    document.getElementById("input").value = "Error";
  }
}
