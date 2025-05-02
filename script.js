//image slider

const slides = document.querySelectorAll('.slides img');
let slideIndex = 0;
let intervalId =null;

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
        slideIndex= slides.length -1;
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
        let scrollY = window.pageYOffset;
        // ScollY is how far up or down the screen the user has scrolled

        // looop time 
        sections.forEach(current => {
            // stuff were gonna do for each section

            // the height of the section
            const sectionHeight = current.offsetHeight;   

            // the top of the section
            const sectionTop = current.offsetTop - 50; // 50 is the offset for the top of the page

            // the id of the section
            const sectionId = current.getAttribute("id");

            // if statenet time
            try {
                // Find the corresponding navigation link - FIXED: changed .nav-menu to .navbar-nav
                const navLink = document.querySelector(".navbar-nav a[href*='" + sectionId + "']");
                
                if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight && navLink){
                    // add the active class to the nav link that corresponds to the section
                    navLink.classList.add("active");
                } else if(navLink) {
                    // if the section is not in view, remove the active class from the nav link
                    navLink.classList.remove("active");
                }
            } catch(e) {
                // Just in case something goes wrong, we don't want to break the page
                console.error("Error updating navigation highlight:", e);
            }
        });
    }
    
    // Run once on page load to set initial state
    navHighlighter();
});