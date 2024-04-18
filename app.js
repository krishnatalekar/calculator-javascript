const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".btn");
const allClear = document.querySelector(".all-clear");
const equal = document.querySelector(".equal");

equal.addEventListener("click", () => {
    display.value = eval(display.value);
});

function getData(data) {
    if (display.value === "0") {
        display.value = data;
    } else {
        display.value += data;
    }
}

buttons.forEach(function (btn) {
    if (btn.classList[1] == "number") {
        btn.addEventListener("click", () => {
            getData(btn.value);
        });
    } else if (btn.classList[2] == "main-operator") {
        btn.addEventListener("click", () => {
            getData(btn.value);
        });
    } else if (btn.classList[0] == "dot") {
        btn.addEventListener("click", () => {
            btn.value = ".";
        });
    }
})

allClear.addEventListener("click", () => {
    display.value = "0";
});
