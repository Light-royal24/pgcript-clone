const passwordOne = document.querySelector("#question1");
const passwordTwo = document.querySelector("#question2");
const passwordThree = document.querySelector("#question3");

const btnOne = document.querySelector("#btn1");
const btnTwo = document.querySelector("#btn2");
const btnThree = document.querySelector("#btn3");

const sumbitBtn = document.querySelector("#generate-password");

sumbitBtn.addEventListener("click", () => {
  const answers = {
    firstValue: passwordOne.value,
    secondValue: passwordTwo.value,
    thirdValue: passwordThree.value,
  };

  console.log(answers);
  // Create a random string with that has numbers and letters
});

const btns = Array.from(document.querySelectorAll(".btn"));

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(btn.value);
  });
});
