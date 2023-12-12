// let plus = document.querySelector(".plus");
// let minus = document.    querySelector(".minus");
// let count = document.querySelector(".count");

let plus = document.createElement("button")!;
let minus = document.createElement("button")!;
let count = document.createElement("span")!;

document.body.append(plus, count, minus);

let counter: number = 0;
console.log(count?.innerHTML);

plus.innerHTML = "+";
minus.innerHTML = "-";
count.innerHTML = "0";
plus?.addEventListener("click", function (e) {
  e.preventDefault;
  counter += 1;
  count.innerHTML = `${counter}`;
});

minus?.addEventListener("click", function (e) {
  e.preventDefault;
  counter -= 1;
  count.innerHTML = String(counter);
});
