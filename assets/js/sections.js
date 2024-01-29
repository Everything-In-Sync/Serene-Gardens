// Adds the transitions when the reviews section comes into viewport

document.addEventListener("DOMContentLoaded", function() {

    var revOne = document.querySelector('.reviews-one');
    var revTwo = document.querySelector('.reviews-two');
    var revThree = document.querySelector('.reviews-three');
    var observer = new IntersectionObserver(function(entries) {
        if(entries[0].isIntersecting === true) {
            revOne.classList.add('fade-in-view');
            revTwo.classList.add('fade-in-view');
            revThree.classList.add('fade-in-view');
        }
    }, { threshold: [0] });

    observer.observe(revOne);
    observer.observe(revTwo);
    observer.observe(revThree);

});

// Adds the transitions when the individual icon with text section comes into viewport
document.addEventListener("DOMContentLoaded", function() {

    var iconTextOne = document.querySelector('.icon-with-text-one');
    var iconTextTwo = document.querySelector('.icon-with-text-two');
    var iconTextThree = document.querySelector('.icon-with-text-three');
    var iconTextFour = document.querySelector('.icon-with-text-four');
    var observer = new IntersectionObserver(function(entries) {
        if(entries[0].isIntersecting === true) {
            iconTextOne.classList.add('fade-in-view');
            iconTextTwo.classList.add('fade-in-view');
            iconTextThree.classList.add('fade-in-view');
            iconTextFour.classList.add('fade-in-view');
        }
    }, { threshold: [0] });

    observer.observe(iconTextOne);
    observer.observe(iconTextTwo);
    observer.observe(iconTextThree);
    observer.observe(iconTextFour);

});

// Yes future Rob this is redundant but you tried looping through everything under a single class it does not give you the horizontal transition you are looking for

document.addEventListener("DOMContentLoaded", function() {

    var fadeInOne = document.querySelector('.fade-in-one');
    var fadeInTwo = document.querySelector('.fade-in-two');
    var fadeInThree = document.querySelector('.fade-in-three');
    var fadeInFour = document.querySelector('.fade-in-four');
    var fadeInFive = document.querySelector('.fade-in-five');
    var observer = new IntersectionObserver(function(entries) {
        if(entries[0].isIntersecting === true) {
            fadeInOne.classList.add('fade-in-view');
            fadeInTwo.classList.add('fade-in-view');
            fadeInThree.classList.add('fade-in-view');
            fadeInFour.classList.add('fade-in-view');
            fadeInFive.classList.add('fade-in-view');
        }
    }, { threshold: [0] });

    observer.observe(fadeInOne);
    observer.observe(fadeInTwo);
    observer.observe(fadeInThree);
    observer.observe(fadeInFour);
    observer.observe(fadeInFive);

});





//This works but does not differentiate transitions between divs, useful for single column sections not multi

// document.addEventListener("DOMContentLoaded", function() {
//     const fadeInElements = document.querySelectorAll('.fade-in');
  
//     var observer = new IntersectionObserver(function(entries, observer) {
//       entries.forEach((entry, index) => {
//         if(entry.isIntersecting) {
//           entry.target.style.animationDelay = `${index + 1}s`;
//           entry.target.classList.add('fade-in-view');
//           observer.unobserve(entry.target);
//         }
//       });
//     }, { threshold: [0] });
  
//     fadeInElements.forEach(el => observer.observe(el));
//   });
  