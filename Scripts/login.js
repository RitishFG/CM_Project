document.querySelector("form").addEventListener("submit", loginCheck);
let login_data = JSON.parse(localStorage.getItem("login_data")) || [];

function loginCheck(event) {
  event.preventDefault();
  let form = document.querySelector("form");
  console.log(form.check.checked);
  let data = {
    email: form.email.value,
    password: form.password.value,
  };
  if (data.email == "") {
    alert("Kindly Enter Email");
  } else if (data.password == "") {
    alert("Kindly Enter Password");
  } else if (form.check.checked == false) {
    alert("Kindly complete Identity check");
  } else {
    let check = login_data.filter(function (el) {
      return el.email == data.email;
    });
    if (check.length == 0) {
      alert("Invalid Email and Password, Kindly visit Signup Page");
    } else if (check.length == 1 && check[0].password != data.password) {
      alert("Incorrect Password");
    } else if (check.length == 1 && check[0].password == data.password) {
      alert("Login Successful");
      window.location.href = "billing.html";
    }
    form.email.value = "";
    form.password.value = "";
    form.check.checked = false;
    // console.log(check);
  }
}
