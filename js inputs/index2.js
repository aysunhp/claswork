let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let span = document.querySelector("span");

btn2.addEventListener("click", function () {
  let counter = Number(span.textContent);
  counter++;
  btn1.removeAttribute("disabled");
  btn1.classList.replace("btn-danger", "btn-success");
  span.textContent = counter;
});
btn1.addEventListener("click", function () {
  let counter = Number(span.textContent);

  if (counter > 0) {
    counter--;
    span.textContent = counter;
  } else {
    this.classList.replace("btn-success", "btn-danger");
    this.setAttribute("disabled", true);
  }
});

let input = document.querySelector("#input");
let mySpan = document.querySelector("#myspan");

input.addEventListener("keyup", function (e) {
  if (input.value.length > 5) {
    mySpan.style.display = "none";
  } else {
    mySpan.style.display = "block";
  }
});

let submit = document.querySelector(".submit");
let image = document.querySelector(".image");
let name = document.querySelector(".name");
let age = document.querySelector(".age");
let container = document.querySelector(".containerBox");

submit.addEventListener("click", function () {
  let img = image.value;
  let inputAge = age.value;
  let inputName = name.value;
  <div class="card col-3" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
      <h1></h1>
      <span></span>
  </div>
</div>

  container.appendChild(card);
});
