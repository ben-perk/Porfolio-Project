const slides = document.querySelectorAll('.my-slider img');
let slideIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('displaySlide');
    if (i === index) slide.classList.add('displaySlide');
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

document.querySelector('.my-next').addEventListener('click', nextSlide);
document.querySelector('.my-prev').addEventListener('click', prevSlide);

showSlide(slideIndex);


var scrollSPy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar',
  });


//Email form data


// function clearForm(){
//     var formData = $("#contact-form").serializeArray();
//     let csv = "";

//     formData.forEach(function(item){
//         csv += item.value + ";";  // Only sending values
//     });

//     // Remove last semicolon and add newline
//     csv = csv.slice(0, -1) + "\n";

//     // Replace with your Google Web App URL
//     const scriptURL = 'https://script.google.com/macros/s/AKfycbz7I2FVWAIKHPUnUdE4LAWvV9j3TUuphRoxWgnmvnM3u1lkdaeLGyDTyMfukkUzEznr6Q/exec';

//     fetch(scriptURL, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'text/plain'
//         },
//         body: csv
//     })
//     .then(response => {
//         if (response.ok) {
//             alert("Your message has been sent and saved!");
//             document.getElementById("contact-form").reset();
//         } else {
//             alert("Failed to send message.");
//         }
//     });
// };






// highlight section when scrolling
// document.addEventListener("DOMContentLoaded", function() {
// code is gonna run after the page is loaded

// get all sections with an id
//       const sections = document.querySelectorAll("section[id]");
//       // add scroll event listener to the window
// window.addEventListener("scroll", navHighlighter);
// // the function that highlights the section when scrolling
// function navHighlighter(){
//       let scrollY =window.pageYOffset;
//       // ScollY is how far up or down the screen the user has scrolled

//       // looop time 
//       sections.forEach(current =>{
//           // stuff were gonna do for each section

//           // the height of the section
//           const sectionHeight = current.offsetHeight;   

//           // the top of the section
//           const sectionTop = current.offsetTop - 50; // 50 is the offset for the top of the page

//           // the id of the section
//           const sectionId = current.getAttribute("id");

//           // if statenet time

//           if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//               // add the active class to the nav link that corresponds to the section
//               document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.add("active");
//           } else {
//               // if the section is not in view, remove the active class from the nav link
//               document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.remove("active");
//           }
//       }}

// });

// EmailJS initialization and form handling
// document.addEventListener("DOMContentLoaded", function() {
//     // Initialize EmailJS with your Public Key
//     emailjs.init("Eh3ndhHDuFX9gVWo4");
  
//     // Get the contact form element
//     const contactForm = document.getElementById('contact-form');
  
//     // Only add the event listener if the contact form exists on the current page
//     if (contactForm) {
//       contactForm.addEventListener('submit', function(event) {
//         event.preventDefault();
      
//         // Show loading indicator or disable submit button
//         const submitButton = this.querySelector('button[type="submit"]');
//         const originalButtonText = submitButton.innerHTML;
//         submitButton.disabled = true;
//         submitButton.innerHTML = 'Sending...';
      
//         // Send the form using EmailJS
//         emailjs.sendForm('service_xdjbjj5', 'template_4gnpgpw', this)
//           .then(function() {
//             // Success message
//             alert('Your message has been sent successfully!');
//             contactForm.reset();
          
//             // Re-enable submit button
//             submitButton.disabled = false;
//             submitButton.innerHTML = originalButtonText;
//           }, function(error) {
//             // Error message
//             console.error('EmailJS error:', error);
//             alert('Sorry, there was an error sending your message. Please try again later.');
          
//             // Re-enable submit button
//             submitButton.disabled = false;
//             submitButton.innerHTML = originalButtonText;
//           });
//       });
//     }
// });



// window.addEventListener("scroll", () => {
//     // 🟢 Select all main sections and nav links
//     const sections = document.querySelectorAll("section");
//     const navLinks = document.querySelectorAll("nav a");
  
//     let current = "";
  
//     // 🟢 Loop through sections to find the one currently in view
//     sections.forEach(section => {
//       const sectionTop = section.offsetTop - 60; // Adjust for navbar height
//       if (pageYOffset >= sectionTop) {
//         current = section.getAttribute("id"); // Store id of current section
//       }
//     });
  
//     // 🟢 Update nav link styling
//     navLinks.forEach(link => {
//       link.classList.remove("active"); // Remove 'active' class from all
//       if (link.getAttribute("href").includes(current)) {
//         link.classList.add("active"); // Highlight current section link
//       }
//     });
//   });