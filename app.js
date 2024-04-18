const display = document.querySelector("#display");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const allClear = document.querySelector(".all-clear");
const deletebtn = document.querySelector(".delete");
const dot = document.querySelector(".dot");
const slash = document.querySelector(".slash");
const doubleZero = document.querySelector(".double-zero");
const zero = document.querySelector(".zero");
const equal = document.querySelector(".equal");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const multiply = document.querySelector(".multiply");

one.addEventListener("click", () => {
    display.value += "1";
});

two.addEventListener("click", () => {
    display.value += "2";
});

three.addEventListener("click", () => {
    display.value += "3";
});

four.addEventListener("click", () => {
    display.value += "4";
});

five.addEventListener("click", () => {
    display.value += "5";
});

six.addEventListener("click", () => {
    display.value += "6";
});

seven.addEventListener("click", () => {
    display.value += "7";
});

eight.addEventListener("click", () => {
    display.value += "8";
});

nine.addEventListener("click", () => {
    display.value += "9";
});

zero.addEventListener("click", () => {
    display.value += "0";
});

doubleZero.addEventListener("click", () => {
    display.value += "00";
});

plus.addEventListener("click", () => {
    display.value += "+";
});

minus.addEventListener("click", () => {
    display.value += "-";
});

multiply.addEventListener("click", () => {
    display.value += "*";
});

dot.addEventListener("click", () => {
    display.value += ".";
});

slash.addEventListener("click", () => {
    display.value += "/";
});

allClear.addEventListener("click", () => {
    display.value = "";
});

deletebtn.addEventListener("click", () => {
    display.value = display.value.toString().slice(0, -1);
});

equal.addEventListener("click", () => {
    display.value = eval(display.value);
});



