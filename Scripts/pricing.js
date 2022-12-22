let items = [
  {
    first: "Multiple users",
    second: "Unlimited",
    third: "Unlimited",
    fourth: "Unlimited",
  },
  { first: "User Permissions", second: "y", third: "y", fourth: "y" },
  { first: "Two factor Authentication", second: "y", third: "y", fourth: "y" },
];
let mn = document.querySelector("#acc-settings");
items.forEach(function (el) {
  let d = document.createElement("div");
  let p1 = document.createElement("p");
  p1.innerText = el.first;
  let p2 = document.createElement("p");
  if (el.second == "y") {
    let i = document.createElement("i");
    i.className = "fa-solid fa-circle-check";
    p2.append(i);
  } else {
    p2.innerText = el.second;
  }
  let p3 = document.createElement("p");
  if (el.third == "y") {
    let i = document.createElement("i");
    i.className = "fa-solid fa-circle-check";
    p3.append(i);
  } else {
    p3.innerText = el.third;
  }
  let p4 = document.createElement("p");
  if (el.fourth == "y") {
    let i = document.createElement("i");
    i.className = "fa-solid fa-circle-check";
    p4.append(i);
  } else {
    p4.innerText = el.fourth;
  }
  let h = document.createElement("hr");
  d.append(p1, p2, p3, p4);
  mn.append(d, h);
});

let items2 = [
  {
    first: "Email support",
    second: "y",
    third: "Priority",
    fourth: "Priority",
  },
  { first: "Link review", second: "y", third: "y", fourth: "y" },
  { first: "Design & spam testing", second: "", third: "y", fourth: "y" },
  { first: "Phone support", second: "", third: "", fourth: "y" },
  { first: "Delivarability support", second: "y", third: "y", fourth: "y" },
  { first: "Help Center", second: "y", third: "y", fourth: "y" },
  { first: "Training Videos", second: "y", third: "y", fourth: "y" },
  { first: "Email Academy", second: "y", third: "y", fourth: "y" },
];
let mn2 = document.querySelector("#hns");
items2.forEach(function (el) {
  let d = document.createElement("div");
  let p1 = document.createElement("p");
  p1.innerText = el.first;
  let p2 = document.createElement("p");
  if (el.second == "y") {
    // console.log(el);
    let i = document.createElement("i");
    i.className = "fa-solid fa-circle-check";
    p2.append(i);
  } else {
    p2.innerText = el.second;
  }
  let p3 = document.createElement("p");
  if (el.third == "y") {
    let i = document.createElement("i");
    i.className = "fa-solid fa-circle-check";
    p3.append(i);
  } else {
    p3.innerText = el.third;
  }
  let p4 = document.createElement("p");
  if (el.fourth == "y") {
    let i = document.createElement("i");
    i.className = "fa-solid fa-circle-check";
    p4.append(i);
  } else {
    p4.innerText = el.fourth;
  }
  let h = document.createElement("hr");
  d.append(p1, p2, p3, p4);
  mn2.append(d, h);
});

let mn3 = document.querySelector("#faq");
let fa = [
  {
    q: "Do you offer a free trial?",
    a: "It’s free to create an account and send a campaign to five subscribers. Send to more than five people when you choose a paid plan.",
  },
  {
    q: "Can I change my plan?",
    a: "Absolutely. You can switch between our monthly basic, monthly unlimited, or pay-as-you-go plans at any point without penalty.",
  },
  {
    q: "Is there an annual plan?",
    a: "While most of our customers sign up for monthly plans, we do offer an annual plan. For more details, please contact our sales team.",
  },
  {
    q: "What if I go over my plan’s limits?",
    a: "If you send above your limits or your subscriber list grows, we’ll notify you and you'll have an option to upgrade or pay for the additional emails.",
  },
  {
    q: "What currencies are accepted?",
    a: "The prices above are in USD. However, we can work with you to support additional currencies such as CAD, EUR, GBP, AUD, and NZD.",
  },
  {
    q: "Is there a discount for nonprofits?",
    a: "Yes there is! If your company is a nonprofit, we offer a 15% discount. Please contact our sales team to find out more.",
  },
  {
    q: "What payment types are accepted?",
    a: "We accept most credit cards and, for high-volume senders and larger organizations, we can support invoicing as well.",
  },
  {
    q: "What’s the difference between basic and priority support?",
    a: "With priority support, your support requests go to the top of the queue so you’ll get help faster.",
  },
  {
    q: "Can I integrate with other software platforms?",
    a: "We have 250+ integrations you can use to connect Campaign Monitor to your other software tools like Salesforce, Wordpress, or Google Analytics. Browse all integrations here.",
  },
];
fa.forEach(function (el) {
  let d = document.createElement("div");

  let p1 = document.createElement("p");
  p1.innerText = el.q;
  p1.style.fontSize = "25px";

  let p2 = document.createElement("p");
  p2.innerText = el.a;
  p2.style.fontSize = "15px";

  d.append(p1, p2);
  mn3.append(d);
});
