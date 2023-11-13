let form = document.querySelector(".login-form");
let usernameInp = document.querySelector(".username-inp");
let passwordInp = document.querySelector(".password-inp");

let usersArr;
if (JSON.parse(localStorage.getItem("users"))) {
  usersArr = JSON.parse(localStorage.getItem("users"));
} else {
  usersArr = [];
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  axios.get("http://localhost:3000/users").then((res) => {
    let data = res.data;
    console.log(data);
    data.forEach((user) => {
      if (
        user.username == usernameInp.value &&
        user.password == passwordInp.value
      ) {
        let obj = {};
        obj.isLogged = true;
        obj.userId = user.id;
        usersArr.push(obj);
        localStorage.setItem("users", JSON.stringify(usersArr));
        document.location.href = "index.html";
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Incorrect username or password.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  });
});
