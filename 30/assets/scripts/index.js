let cards = document.querySelector(".cards");
let singerInput = document.querySelector(".singer-input");
let sortByNameBtn = document.querySelector(".sort-by-name-btn");

let singers_url = "http://localhost:3000/singers";
axios.get(singers_url).then((res) => {
  let data = res.data;

  data.forEach((singer) => {
    cards.innerHTML += `
        <div class="card" style="width: 18rem;owerflow:hidden">
        <div class="image-wrapper" style="width: 18rem; height: 200px;overflow: hidden;">
        <img
        style="height:200px;overflow: hidden;"
          src="${singer.image}"
          class="card-img-top"
          alt="..."
        />
        </div>
        <div class="card-body" style="width:100%">
          <h5 class="card-title">${singer.name}</h5>
          <p class="card-text">${singer.name} is ${singer.nationality}</p>
          <a href="detail.html?id=${singer.id}" class="btn btn-outline-primary details">Details</a>
          <a href="" name="${singer.id}" class="btn btn-outline-danger fav"
            ><i class="fa-regular fa-heart"></i
          ></a>
          <a href="" class="btn btn-outline-danger delete"
            ><i class="fa-solid fa-trash"></i
          ></a>
        </div>`;
  });

  let favArr;
  let localFav = JSON.parse(localStorage.getItem("fav"));
  if (localFav) {
    favArr = [...localFav];
  } else {
    favArr = [];
  }
  console.log(favArr);

  let favs = document.querySelectorAll(".fav");
  favs.forEach((fav) => {
    fav.addEventListener("click", function (e) {
      e.preventDefault();
      console.log(this.firstChild);
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
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    console.log(favs)
    // favs.forEach(fav => {
    //   if (favArr.includes(fav.id)) {
    //     console.log("salam")
    //     // this.firstChild.classList.replace("fa-regular", "fa-solid")
    //   }
    // })
  })
  // localStorage.clear();
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
singerInput.addEventListener("keyup", function () {
  axios.get(singers_url).then((res) => {
    let data = res.data;
    cards.innerHTML = "";
    data.forEach((singer) => {
      if (singer.name.toLowerCase().includes(singerInput.value.toLowerCase())) {
        cards.innerHTML += `
        <div class="card" style="width: 18rem;owerflow:hidden">
        <div class="image-wrapper" style="width: 18rem; height: 200px;overflow: hidden;">
        <img
        style="height:200px;overflow: hidden;"
          src="${singer.image}"
          class="card-img-top"
          alt="..."
        />
        </div>
        <div class="card-body" style="width:100%">
          <h5 class="card-title">${singer.name}</h5>
          <p class="card-text">${singer.name} is ${singer.nationality}</p>
          <a href="detail.html?id=${singer.id}" class="btn btn-outline-primary details">Details</a>
          <a href="" name="${singer.id}" class="btn btn-outline-danger fav"
            ><i class="fa-solid fa-heart"></i
          ></a>
          <a href="" class="btn btn-outline-danger delete"
            ><i class="fa-solid fa-trash"></i
          ></a>
        </div>`;
      }
    });
  });
});

// sort by name
sortByNameBtn.addEventListener("click", function () {
  axios.get(singers_url).then((res) => {
    let data = res.data;
    let sortedData = data.sort((a, b) => a.name.localeCompare(b.name));
    cards.innerHTML = "";
    sortedData.forEach((singer) => {
      cards.innerHTML += `
        <div class="card" style="width: 18rem;overflow:hidden">
        <div class="image-wrapper" style="width: 18rem; height: 200px;overflow: hidden;">
        <img
        style="height:200px;overflow: hidden;"
          src="${singer.image}"
          class="card-img-top"
          alt="..."
        />
        </div>
        <div class="card-body" style="width:100%">
          <h5 class="card-title">${singer.name}</h5>
          <p class="card-text">${singer.name} is ${singer.nationality}</p>
          <a href="detail.html?id=${singer.id}" class="btn btn-outline-primary details">Details</a>
          <a href="" name="${singer.id}" class="btn btn-outline-danger fav"
            ><i class="fa-regular fa-heart"></i
          ></a>
          <a href="" name="${singer.id}" class="btn btn-outline-danger delete"
            ><i class="fa-solid fa-trash"></i
          ></a>
        </div>`;
    });
  });
});

// adding basket
// let arr = [];
// let favArr = JSON.parse(localStorage.getItem("fav"));
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


// count in nav
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