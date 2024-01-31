const hamburger = document.querySelector(".hamburger-icon");
const mobileLinks = document.querySelector(".mobile-links");
const mobileMenuExpanded = document.querySelector(".mobile-menu-expanded");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");



hamburger.addEventListener('click', function() {
    if (mobileLinks.style.display === "block") {
        mobileLinks.style.display = "none";
        hamburger.src = ("assets/images/icons/hamburger.webp");
        mobileMenuExpanded.classList.remove("mobile-display-style");
        
    } else {
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

