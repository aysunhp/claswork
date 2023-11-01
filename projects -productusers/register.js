let form = document.querySelector("#register-form");
let input = document.querySelector(".register-input");
let password = document.querySelector(".register-pass");
let email = document.querySelector(".register-email");
let submit = document.querySelector(".register-submit");

let arr;
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let newUser = {
    name: input.value,
    password: password.value,
    email: email.value,
  };

  axios
    .post("http://localhost:3000/users", {
      newUser,
    })
    .then(function (res) {
      console.log(res.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});
