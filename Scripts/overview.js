let data = [
  {
    image:
      "https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/agencies/platform/template-mgmt@2x.png?ver=298",
    title: "Template management made easy",
    desc: "Craft your own templates or customize one from our vast library. Lock portions of an email while your team and clients adjust the rest as needed.",
  },
  {
    image:
      "https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/agencies/platform/happy-clients@2x.png?ver=298",
    title: "Happy clients = more renewals",
    desc: "An intuitive email builder, easy customer journey setup, and comprehensive analytics help you attract new clients and retain accounts.",
  },
  {
    image:
      "https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/agencies/platform/user-permissions@2x.png?ver=298",
    title: "Granular user permissions",
    desc: "Grant team members, clients, and more different view and edit permissions for campaign setup, email development, analytics, and then some.",
  },
  {
    image:
      "https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/agencies/platform/billing@2x.png?ver=298",
    title: "Built-in billing",
    desc: "Our convenient billing system lets you easily set different rates for different clients and charge them in their local currency.",
  },
];
document.querySelector("#left").addEventListener("click", left);
document.querySelector("#right").addEventListener("click", right);

let mn1 = document.querySelector("#s1");
let mn2 = document.querySelector("#s2");

let selection = 1;
display(data);
function left() {
  //   console.log("left");
  selection--;
  if (selection == 0) {
    selection = 4;
  }
  //   console.log(selection);
  let res = data.filter(function (el, i) {
    return i == selection - 1;
  });
  //   console.log(res);
  display(res);
}
function right() {
  //   console.log("right");
  selection++;
  if (selection == 5) {
    selection = 1;
  }
  let res = data.filter(function (el, i) {
    return i == selection - 1;
  });
  //   console.log(res);
  display(res);
}

// console.log(mn1, mn2);
function display(data) {
  mn1.innerHTML = "";
  mn2.innerHTML = "";
  let i = document.createElement("img");
  i.src = data[0].image;

  let h = document.createElement("h3");
  h.innerText = data[0].title;

  let p = document.createElement("p");
  p.innerText = data[0].desc;

  mn1.append(i);
  mn2.append(h, p);
}
