const hamburger = document.querySelector(".hamburger-icon");
const mobileLinks = document.querySelector(".mobile-links");
const mobileMenuExpanded = document.querySelector(".mobile-menu-expanded");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");



hamburger.addEventListener('click', function() {
    // Normal Display
    if (mobileLinks.style.display === "block") {
        mobileLinks.style.display = "none";
        hamburger.src = ("assets/images/icons/hamburger.webp");
        mobileMenuExpanded.classList.remove("mobile-display-style");
        
    } else {
        // Displays when the hamburger is clicked
        mobileLinks.style.display = "block";
        hamburger.src = ("assets/images/icons/close.webp");
        mobileMenuExpanded.style.backgroundColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--primary-color');
        mobileMenuExpanded.classList.add("mobile-display-style");
        mobileNavLinks.forEach(link => {
            link.classList.add("mobile-menu-link-style"); 
          });

    }
});


// // Handle dropdown for mobile users
// document.querySelector('.services-link').addEventListener('click', function(event) {
//     // Check if it's a mobile device by touch capability as an example (not a foolproof check)
//     if ('ontouchstart' in document.documentElement) {
//       event.preventDefault(); // Prevent navigation
//       const dropdownContent = this.nextElementSibling;
//       dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
//     }
//   });
  
// document.addEventListener('DOMContentLoaded', function() {
//     // Toggle for dropdown in mobile menu
//     document.querySelector('.services-link').addEventListener('click', function(event) {
//       const dropdownContent = this.nextElementSibling;
      
//       // Check if dropdown is already displayed
//       if (dropdownContent.style.display === 'block') {
//         dropdownContent.style.display = 'none';
//       } else {
//         dropdownContent.style.display = 'block';
//       }
  
//       // Prevent the default anchor action if dropdown is used
//       event.preventDefault();
//     });
  
//     // Close the dropdown if user clicks outside of it
//     window.addEventListener('click', function(event) {
//       if (!event.target.matches('.services-link')) {
//         var dropdowns = document.getElementsByClassName('dropdown-content');
//         for (var i = 0; i < dropdowns.length; i++) {
//           var openDropdown = dropdowns[i];
//           if (openDropdown.style.display === 'block') {
//             openDropdown.style.display = 'none';
//           }
//         }
//       }
//     });
  
//     // ... any other DOMContentLoaded code ...
//   });
