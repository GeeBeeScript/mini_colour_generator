
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
  hexOption.classList.remove("txt-active");
  simpleOption.classList.add("txt-active");
  option = "simple";
});

hexOption.addEventListener("click", function () {
  simpleOption.classList.remove("txt-active");
  hexOption.classList.add("txt-active");
  option = "hex";
});

function generateRandomChar() {
  const alphaNum = "abcdef0123456789";
  const random = Math.floor(Math.random() * alphaNum.length);
  const selectRandom = alphaNum[random];
  return selectRandom;
}

changeColour.addEventListener("click", function () {
  if (option === "simple") {
    const randomVal = Math.floor(Math.random() * colourArr.length);
    const randomColourOption = colourArr[randomVal];
    bgColourValue.textContent = randomColourOption;
    main.style.backgroundColor = randomColourOption;
  } else if (option === "hex") {
    // firstValue = generateRandomChar();
    // secondValue = generateRandomChar();
    // thirdValue = generateRandomChar();
    // fourthValue = generateRandomChar();
    // fifthValue = generateRandomChar();
    // sixthValue = generateRandomChar();
    // hexVal = `#${firstValue}${secondValue}${thirdValue}${fourthValue}${fifthValue}${sixthValue}`;
    // This is an alternative to the above
    const alphaNum = "abcdef0123456789";
    hexVal = "#"
    for (let i = 0; i < 6; i++) {
      const random = Math.floor(Math.random() * alphaNum.length);
      const selectRandom = alphaNum[random];
      hexVal += selectRandom
    }
    main.style.backgroundColor = hexVal;
    bgColourValue.textContent = hexVal;
  } else {
    return
  }
});

generateRandomChar();
