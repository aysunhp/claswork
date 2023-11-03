let container = document.querySelector(".container");

let id = new URLSearchParams(location.search).get("id")
console.log(id);

let singers_url = "http://localhost:3000/singers"
axios.get(singers_url).then((res) => {
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
      <p class="card-text">${found.name} is <b>${found.nationality}</b></p>
      <p class="card-text">AGE: ${found.age}</p>
      <p class="card-text">GENRE: ${found.genre}</p>
      <a href="index.html" class="btn btn-outline-primary details">Home</a>
      <a href="" name="${found.id}" class="btn btn-outline-danger fav"
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

    let favs = document.querySelectorAll(".fav");
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
                        title: "Singer added",
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
                        title: "Singer unfavourited!",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            } else {
                favArr = [];
            }
        })
    })




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