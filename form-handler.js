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
    const response = await fetch("YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.result === "success") {
      alert("Message sent successfully!");
      form.reset();
    } else {
      alert("Server error: " + (result.error || "Unknown issue"));
    }
  } catch (error) {
    alert("Submission failed: " + error.message);
  }
});
