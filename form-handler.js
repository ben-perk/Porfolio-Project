document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
  
    if (!form) {
      console.error("Form with ID 'contact-form' not found.");
      return;
    }
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const formData = new FormData(form);
      let csv = "";
  
      for (const [key, value] of formData.entries()) {
        csv += `"${value}";`; // wrap values to handle commas
      }
  
      csv = csv.slice(0, -1) + "\n"; // Remove trailing semicolon and add newline
  
      fetch("https://script.google.com/macros/s/AKfycbz7I2FVWAIKHPUnUdE4LAWvV9j3TUuphRoxWgnmvnM3u1lkdaeLGyDTyMfukkUzEznr6Q/exec", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
        body: csv,
      })
        .then((response) => response.text())
        .then((result) => {
          alert("Form submitted successfully!");
          form.reset();
        })
        .catch((error) => {
          console.error("Submission error:", error);
          alert("There was a problem submitting the form.");
        });
    });
  });
  