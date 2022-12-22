let items = [
  {
    image:
      "https://integrationstore-b0c3f53658fe7a75.microservice.createsend.com/files/4D6FCE7D-9487-48F5-9192-22594E70A79C/google-analytics-rectangle.svg",
    title: "Google Analytics",
    desc: "Set goals, run A/B tests, track conversions and monitor the success of your integrated email campaign, using our automatic link tagging for Google Analytics.",
  },
  {
    image:
      "https://integrationstore-b0c3f53658fe7a75.microservice.createsend.com/files/01BEBE7E-9486-4F22-A693-8389275A692B/wordpress-rectangle.svg?ver=1",
    title: "Wordpress",
    desc: "Create signup forms for your Campaign Monitor mailing lists.",
  },
  {
    image:
      "https://integrationstore-b0c3f53658fe7a75.microservice.createsend.com/files/FCD10461-1CBE-4AE8-9C2D-1ED8D4C74C95/salesforce-rectangle.svg",
    title: "Salesforce",
    desc: "Create and send email campaigns to your Salesforce contacts.",
  },
  {
    image:
      "https://integrationstore-b0c3f53658fe7a75.microservice.createsend.com/files/5C2E7DBA-8713-4CAD-9F3C-D9FFEDA5E744/shopify-rectangle.svg?ver=1",
    title: "Shopify",
    desc: "DSend personalized email campaigns to Shopify customer data segments.",
  },
  {
    image:
      "https://integrationstore-b0c3f53658fe7a75.microservice.createsend.com/files/0818B337-9795-4466-9E65-ADE50E863E8A/woo-commerce-rectangle.svg?ver=1",
    title: "WooCommerce",
    desc: "Making it easy for customers to subscribe to your Campaign Monitor mailing lists using elegant sign up forms.",
  },
  {
    image:
      "https://integrationstore-b0c3f53658fe7a75.microservice.createsend.com/files/2E7594B6-6261-4E03-818C-1EBBC5318E93/Zapier-logo-image.png",
    title: "Zapier",
    desc: "Zapier allows you to instantly connect Campaign Monitor with 3,000+ apps to automate your work and find productivity super powers.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScvjEa4Soe2RFVmrP70a7Yr-kgeBJ0_DIlFA&usqp=CAU",
    title: "HubSpot",
    desc: "Sync Campaign Monitor with HubSpot data",
  },
];
let mn = document.querySelector("#cards");
items.forEach(function (el) {
  let d = document.createElement("div");

  let i = document.createElement("img");
  i.src = el.image;

  let h = document.createElement("h4");
  h.innerText = el.title;

  let p = document.createElement("p");
  p.innerText = el.desc;
  d.append(i, h, p);
  mn.append(d);
});
