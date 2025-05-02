//image slider

const slides = document.querySelectorAll('.slides img');
let slideIndex = 0;
let intervalId = null;

//initialize the slider
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
     if(slides.length > 0) {
      slides[slideIndex].classList.add("displaySlide");
      intervalId = setInterval(nextSlide, 5000);
     }
}

function showSlide(index){
      if(index >= slides.length){
          slideIndex = 0; 
      } else if (index <0){
          slideIndex = slides.length -1;
      }

      slides.forEach(slide => {
          slide.classList.remove("displaySlide");
      });
       slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
      clearInterval(intervalId);  
      slideIndex--;
      showSlide(slideIndex);  
}

function nextSlide() {
      clearInterval(intervalId);
      slideIndex++;
      showSlide(slideIndex);
}

// highlight section when scrolling
document.addEventListener("DOMContentLoaded", function() {
// code is gonna run after the page is loaded

// get all sections with an id
      const sections = document.querySelectorAll("section[id]");
      // add scroll event listener to the window
window.addEventListener("scroll", navHighlighter);
// the function that highlights the section when scrolling
function navHighlighter(){
      let scrollY =window.pageYOffset;
      // ScollY is how far up or down the screen the user has scrolled

      // looop time 
      sections.forEach(current =>{
          // stuff were gonna do for each section

          // the height of the section
          const sectionHeight = current.offsetHeight;   

          // the top of the section
          const sectionTop = current.offsetTop - 50; // 50 is the offset for the top of the page

          // the id of the section
          const sectionId = current.getAttribute("id");

          // if statenet time

          if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
              // add the active class to the nav link that corresponds to the section
              document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.add("active");
          } else {
              // if the section is not in view, remove the active class from the nav link
              document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.remove("active");
          }
      }}

});

// EmailJS initialization and form handling
document.addEventListener("DOMContentLoaded", function() {
    // Initialize EmailJS with your Public Key
    emailjs.init("Eh3ndhHDuFX9gVWo4");
  
    // Get the contact form element
    const contactForm = document.getElementById('contact-form');
  
    // Only add the event listener if the contact form exists on the current page
    if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
      
        // Show loading indicator or disable submit button
        const submitButton = this.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.innerHTML;
        submitButton.disabled = true;
        submitButton.innerHTML = 'Sending...';
      
        // Send the form using EmailJS
        emailjs.sendForm('service_xdjbjj5', 'template_4gnpgpw', this)
          .then(function() {
            // Success message
            alert('Your message has been sent successfully!');
            contactForm.reset();
          
            // Re-enable submit button
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonText;
          }, function(error) {
            // Error message
            console.error('EmailJS error:', error);
            alert('Sorry, there was an error sending your message. Please try again later.');
          
            // Re-enable submit button
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonText;
          });
      });
    }
});
