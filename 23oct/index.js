// let body = document.querySelector("body");
// let div = document.createElement("div");
// let input = document.createElement("input");
// let button = document.createElement("button");
// div.style.width = "500px";
// div.style.height = "50px";
// div.style.backgroundColor = "red";

// button.innerText = "button";
// button;
// body.appendChild(div);
// body.appendChild(input);
// body.appendChild(button);
// button.addEventListener("click", function () {
//   console.log(input.value);
//   input.value = "";
// });

// let body = document.querySelector("body");
// let div = document.createElement("div");
// let ul = document.createElement("ul");
// let li1 = document.createElement("li");
// let li2 = document.createElement("li");
// let h3 = document.createElement("h3");
// let p = document.createElement("p");
// let a1 = document.createElement("a");
// let a2 = document.createElement("a");
// let btn = document.createElement("button");

// li1.appendChild(a1);
// li2.appendChild(a2);
// ul.appendChild(li1);
// ul.appendChild(li2);
// div.appendChild(ul);
// body.appendChild(div);
// body.appendChild(h3);
// body.appendChild(p);
// body.appendChild(btn);

// a1.setAttribute("href", "https://google.com");
// a1.setAttribute("target", "_blank");

// a2.setAttribute("href", "https://youtube.com");
// a2.setAttribute("target", "_blank");

// a1.textContent = "Google";
// a2.textContent = "Youtube";
// div.style.border = "1px solid black";
// div.style.width = "100%";
// div.style.height = "100px";

// h3.innerText = "Heading test";
// h3.style.color = "red";

// p.innerText = "Address Baku,Azerbaijan";

// div.classList.add("div");
// btn.classList.add("btn");
// btn.setAttribute("disabled", true);
// btn.textContent = "Disabled Button";

let body = document.querySelector("body");
let wrapper = document.querySelector(".wrapper");
let box = document.querySelector(".box");
let btn = document.querySelector(".btn");
console.log(btn);
btn.addEventListener("click", function () {
  box.style.backgroundColor = "red";
  box.style.width = "200px";
  box.style.height = "200px";
  console.log("clicked");
});
