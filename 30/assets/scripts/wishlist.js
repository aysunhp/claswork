let tBody = document.querySelector("tbody");

let favArr = JSON.parse(localStorage.getItem("fav"));
console.log(favArr);

let singers_url = "http://localhost:3000/singers";
axios.get(singers_url).then((res) => {
  let data = res.data;

  data.forEach((singer) => {
    favArr.forEach((id) => {
      if (singer.id == id) {
        tBody.innerHTML += `
                <tr>
                    <td scope="row">${singer.id}</td>
                    <td>${singer.name}</td>
                    <td> <img src="${singer.image}" alt="" style="width:60px;height:60px"></td>
                    <td>${singer.age}</td>
                    <td>${singer.genre}</td>
                    <td><button name=${singer.id} class="btn btn-outline-danger delete"><i class="fa-solid fa-trash"></i></button></td>
                </tr>`;
      }
      let deleteBtns = document.querySelectorAll(".delete");
      deleteBtns.forEach((deleteBtn) => {
        deleteBtn.addEventListener("click", function () {
          Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              let updatedFav = favArr.filter((x) => x != this.name);
              this.closest("tr").remove();
              localStorage.setItem("fav", JSON.stringify([...updatedFav]));
              Swal.fire("Deleted!", "success");
            }
          });
        });
      });
    });
  });
});

let mealsTable = document.querySelector(".meals");
let meals_url = "http://localhost:3000/meals";
axios.get(meals_url).then((res) => {
  let data = res.data;

  data.forEach((food) => {
    favArr.forEach((item) => {
      if (food.name == item) {
        mealsTable.innerHTML += `
                <tr>
                    <td scope="row">${food.id}</td>
                    <td>${food.name}</td>
                    <td> <img src="${food.image}" alt="" style="width:60px;height:60px"></td>
                    <td>${food.price}</td>
                    <td><button name=${food.name} class="btn btn-outline-danger delete"><i class="fa-solid fa-trash"></i></button></td>
                    <td><button name=${food.name} id=${food.id} class="btn btn-outline-danger addBasket"><i class="fa-solid fa-basket-shopping"></i></button></td>
                </tr>`;
      }

      // add local basket
      let basketArr;
      let localBasket = JSON.parse(localStorage.getItem("basket"));
      if (localBasket) {
        basketArr = [...localBasket];
      } else {
        basketArr = [];
      }
      console.log(basketArr);

      let addBaskets = document.querySelectorAll(".addBasket");
      addBaskets.forEach((addBasket) => {
        addBasket.addEventListener("click", function () {
          let id = addBasket.getAttribute("id");
          console.log(id)
          if (basketArr) {
            if (!basketArr.includes(id)) {
              basketArr.push(id);
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
        })
      })

      // delete item
      let deleteBtns = document.querySelectorAll(".delete");
      deleteBtns.forEach((deleteBtn) => {
        deleteBtn.addEventListener("click", function () {
          Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              let updatedFav = favArr.filter((x) => x != this.name);
              this.closest("tr").remove();
              localStorage.setItem("fav", JSON.stringify([...updatedFav]));
              Swal.fire("Deleted!", "success");
            }
          });
        });
      });
    });
  });
});

let basketArr;
if (JSON.parse(localStorage.getItem("basket"))) {
  basketArr = JSON.parse(localStorage.getItem("basket"));
} else {
  basketArr = []
}

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
