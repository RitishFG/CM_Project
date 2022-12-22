let mn = document.querySelector("#p1");
let data = [
  {
    title: "PIXEL-LEVEL DESIGN",
    desc: "Use our email builder or upload your own templates to match your brand with precision.",
  },
  {
    title: "MOBILE READINESS",
    desc: "Every email you build with our email builder will be responsive for any inbox.",
  },
  {
    title: "OPTIMIZATION & TESTING TOOLS",
    desc: "Improve your transactional emails with our testing tools to drive greater engagement and revenue.",
  },
  {
    title: "ADVANCED PERSONALIZATION",
    desc: "Add a personal touch for proven success and better results.",
  },
  {
    title: "RICH ANALYTICS",
    desc: "Use our in-depth reporting to see how emails are performing and improve your results.",
  },
];
data.forEach(function (el) {
  let d = document.createElement("div");
  let h = document.createElement("h3");
  h.innerText = el.title;

  let p = document.createElement("p");
  p.innerText = el.desc;

  d.append(h, p);
  mn.append(d);
});
