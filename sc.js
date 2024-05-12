var input = document.getElementById("input");
var button = document.getElementById("btn");
var output = document.getElementById("out");

button.addEventListener("click", () => {
  var inputValue = input.value;
  if (inputValue) {
    inputValue = parseInt(inputValue);
    var feet = inputValue / 12;
    output.style.display = "block";
    output.innerText = `${inputValue} inch = ${feet} feet`;
  } else {
    output.style.display = "block";
    output.innerText = "☹ Please Fill The Box ☹";
  }
});
