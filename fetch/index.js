let container = document.querySelector(".container");
let form = document.querySelector("form");
let submit = document.querySelector("#formSubmit");
let name = document.querySelector("#formName");
let country = document.querySelector("#formCountry");
let phone = document.querySelector("#formPhone");

let url = "https://northwind.vercel.app/api/suppliers/";
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.forEach((element, i) => {
      container.innerHTML += `
      <div class="card" style="width: 18rem;">
      <img src="https://picsum.photos/200" class="card-img-top" alt="...">
      <div class="card-body">
          <h5 class="card-title">${element.companyName}</h5>
          <p class="card-text">${element.contactName}</p>
          <p class="card-text">${element.address?.phone}</p>
          <p class="card-text">${element.address?.country}</p>
          <a href="#" name=${i} class="btn btn-info infoBtn">Info</a>
          <a href="#"  name=${element.id} class="btn btn-danger deleteBtn">Delete</a>
      </div>
  </div>
  `;
      let deleteBtns = document.querySelectorAll(".deleteBtn");

      for (let btn of deleteBtns) {
        btn.addEventListener("click", function () {
          this.parentElement.parentElement.remove();

          console.log(this.name);

          fetch(url + this.name, {
            method: "Delete",
          });
        });
      }

      let infoBtns = document.querySelectorAll(".infoBtn");
      container.innerHTML += `
      <div class="card" style="width: 18rem;">
      <img src="https://picsum.photos/200" class="card-img-top" alt="...">
      <div class="card-body">
          <h5 class="card-title">${element.companyName}</h5>
          <p class="card-text">${element.contactName}</p>
          <p class="card-text">${element.address?.phone}</p>
          <p class="card-text">${element.address?.country}</p>
          <a href="#" name=${i} class="btn btn-info infoBtn">Info</a>
          <a href="#"  name=${element.id} class="btn btn-danger deleteBtn">Delete</a>
      </div>
  </div>
  `;
      for (let btn of infoBtns) {
        btn.addEventListener("click", function () {
          console.log(this.name);
          Swal.fire({
            title: `${data[btn.name].companyName}`,
            text: `${data[btn.name].address?.country}`,
            footer: `${data[btn.name].address?.phone}`,
          });
        });
      }
    });
  });

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let obj = {
    address: {},
  };
  obj.companyName = name.value;
  obj.address.phone = phone.value;
  obj.address.country = country.value;
  console.log(obj);

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data.id);

      let deleteBtns = document.querySelectorAll(".deleteBtn");
      for (let btn of deleteBtns) {
        btn.addEventListener("click", function () {
          this.parentElement.parentElement.remove();

          console.log(this.name);

          fetch(url + this.name, {
            method: "Delete",
          });
        });
      }

      let infoBtns = document.querySelectorAll(".infoBtn");
      for (let btn of infoBtns) {
        btn.addEventListener("click", function () {
          console.log(this.name);
          Swal.fire({
            title: `${data[btn.name].companyName}`,
            text: `${data[btn.name].address?.country}`,
            footer: `${data[btn.name].address?.phone}`,
          });
        });
      }
    });
});
