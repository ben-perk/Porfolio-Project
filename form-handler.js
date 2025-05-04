document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const formData = {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        contact_method: form.contact_method.value,
        message: form.message.value,
      };
  
      fetch("https://script.google.com/macros/s/AKfycbz7I2FVWAIKHPUnUdE4LAWvV9j3TUuphRoxWgnmvnM3u1lkdaeLGyDTyMfukkUzEznr6Q/exec", {
        method: "POST",
        mode: "no-cors", // prevents CORS errors but hides response; works for simple data like this
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      // Optional: reset form and show message
      form.reset();
      alert("Thank you! Your message has been sent.");
    });
  });
  