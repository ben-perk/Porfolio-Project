const scriptURL = 'https://script.google.com/macros/s/AKfycbz7I2FVWAIKHPUnUdE4LAWvV9j3TUuphRoxWgnmvnM3u1lkdaeLGyDTyMfukkUzEznr6Q/exec';

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = $("#contact-form").serializeArray();
    let csv = "";

    formData.forEach(function (item) {
      csv += item.value + ";";
    });

    csv = csv.slice(0, -1) + "\n";

    fetch(scriptURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain'
      },
      body: csv
    })
      .then(response => response.text())
      .then(text => {
        alert("Your message has been sent!");
        form.reset();
      })
      .catch(error => {
        console.error("Error!", error.message);
        alert("There was a problem submitting the form.");
      });
  });
});
