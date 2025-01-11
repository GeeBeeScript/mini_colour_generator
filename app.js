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
const option = "simpled";

// simpleOption.classList.add(".txt-active")

function generateRandomChar() {
  const alphaNum = "abcdefghijklmnopqrstuvwxyz0123456789";
  const random = Math.floor(Math.random() * 36);
  const selectRandom = alphaNum[random];
  console.log(selectRandom, random);
  return selectRandom;
}

changeColour.addEventListener("click", function () {
  if (option == "simple") {
    const randomVal = Math.floor(Math.random() * 6);
    const randomColourOption = colourArr[randomVal];
    console.log(randomVal);
    console.log(randomColourOption);
    bgColourValue.textContent = randomColourOption;
    main.style.backgroundColor = randomColourOption;
  } else {
    firstChar = generateRandomChar();
    secondChar = generateRandomChar();
    thirdChar = generateRandomChar();
    fourthChar = generateRandomChar();
    fifthChar = generateRandomChar();
    sixthChar = generateRandomChar();
    hexValue = `#${firstChar}${secondChar}${thirdChar}${fourthChar}${fifthChar}${sixthChar}`;
    console.log(hexValue)
    bgColourValue.textContent = hexValue
    main.style.backgroundColor = hexValue
  }
});
