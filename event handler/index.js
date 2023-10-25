let name = document.querySelector(".name");
let surname = document.querySelector(".surname");
let age = document.querySelector(".age");
let birthPlace = document.querySelector("#birth-place");
let womanGender = document.querySelector("#female");
let hobby = document.querySelectorAll(".hobby");
let submit = document.querySelector(".submitBtn");
let studentsBtn = document.querySelector(".cardBtn");

let arr = [];
let hobbyArr = [];
submit.addEventListener("click", function (e) {
  e.preventDefault();
  let obj = {};
  obj.name = name.value;
  obj.surname = surname.value;
  obj.age = age.value;
  obj.birthPlace = birthPlace.value;
  obj.hobby = hobbyArr;
  arr.push(obj);
  // coosing of gender
  if (womanGender.checked) {
    obj.gender = "female";
  } else {
    obj.gender = "male";
  }
  //   coosing of hobby
  for (let elem of hobby) {
    if (elem.checked) {
      hobbyArr.push(elem.name);
    }
  }
  console.log(arr);
});

studentsBtn.addEventListener("click", function () {
  for (elem of arr) {
    console.log(elem);

    let cardsWrapper = document.querySelector(".cards-wrapper");
    console.log(cardsWrapper);
    cardsWrapper.innerHTML += `<div class="card" style="width: 18rem;">
  <img src="https://picsum.photos/200" class="card-img-top" alt="...">
  <div class="card-body">
   <h5 class="card-title">${elem.name}</h5>
    <p class="card-text">${elem.surname}</p>
    <a href="#" class="btn btn-warning">info</a>
    <a href="#" class="btn btn-danger">info</a>
  </div>
</div>`;
  }
});
