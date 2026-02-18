const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const submitButton = document.querySelector(".btn-submit");
    const originalButtonText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      subject: document.getElementById("subject").value,
      project_type: document.getElementById("projectType").value,
      budget: document.getElementById("budget").value,
      message: document.getElementById("message").value,
      contact_method: document.getElementById("contact-method").checked ? "Email" : "No",
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
      
      // Show success message
      alert("Message sent successfully! I'll get back to you soon.");
      form.reset();
      
      // Reset button
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
    } catch (error) {
      alert("Failed to send: " + error.message);
      
      // Reset button
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
    }
  });
}