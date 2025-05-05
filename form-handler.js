const form = document.getElementById("contact-form");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    contact_method: document.querySelector("input[name='contact_method']:checked").value,
    message: document.getElementById("message").value,
  };

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbz7I2FVWAIKHPUnUdE4LAWvV9j3TUuphRoxWgnmvnM3u1lkdaeLGyDTyMfukkUzEznr6Q/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    alert("Message sent successfully!");
    form.reset();
  } catch (error) {
    alert("Failed to send: " + error.message);
  }
});
