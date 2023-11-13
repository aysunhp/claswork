let tBody = document.querySelector("tbody");
let removeAll = document.querySelector(".remove-all");
let order = document.querySelector(".order");
let basketTotal = document.querySelector(".basket-total");

let basketArr;
if (JSON.parse(localStorage.getItem("basket"))) {
  basketArr = JSON.parse(localStorage.getItem("basket"));
} else {
  basketArr = [];
}

console.log(basketArr);

let meals_url = "http://localhost:3000/meals";
axios.get(meals_url).then((res) => {
  let data = res.data;

  let addedItems = data.filter((item) => basketArr.includes(item.id));
  console.log(addedItems);

  data.forEach((food) => {
    basketArr.forEach((id) => {
      if (food.id == id) {
        tBody.innerHTML += `
                <tr>
                    <td scope="row">${food.id}</td>
                    <td>${food.name}</td>
                    <td> <img src="${food.image}" alt="" style="width:60px;height:60px"></td>
                    <td>${food.price}</td>
                    <td>${food.count}</td>
                    <td>${food.price}</td>
                    <td><button name=${food.id} class="btn btn-success increase">+</td>
                    <td><button name=${food.id} class="btn btn-danger decrease">+</td>
                    <td><button name=${food.id} class="btn btn-outline-danger delete"><i class="fa-solid fa-trash"></i></button></td>
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
              let updatedBasket = basketArr.filter((x) => x != this.name);
              this.closest("tr").remove();
              localStorage.setItem(
                "basket",
                JSON.stringify([...updatedBasket])
              );
              Swal.fire("Deleted!", "success");
            }
          });
        });
      });
    });
  });
});

removeAll.addEventListener("click", function () {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      tBody.innerHTML = "";
      basketTotal.innerText = "0";
      tBody.innerHTML = `   <h1 class="text-danger m-5">No basket</h1>`;
      localStorage.removeItem("basket");
      Swal.fire("Deleted!", "success");
    }
  });
});

order.addEventListener("click", function () {
  Swal.fire({
    icon: "error",
    title: "You have to login first!",
    footer: '<a href="">Login now</a>',
  });
});

if (JSON.parse(localStorage.getItem("basket"))) {
  basketArr = JSON.parse(localStorage.getItem("basket"));
} else {
  basketArr = [];
}
let favArr;
let localFav = JSON.parse(localStorage.getItem("fav"));
if (localFav) {
  favArr = [...localFav];
} else {
  favArr = [];
}
let countWish = favArr.length;
let countBasket = basketArr.length;
let wishlistCount = document.querySelector("#wishlist-count");
let basketCount = document.querySelector("#basket-count");

document.addEventListener("DOMContentLoaded", function (e) {
  e.preventDefault();
  wishlistCount.innerText = `${countWish}`;
  basketCount.innerText = `${countBasket}`;
});
