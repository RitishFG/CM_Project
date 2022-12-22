document.querySelector("form").addEventListener("submit", validate);
function validate(event) {
  event.preventDefault();
  let val = document.querySelector("#ps").value;
  //   console.log(val);
  if (val === "1234") {
    alert("Payment Successful");
    window.location.href = "billing.html";
  } else {
    alert("Invalid OTP");
    document.querySelector("#ps").value = "";
  }
}
