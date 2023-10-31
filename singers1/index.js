let cards = document.querySelector(".cards");

fetch("http://localhost:3000/singers")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    data.forEach((card) => {
      cards.innerHTML += `  <div class="card" style="width: 18rem;">
        <img src="${card.image}"
            class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${card.name}</h5>
            <p class="card-text">${card.name} is ${card.nationality}</p>
            <a href="" class="btn btn-outline-primary details">Details</a>
            <a href="" name="${card.id}"  class="btn btn-outline-danger fav"><i class="fa-solid fa-heart"></i></a>
            <a href="" class="btn btn-outline-danger delete"><i class="fa-solid fa-trash"></i></a>
        </div>
    </div>`;
    });

    let favs = document.querySelectorAll(".fav");
    let arr = [];

    let localFavArr = JSON.parse(localStorage.getItem("fav"));

    if (localFavArr) {
      arr = [...localFavArr];
    }
    console.log(arr);

    // let details = document.querySelectorAll(".details");
    // details.forEach(detail=>{
    //     detail.addEventListener("click",function(){

    //     })
    // })

    favs.forEach((fav) => {
      fav.addEventListener("click", function (e) {
        e.preventDefault();
        fav.style.backgroundColor = "red";
        let favId = this.getAttribute("name");
        console.log(favId);
        arr.push(favId);
        localStorage.setItem("fav", JSON.stringify(arr));
      });
    });
  });
