let inputfield = document.getElementsByTagName("input");
let submitbtn = document.getElementsByClassName("sbt");
let resetbtn = document.getElementsByClassName("reset");
let container = document.getElementsByClassName("container");
const popup = document.getElementsByClassName("popup");
const cross = document.getElementById("cross");
const popupinsider = document.getElementsByClassName("popup-cont");
const dropdown = document.getElementById("Country");

console.log(inputfield);
let data = {};
for (let i = 0; i < inputfield.length; i++) {
  inputfield[i].addEventListener("change", (e) => {
    e.preventDefault();
    const { id, value } = e.target;
    data = { ...data, [id]: value };
    inputfield[i].name = value;
    console.log(data);
  });
}
submitbtn[0].addEventListener("click", (e) => {
 e.preventDefault();

  for (const key in data) {
    const para = document.createElement("p");
    popupinsider[0].append(para);
    if (key === "male" || key === "female") {
      para.innerText = `${key} = ${key}`;
    } else {
      para.innerText = `${key} = ${data[key]}`;
    }
  }
  container[0].style.display = "none";
  popup[0].style.display = "block";
});

cross.addEventListener("click", (e) => {
  e.preventDefault();
  container[0].style.display = "block";
  popup[0].style.display = "none";
});
resetbtn[0].addEventListener("click", (e) => {
  data = {};
  for (let i = 0; i < inputfield.length; i++) {
    e.target.name = " ";
  }
  dropdown.value = " ";
});

dropdown.addEventListener("change", (e) => {
  const { id, value } = e.target;
  data = { ...data, [id]: value };
  e.target.name = e.target.value;
});
