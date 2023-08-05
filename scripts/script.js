let Navbar = document.querySelector('.navbar');
let Fabars = document.querySelector('.fa-bars');
const emailElement = document.getElementById('email');

<<<<<<< HEAD

// Initial visibility state (visible)
let isEmailVisible = true;

Fabars.onclick = () =>{
    Navbar.classList.toggle("active")
};

var swiper = new Swiper(".home-slid", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".team-slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      "0": {
        slidesPerView: 1,
        autoplay:{
            delay:700,
            disableOnInteraction:false,
        },
      },
      "768": {
        slidesPerView: 2,
          
      },
      "1020": {
        slidesPerView: 3,
          
      },
    },
  });
  $(document).ready(function() {
=======
// Initial visibility state (visible)
let isEmailVisible = true;

Fabars.onclick = (event) => {
    event.stopPropagation(); // Prevent the click event from propagating to the document

    Navbar.classList.toggle("active");
    $(".home .content").addClass("hide-content");
};

// Close the navigation when clicking anywhere on the document
document.onclick = () => {
    Navbar.classList.remove("active");
    $(".home .content").removeClass("hide-content");
};


$(document).ready(function() {
>>>>>>> master
    const contentDiv = $('.content');
    const scrollThreshold = 5;

    $(window).on('scroll', function() {
        if ($(this).scrollTop() > scrollThreshold) {
            contentDiv.addClass('hide-content');
        } else {
            contentDiv.removeClass('hide-content');
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
  // Get the element for the icon
  const iconElement = document.querySelector('.fa-send-o');

  // Set an initial state for the toggle
  let isToggled = false;

  // Function to toggle the icon state
  function toggleIcon() {
      // Toggle the state
      isToggled = !isToggled;

      // Add or remove a class to change the icon appearance based on the state
      if (isToggled) {
          iconElement.classList.add('toggled');
          // Add your logic for the toggled state here
      } else {
          iconElement.classList.remove('toggled');
          // Add your logic for the non-toggled state here
      }
  }

  // Toggle the icon state every 2 seconds (adjust the interval as needed)
  setInterval(toggleIcon, 1000);

  // Redirect to the link when clicking on the icon
  iconElement.addEventListener('click', () => {
      window.location.href = 'https://easychair.org/account/signin';
  });
});
<<<<<<< HEAD
// Function to toggle email visibility
function toggleEmail() {
  if (isEmailVisible) {
    emailElement.style.display = 'none'; // Hide the email element
  } else {
    emailElement.style.display = 'block'; // Show the email element
  }
  // Update the visibility state
  isEmailVisible = !isEmailVisible;
}

// Set interval to toggle email every 3 seconds (3000 milliseconds)
setInterval(toggleEmail, 1000);
=======
>>>>>>> master
