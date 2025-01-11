const simpleOption = document.querySelector(".simple-option");
const hexOption = document.querySelector(".hex-option");
const main = document.querySelector("main");
const bgColourValue = document.querySelector(".bg-color-value");
const changeColour = document.querySelector(".change-color-btn");

const colourArr = [
  "#cf2121",
  "#773077",
  "#3482ff9f",
  "#18b618",
  "#a0522d",
  "#c0c0c0",
];
let option = "simple";


simpleOption.addEventListener("click", function () {
  hexOption.classList.remove("txt-active")
  simpleOption.classList.add("txt-active")
  option = "simple"
  console.log("hello");
  
})

hexOption.addEventListener("click", function () {
  simpleOption.classList.remove("txt-active")
  hexOption.classList.add("txt-active")
  option = "hex"
  console.log("hi");
  
})

function generateRandomChar() {
  const alphaNum = "abcdefghijklmnopqrstuvwxyz0123456789";
  const random = Math.floor(Math.random() * 36);
  const selectRandom = alphaNum[random];
  console.log(selectRandom, random);
  return selectRandom;
}

changeColour.addEventListener("click", function () {
  const randomVal = Math.floor(Math.random() * 6);
  const randomColourOption = colourArr[randomVal];
  console.log(randomVal);
  console.log(randomColourOption);
  bgColourValue.textContent = randomColourOption;
  main.style.backgroundColor = randomColourOption;
});
