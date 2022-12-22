let items = [
  {
    first: "Number of emails across campaigns and automated emails",
    second: "2,500 per month",
    third: "Unlimited",
    four: "Unlimited",
  },
  {
    first: "Email automation",
    second: "Basic",
    third: "Advanced",
    four: "Advanced",
  },
  {
    first: "Transactional emails",
    second: "",
    third: "5,000 per month",
    four: "5,000 per month",
  },
  {
    first: "Inbox previews",
    second: "",
    third: "Unlimited",
    four: "Unlimited",
  },
  {
    first: "Spam testing",
    second: "",
    third: "Unlimited",
    four: "Unlimited",
  },
];
let mn = document.querySelector("#repeat");
items.forEach(function (el) {
  let d = document.createElement("div");
  let p1 = document.createElement("p");
  p1.innerText = el.first;
  p1.style.color = "Black";
  let p2 = document.createElement("p");
  p2.innerText = el.second;
  let p3 = document.createElement("p");
  p3.innerText = el.third;
  let p4 = document.createElement("p");
  p4.innerText = el.four;
  let h = document.createElement("hr");
  d.append(p1, p2, p3, p4);
  mn.append(d, h);
});

let items2 = [
  {
    first: "Pixel-perfect email design tools ",
    second: "y",
    third: "y",
    four: "y",
  },
  {
    first: "Email insights and reporting ",
    second: "y",
    third: "y",
    four: "y",
  },
  {
    first: "A/B testing tools ",
    second: "y",
    third: "y",
    four: "y",
  },
  {
    first: "Pixel-perfect email design tools ",
    second: "y",
    third: "y",
    four: "y",
  },
  {
    first: "Free image gallery ",
    second: "y",
    third: "y",
    four: "y",
  },
  {
    first: "Countdown timer",
    second: "n",
    third: "y",
    four: "y",
  },
  {
    first: "Timezone sending ",
    second: "n",
    third: "y",
    four: "y",
  },
  {
    first: "Phone customer supprt",
    second: "n",
    third: "n",
    four: "y",
  },
  {
    first: "Advanced link tracking",
    second: "n",
    third: "n",
    four: "y",
  },
  {
    first: "Send time optimization",
    second: "n",
    third: "n",
    four: "y",
  },
  {
    first: "Template management for teams",
    second: "n",
    third: "n",
    four: "y",
  },
];
items2.forEach(function (el) {
  let d = document.createElement("div");
  let p1 = document.createElement("p");
  p1.innerText = el.first;
  p1.style.color = "Black";
  let p2 = document.createElement("p");
  if (el.second == "y") {
    let i = document.createElement("i");
    i.className = "fa-solid fa-circle-check";
    p2.append(i);
  }

  let p3 = document.createElement("p");
  if (el.third == "y") {
    let i = document.createElement("i");
    i.className = "fa-solid fa-circle-check";
    p3.append(i);
  }
  let p4 = document.createElement("p");
  if (el.four == "y") {
    let i = document.createElement("i");
    i.className = "fa-solid fa-circle-check";
    p4.append(i);
  }
  let h = document.createElement("hr");
  d.append(p1, p2, p3, p4);
  mn.append(d, h);
});

let a = document.querySelectorAll(".card>button>a");
a.forEach(function (el) {
  el.addEventListener("click", buyPlan);
});

let buy_pack = [];

function buyPlan(event) {
  event.preventDefault();
  let val = event.target.getAttribute("value");
  if (val == "one") {
    let data = {
      pack: "Basic",
      value: "$9.00",
    };
    buy_pack.push(data);
  } else if (val == "two") {
    let data = {
      pack: "Unlimited",
      value: "$29.00",
    };
    buy_pack.push(data);
  } else if (val == "three") {
    let data = {
      pack: "Premium",
      value: "$149.00",
    };
    buy_pack.push(data);
  }
  localStorage.setItem("buy_pack", JSON.stringify(buy_pack));
  window.location.href = "payment.html";
}
