const display = document.querySelector(".display input");
const btns = document.querySelectorAll(".btn");
let result = "";

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.textContent === "=") {
      try {
        result = eval(result);
        display.value = result;
      } catch (error) {
        display.value = "MATH ERROR";
      }
    } else if (btn.textContent === "AC") {
      result = "";
      display.value = result;
    } else if (btn.textContent === "DEL") {
      result = result.toString().slice(0, -1);
      display.value = result;
    } else {
      result += btn.textContent;
      display.value = result;
    }
  });
});

btns.forEach((btn) => {
  btn.addEventListener("mousedown", () => {
    btn.classList.add("active");
  });
});

btns.forEach((btn) => {
  btn.addEventListener("mouseup", () => {
    btn.classList.remove("active");
  });
});
