let cards = document.querySelector(".cards");
let url_meals = "http://localhost:3000/meals";

axios.get(url_meals).then((res) => {
  let data = res.data;

  data.forEach((food) => {
    cards.innerHTML += `
    <div class="card" style="width: 18rem;owerflow:hidden">
    <div class="image-wrapper" style="width: 18rem; height: 200px;overflow: hidden;">
    <img
    style="height:200px;overflow: hidden;"
      src="${food.image}"
      class="card-img-top"
      alt="..."
    />
    </div>
    <div class="card-body" style="width:100%">
      <h5 class="card-title">${food.name}</h5>
      <p class="card-text">${food.name} is $${food.price}</p>
      <a href="detail-food.html?foodId=${food.id}" class="btn btn-outline-primary details">Details</a>
      <a href="" class="btn btn-outline-danger delete"
        ><i class="fa-solid fa-trash"></i
      ></a>
      <a href="" name="${food.id}" class="btn btn-outline-primary basket"
        ><i class="fa-solid fa-basket-shopping"></i
      ></a>
      <a href="" name="${food.id}" id="${food.name}" class="btn btn-outline-danger favMeals"
      ><i class="fa-regular fa-heart"></i
    ></a>
    </div>`;
  });

  // att to basket
  let basketArr;
  let localBasket = JSON.parse(localStorage.getItem("basket"));
  if (localBasket) {
    basketArr = [...localBasket];
  } else {
    basketArr = [];
  }
  console.log(basketArr);
  let count = 0;

  let baskets = document.querySelectorAll(".basket");
  baskets.forEach((basket) => {
    basket.addEventListener("click", function (e) {
      e.preventDefault();
      console.log(this.parentElement.children[0].innerText);
      console.log(basketArr);
      if (basketArr) {
        if (!basketArr.includes(this.name)) {
          basketArr.push(this.name);
          localStorage.setItem("basket", JSON.stringify(basketArr));
          count = 1;
          Swal.fire({
            position: "bottom-right",
            icon: "success",
            title: " Added to Basket",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          count++;
          Swal.fire({
            position: "bottom-right",
            icon: "success",
            title: "One more added",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } else {
        basketArr = [];
      }
    });
  });

  // adding fav
  let favArr;
  let localFav = JSON.parse(localStorage.getItem("fav"));
  if (localFav) {
    favArr = [...localFav];
  } else {
    favArr = [];
  }
  console.log(favArr);

  let favs = document.querySelectorAll(".favMeals");
  favs.forEach((fav) => {
    fav.addEventListener("click", function (e) {
      e.preventDefault();
      let id = this.getAttribute("id");
      console.log(id);
      console.log(this.parentElement.children[0].innerText);
      console.log(favArr);
      if (favArr) {
        if (!favArr.includes(this.parentElement.children[0].innerText)) {
          favArr.push(this.parentElement.children[0].innerText);
          localStorage.setItem("fav", JSON.stringify(favArr));
          this.children[0].classList.replace("fa-regular", "fa-solid");
          Swal.fire({
            position: "bottom-right",
            icon: "success",
            title: "Meal added",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {

          let updatedFav = favArr.filter((x) => x != this.name || x != id);
          localStorage.setItem("fav", JSON.stringify([...updatedFav]));
          this.children[0].classList.replace("fa-solid", "fa-regular");

          Swal.fire({
            position: "bottom-right",
            icon: "error",
            title: "Meal unfavourited!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } else {
        favArr = [];
      }
    });
  });

  // scale of image
  let images = document.querySelectorAll(".card-img-top");
  images.forEach((image) => {
    image.addEventListener("mousemove", function () {
      image.style.transform = "scale(1.15)";
      image.style.transition = "transform 0.25s";
    });

    image.addEventListener("mouseout", function () {
      image.style.transform = "scale(1)";
      image.style.transition = "transform 0.25s";
    });
  });


});


// search input
let mealsInput = document.querySelector(".meals-input");
mealsInput.addEventListener("keyup", function () {
  axios.get(url_meals).then((res) => {
    let data = res.data;
    cards.innerHTML = "";
    data.forEach((food) => {
      if (food.name.toLowerCase().includes(mealsInput.value.toLowerCase())) {
        cards.innerHTML += `
        <div class="card" style="width: 18rem;owerflow:hidden">
    <div class="image-wrapper" style="width: 18rem; height: 200px;overflow: hidden;">
    <img
    style="height:200px;overflow: hidden;"
      src="${food.image}"
      class="card-img-top"
      alt="..."
    />
    </div>
    <div class="card-body" style="width:100%">
      <h5 class="card-title">${food.name}</h5>
      <p class="card-text">${food.name} is $${food.price}</p>
      <a href="detail-food.html?foodId=${food.id}" class="btn btn-outline-primary details">Details</a>
      <a href="" class="btn btn-outline-danger delete"
        ><i class="fa-solid fa-trash"></i
      ></a>
      <a href="" name="${food.id}" class="btn btn-outline-primary basket"
        ><i class="fa-solid fa-basket-shopping"></i
      ></a>
      <a href="" name="${food.id}"  class="btn btn-outline-danger favMeals"
      ><i class="fa-regular fa-heart"></i
    ></a>
    </div>`;
      }
    });
  });
});

// sort by price
let sortByPriceBtn = document.querySelector(".sort-by-price-btn")
sortByPriceBtn.addEventListener("click", function () {
  axios.get(url_meals).then((res) => {
    let data = res.data;
    let sortedData = data.sort((a, b) => a.price - b.price);
    cards.innerHTML = "";
    sortedData.forEach((food) => {
      cards.innerHTML += `
      <div class="card" style="width: 18rem;owerflow:hidden">
      <div class="image-wrapper" style="width: 18rem; height: 200px;overflow: hidden;">
      <img
      style="height:200px;overflow: hidden;"
        src="${food.image}"
        class="card-img-top"
        alt="..."
      />
      </div>
      <div class="card-body" style="width:100%">
        <h5 class="card-title">${food.name}</h5>
        <p class="card-text">${food.name} is $${food.price}</p>
        <a href="detail-food.html?foodId=${food.id}" class="btn btn-outline-primary details">Details</a>
        <a href="" class="btn btn-outline-danger delete"
          ><i class="fa-solid fa-trash"></i
        ></a>
        <a href="" name="${food.id}" class="btn btn-outline-primary basket"
          ><i class="fa-solid fa-basket-shopping"></i
        ></a>
        <a href="" name="${food.id}"  class="btn btn-outline-danger favMeals"
        ><i class="fa-regular fa-heart"></i
      ></a>
      </div>`
        ;
    });
  });
});

// // adding basket
// let arr = [];
// favArr = JSON.parse(localStorage.getItem("fav"));
// if (JSON.parse(localStorage.getItem("fav")))
//   function fav() {
//     let favBtns = document.querySelectorAll(".fav");
//     favBtns.forEach((fav) => {
//       fav.addEventListener("click", function (e) {
//         e.preventDefault();
//         let favId = this.name;
//         console.log(favId);
//       });
//     });
//   }


let basketArr;
if (JSON.parse(localStorage.getItem("basket"))) {
  basketArr = JSON.parse(localStorage.getItem("basket"));
} else {
  basketArr = []
}
let favArr;
let localFav = JSON.parse(localStorage.getItem("fav"));
if (localFav) {
  favArr = [...localFav];
} else {
  favArr = [];
}
console.log(favArr);

console.log(favArr);
console.log(basketArr)
console.log(favArr.length);
let countWish = favArr.length;
let countBasket = basketArr.length;
let wishlistCount = document.querySelector("#wishlist-count");
let basketCount = document.querySelector("#basket-count");

document.addEventListener('DOMContentLoaded', function (e) {
  e.preventDefault();
  wishlistCount.innerText = `${countWish}`;
  basketCount.innerText = `${countBasket}`;

})