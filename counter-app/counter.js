// let plus = document.querySelector(".plus");
// let minus = document.    querySelector(".minus");
// let count = document.querySelector(".count");
var plus = document.createElement("button");
var minus = document.createElement("button");
var count = document.createElement("span");
document.body.append(plus, count, minus);
var counter = 0;
console.log(count === null || count === void 0 ? void 0 : count.innerHTML);
plus.innerHTML = "+";
minus.innerHTML = "-";
count.innerHTML = "0";
plus === null || plus === void 0 ? void 0 : plus.addEventListener("click", function (e) {
    e.preventDefault;
    counter += 1;
    count.innerHTML = "".concat(counter);
});
minus === null || minus === void 0 ? void 0 : minus.addEventListener("click", function (e) {
    e.preventDefault;
    counter -= 1;
    count.innerHTML = String(counter);
});
