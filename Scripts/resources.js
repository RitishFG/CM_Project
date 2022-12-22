data = [
  {
    image:
      "https://www.campaignmonitor.com/wp-content/uploads/2022/04/SMS-banner.png",
    title: "Introducing Campaign Monitor SMS: a New Way to Connect and Convert",
    desc: "Today, audiences expect a lot from the brands they interact with. They want personalized, relevant communications delivered in a format that’s convenient, at a time that suits them.",
  },
  {
    image:
      "https://www.campaignmonitor.com/wp-content/uploads/2022/03/automation-banner.png",
    title: "How to Grow Your Business with Email Marketing Automation",
    desc: "Emails that are personalized, timely and relevant are proven to be more effective.",
  },
  {
    image:
      "https://www.campaignmonitor.com/wp-content/uploads/2019/07/countdown-timer-infographic-thumbnail-1024x544.jpg",
    title: "Countdown Timer Preflight Checklist And Best Practices",
    desc: "Here's everything you need to know about using a countdown timer to create a sense.",
  },
  {
    image:
      "https://www.campaignmonitor.com/wp-content/uploads/2021/11/2021_CM_BAU_content_blog_deliverability-graphic_hub-image-4.jpg",
    title: "Demystifying Deliverability",
    desc: "email deliverability was something that only the really serious email pros focused on or cared about. Most marketers didn’t have the time or capacity to worry about it",
  },
  {
    image:
      "https://www.campaignmonitor.com/wp-content/uploads/2022/04/2022_cm_web_smswebinar_landingpage_pageimage.png",
    title: "Connect and Convert with SMS",
    desc: "Our experts show you how easy it is to add SMS to your marketing mix.",
  },
  {
    image:
      "https://www.campaignmonitor.com/wp-content/uploads/2022/03/automation-banner.png",
    title: "How to Grow Your Business with Email Marketing Automation",
    desc: "Emails that are personalized, timely and relevant are proven to be more effective.",
  },
];
let index = 0;
let mn = document.querySelector("#disp>div:nth-child(1)");

let arr = document.querySelectorAll("#all>div");
arr.forEach(function (el) {
  el.addEventListener("click", checked);
});
display(data);
function checked(event) {
  //   console.log(event.target.innerText);
  if (event.target.innerText == "BLOG") {
    index = 0;
  } else if (event.target.innerText == "GUIDES") {
    index = 1;
  } else if (event.target.innerText == "INFOGRAPHICS") {
    index = 2;
  } else if (event.target.innerText == "COLLECTIONS") {
    index = 3;
  } else if (event.target.innerText == "WEBINARS") {
    index = 4;
  } else if (event.target.innerText == "EVENTS") {
    index = 5;
  } else if (event.target.innerText == "COMPARISON") {
    index = 6;
  } else if (event.target.innerText == "TOOLS") {
    index = 7;
  }
  display(data);
}

function display(data) {
  mn.innerHTML = "";
  //   console.log(data, index);
  let i = document.createElement("img");
  i.src = data[index].image;

  let h = document.createElement("h1");
  h.innerText = data[index].title;

  let p = document.createElement("p");
  p.innerText = data[index].desc;

  mn.append(i, h, p);
}
