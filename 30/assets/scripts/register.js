let form = document.querySelector(".register-form");
let emailInp = document.querySelector(".email-inp");
let usernameInp = document.querySelector(".username-inp");
let passwordInp = document.querySelector(".password-inp");
let balanceInp = document.querySelector(".balance-inp");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  axios.get("http://localhost:3000/users").then((res) => {
    let users = res.data;
    let regex = /[A-Z]/;
    let passwordValue = passwordInp.value;
    console.log(passwordInp.value);
    let duplicateUserName = users.find((x) => x.username == usernameInp.value);
    if (duplicateUserName) {
      Swal.fire({
        position: "bottom-end",
        icon: "error",
        title: "Usename alredy exists!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      if (regex.test(passwordValue)) {
        axios.post("http://localhost:3000/users", {
          username: usernameInp.value,
          email: emailInp.value,
          password: passwordInp.value,
          balance: balanceInp.value,
          order: [],
        });
        Swal.fire({
          position: "bottom-end",
          icon: "success",
          title: "Logged in",
          showConfirmButton: false,
          timer: 1500,
        });
        document.location.href = "login.html";
      } else {
        Swal.fire({
          position: "bottom-end",
          icon: "error",
          title: "Password must contain upper letter !",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  });
});
