console.log("This is my script");

const emailForm = document.getElementById("emailForm");
const submitBtn = document.getElementById("submitBtn");
const resultCont = document.getElementById("resultCont");

submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  console.log("Clicked!");
  resultCont.innerHTML = `<img src="img/loading.svg" alt="Loading...">`;
  const key = "ema_live_BfQA2ddTOP5kcATovqOFqQB5X6fx6J6XaNq4dpZQ";
  const email = document.getElementById("username").value;
  const url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
  try {
    const res = await fetch(url);
    const result = await res.json();
    let str = ``;
    str += `<div><strong>Email Address:</strong> ${email}</div>`;
    str += `<div><strong>Username:</strong> ${result.user}</div>`;
    str += `<div><strong>Domain:</strong> ${result.domain}</div>`;
    str += `<div><strong>Email Sending Status:</strong> ${
      result.smtp_check ? "Able to send" : "Unable to send"
    }</div>`;
    str += `<div><strong>Mail Server Found:</strong> ${
      result.mx_found ? "Yes" : "No"
    }</div>`;
    str += `<div><strong>Role Email:</strong> ${
      result.role ? "Yes" : "No"
    }</div>`;
    str += `<div><strong>Disposable Email:</strong> ${
      result.disposable ? "Yes" : "No"
    }</div>`;
    str += `<div><strong>Validation Score:</strong> ${result.score}</div>`;
    str += `<div><strong>Email Delivery Status:</strong> ${result.state}</div>`;
    str += `<div><strong>Reason for Undeliverable:</strong> ${result.reason}</div>`;
    str += `<div><strong>Free Email Service:</strong> ${
      result.free ? "Yes" : "No"
    }</div>`;
    str += `<div><strong>Email Format Valid:</strong> ${
      result.format_valid ? "Yes" : "No"
    }</div>`;
    str += `<div><strong>Catch-All Email:</strong> ${
      result.catch_all === null
        ? "Not determined"
        : result.catch_all
        ? "Yes"
        : "No"
    }</div>`;
    resultCont.innerHTML = str;
  } catch (error) {
    resultCont.innerHTML = `<div>Error: ${error.message}</div>`;
  }
});
