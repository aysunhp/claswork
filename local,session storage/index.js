let modeBtn = document.querySelector(".modeBtn");

modeBtn.addEventListener("click", function () {
  if (JSON.parse(localStorage.getItem("dark-mode")) === null) {
    localStorage.setItem("dark-mode", JSON.stringify(true));
    this.textContent = "Light Mode";
    this.classList.replace("btn-dark", "btn-light");
    document.body.classList.add("bg-dark");
  } else {
    if (JSON.parse(localStorage.getItem("dark-mode")) === true) {
      this.textContent = "Dark Mode";
      this.classList.replace("btn-light", "btn-dark");
      document.body.classList.remove("bg-dark");
      localStorage.setItem("dark-mode", JSON.stringify(false));
    } else {
      this.textContent = "Light Mode";
      this.classList.replace("btn-dark", "btn-light");
      document.body.classList.add("bg-dark");
      localStorage.setItem("dark-mode", JSON.stringify(true));
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  if (JSON.parse(localStorage.getItem("dark-mode"))) {
    if (JSON.parse(localStorage.getItem("dark-mode")) === true) {
      modeBtn.classList.replace("btn-dark", "btn-light");
      document.body.classList.add("bg-dark");
      modeBtn.textContent = "Light Mode";
    } else {
      modeBtn.classList.replace("btn-light", "btn-dark");
      document.body.classList.remove("bg-dark");
      modeBtn.textContent = "Dark Mode";
    }
  }
});
