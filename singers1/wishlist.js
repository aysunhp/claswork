let singerTable = document.querySelector(".singer-table");

let arr = JSON.parse(localStorage.getItem("fav"));
console.log(arr);

fetch("http://localhost:3000/singers")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      arr.forEach((id) => {
        if (element.id == id) {
          singerTable.innerHTML += ` 
         <tr>
         <td scope="row">${element.id}</td>
            <td scope="row">${element.name}</td>
            <td><img src="${element.image}" alt="" style="width:60px; height:60px"></td>
            <td>${element.age}</td>
            <td>${element.genre}</td>
            <th scope="row"><button name="${element.id}" class="btn btn-outline-danger delete"><i
            class="fa-solid fa-trash"></i></button></th>
        </tr>`;
        }
        let deleteBtns = document.querySelectorAll(".delete");
        deleteBtns.forEach((deleteBtn) => {
          deleteBtn.addEventListener("click", function () {
            this.parentElement.parentElement.remove();

            let index = arr.indexOf(this.name);
            console.log(index);
            arr.splice(index, 1);
            localStorage.setItem("fav", JSON.stringify(arr));
          });
        });
      });
    });
  });
