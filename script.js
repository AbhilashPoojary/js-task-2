"use strict";

const btnInc = document.querySelector(".inCount");
const btnDec = document.querySelector(".deCount");
const countNo = document.querySelector(".count-no");
const parent = document.querySelector(".counter");

if (parent) {
  let counter = 0;
  const increment = (e) => {
    counter++;
    countNo.textContent = counter;
  };
  const decrement = (e) => {
    counter--;
    countNo.textContent = counter;
  };

  btnInc.addEventListener("click", increment);
  btnDec.addEventListener("click", decrement);
}

/* ******************************************************************************* */
const dataForm = document.querySelector(".data-form");
const dataInput = document.querySelector(".data-input");
const dataOutput = document.querySelector(".output");
const dataParent = document.querySelector(".data-type");

if (dataParent) {
  const checkType = (input) => {
    console.log(input);
    const returnType = typeof input;
    dataOutput.innerHTML = `<p>Entered input i.e ${input} is <span class="fw-bold">${returnType}<span></p>`;
  };

  dataForm.addEventListener("submit", function (e) {
    e.preventDefault();
    checkType(dataInput.value);
  });
}

/* ******************************************************************************* */
// calculator
const calcApp = document.querySelector(".calculator");
if (calcApp) {
  (function () {
    let screen = document.querySelector(".screen");
    let buttons = document.querySelectorAll(".btn");
    let clear = document.querySelector(".btn-clear");
    let equal = document.querySelector(".btn-equal");

    buttons.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        let value = e.target.dataset.num;
        if (value === "." && screen.value.includes(".")) {
          return;
        }
        if (value) {
          screen.value += value;
        }
      });
    });
    equal.addEventListener("click", function (e) {
      if (screen.value === "") {
        screen.value = "";
      } else {
        let ans = eval(screen.value);
        screen.value = ans;
      }
    });

    clear.addEventListener("click", function (e) {
      screen.value = "";
    });
  })();
}

/* ******************************************************************************* */
//background
const square = document.querySelector(".square");
if (square) {
  const addColor = () => {
    const randomNo = Math.floor(Math.random() * 255 + 1);
    return randomNo;
  };

  square.addEventListener("click", function () {
    const bgColor = `rgb(${addColor()}, ${addColor()}, ${addColor()})`;
    const borderColor = `rgb(${addColor()}, ${addColor()}, ${addColor()})`;
    square.style.background = bgColor;
    square.style.border = `2px solid ${borderColor}`;
  });
}

/* ******************************************************************************* */
const checkDataType = (input) => {
  const returnType = typeof input;
  return `Entered input i.e ${input} is ${returnType}`;
};
console.log(checkDataType("Animal"));
console.log(checkDataType(100));
console.log(checkDataType(true));
console.log(checkDataType({ a: "hi" }));
console.log(checkDataType(["a", "b", "c"]));
