document.querySelector("form").addEventListener("submit", addUser);
let login_data = JSON.parse(localStorage.getItem("login_data")) || [];
function addUser(event) {
  event.preventDefault();
  let form = document.querySelector("form");
  let data = {
    name: form.name.value,
    cname: form.cname.value,
    email: form.email.value,
    password: form.password.value,
  };
  let pcount = data.password.length;
  let count = 0;
  for (let i = 0; i < data.name.length; i++) {
    if (data.name[i] == " ") {
      count++;
    }
  }
  //   console.log(count);
  if (data.name == "") {
    alert("Please Enter Name");
  } else if (count == data.name.length) {
    alert("Name cannot be empty");
  } else if (data.cname == "") {
    alert("Please enter your Company Name");
  } else if (data.email == "") {
    alert("Please enter your Email");
  } else if (pcount == "") {
    alert("Please Enter Paswword");
  } else if (pcount < 8) {
    alert("Length of Password should be atleast 8 characters");
  } else {
    console.log(data);
    let flag = 0;
    for (let i = 0; i < login_data.length; i++) {
      if (login_data[i].email == data.email) {
        flag = 1;
        break;
      }
    }
    if (flag == 1) {
      alert("Email Already Exists");
    } else {
      login_data.push(data);
      localStorage.setItem("login_data", JSON.stringify(login_data));
      alert("Sign Up Successfull");
      window.location.href = "login.html";
    }

    form.name.value = "";
    form.cname.value = "";
    form.email.value = "";
    form.password.value = "";
  }
}
