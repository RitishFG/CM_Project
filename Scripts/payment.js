let buy_pack = JSON.parse(localStorage.getItem("buy_pack"));
let plan1 = document.querySelector("#plan>h1>span");
let plan2 = document.querySelector("#fl>div>p>span");
plan1.innerText = buy_pack[0].pack;
plan2.innerText = buy_pack[0].pack;
let desc = "";
if (buy_pack[0].pack == "Basic") {
  desc = "All our core features for one low price";
} else if (buy_pack[0].pack == "Unlimited") {
  desc = "Great for frequent email campaigns";
} else {
  desc = "Optimize your strategy for the best results";
}
let de = document.querySelector("#plan>p");
de.innerText = desc;

let amount1 = document.querySelector("#fl>div:nth-child(2)>p");
let amount2 = document.querySelector("#to>h3>span");
amount1.innerText = buy_pack[0].value;
amount2.innerText = buy_pack[0].value;

document.querySelector("form").addEventListener("submit", checkOut);

function checkOut(event) {
  event.preventDefault();
  console.log("in");
  let form = document.querySelector("form");
  let data = {
    number: form.num.value,
    name: form.name.value,
    month: form.expmonth.value,
    year: form.expyear.value,
    password: form.pswd.value,
  };
  let count1 = 0;
  for (let i = 0; i < data.name.length; i++) {
    if (data.name[i] == " ") {
      count1++;
    }
  }
  if (count1 == data.name.length) {
    alert("Name cannot be all spaces");
  } else if (data.name == "") {
    alert("Name cannot be empty");
  } else if (data.number.length != 16) {
    alert("Card Number should be 16 digits");
  } else if (Number(data.month) <= 1) {
    alert("Invalid Month");
  } else if (Number(data.month) > 12) {
    alert("Invalid Month");
  } else if (data.year.length != 4) {
    alert("Invalid Year");
  } else if (Number(data.year) < 2022) {
    alert("Card Expired");
  } else if (Number(data.month) < 10 && Number(data.year) == "2022") {
    alert("Card Expired");
  } else if (data.password.length != 4) {
    alert("Invalid PIN");
  } else {
    window.location.href = "otp.html";
  }
  form.num.value = "";
  form.name.value = "";
  form.expmonth.value = "";
  form.expyear.value = "";
  form.pswd.value = "";
}
