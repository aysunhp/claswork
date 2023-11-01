let form = document.querySelector("#login-form");
let input = document.querySelector(".login-input");
let email = document.querySelector(".login-email");
let submit = document.querySelector(".login-submit");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let logedUser = {
    name: input.value,
    password: password.value,
    email: email.value,
  };

  axios
    .get("http://localhost:3000/users")
    .then(function (res) {
      console.log(res.data);

      if (data.name == logedUser.name && data.password == logedUser.password) {
        let arr = localStorage.setItem("users");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
});
