document.getElementById("leadForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  fetch("YOUR_GOOGLE_APPS_SCRIPT_URL", {
    method: "POST",
    body: data,
  })
    .then(response => response.text())
    .then(msg => {
      document.getElementById("statusMsg").innerText = "Thank you! We'll be in touch.";
      form.reset();
    })
    .catch(error => {
      document.getElementById("statusMsg").innerText = "Oops! Something went wrong.";
    });
});
