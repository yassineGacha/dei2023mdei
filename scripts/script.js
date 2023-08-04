let Navbar = document.querySelector('.navbar');
let Fabars = document.querySelector('.fa-bars');
const emailElement = document.getElementById('email');

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
