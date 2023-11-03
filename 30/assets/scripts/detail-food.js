let container = document.querySelector(".container");

let id = new URLSearchParams(location.search).get("foodId")
console.log(id);

let meals_url = "http://localhost:3000/meals"
axios.get(meals_url).then((res) => {
    let data = res.data;
    console.log(data);

    let found = data.find((item) => item.id == id);
    console.log(found);

    container.innerHTML = `
<div class="card" style="width: 50%">
<div class="image-wrapper" style="width: 100%; overflow: hidden;">
<img
style="overflow: hidden;"
  src="${found.image}"
  class="card-img-top"
  alt="${found.name}"
/>
</div>
    <div class="card-body" style="width:100%;padding:30px">
      <h5 class="card-title">${found.name}</h5>
      <p class="card-text">PRICE $${found.price}</p>
      <p class="card-text">Ingridients:</p>
      <p class="card-text">${found.ingredients}</p>
      <a href="meals.html" class="btn btn-outline-primary details">Home</a>
      <a href="" name="${found.id}" class="btn btn-outline-primary basket"
      ><i class="fa-solid fa-basket-shopping"></i
    ></a>
    <a href="" name="${found.id}"  class="btn btn-outline-danger favMeals"
    ><i class="fa-regular fa-heart"></i
  ></a>
    </div>
</div>`;


    // add to fav
    let favArr;
    let localFav = JSON.parse(localStorage.getItem("fav"));
    if (localFav) {
        favArr = [...localFav];
    } else {
        favArr = [];
    }
    console.log(favArr);

    let favs = document.querySelectorAll(".favMeals");
    favs.forEach(fav => {
        fav.addEventListener("click", function (e) {
            e.preventDefault();
            console.log(this.name);
            console.log(favArr);
            if (favArr) {
                if (!favArr.includes(this.name)) {
                    favArr.push(this.name);
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

                    let updatedFav = favArr.filter((x) => x != this.name);
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
        })
    })
    // adding basket
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


    // scale of image
    let image = document.querySelector(".card-img-top");
    console.log(image);

    image.addEventListener("mouseover", function () {
        image.style.transform = "scale(1.15)";
        image.style.transition = 'transform 0.25s';
    })
    image.addEventListener("mouseout", function () {
        image.style.transform = "scale(1)";
        image.style.transition = 'transform 0.25s';
    })
})

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