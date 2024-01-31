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


document.addEventListener("DOMContentLoaded", function() {

    var fadeInOne = document.querySelector('.fade-in-one');
    var fadeInTwo = document.querySelector('.fade-in-two');
    var fadeInThree = document.querySelector('.fade-in-three');
    var observer = new IntersectionObserver(function(entries) {
        if(entries[0].isIntersecting === true) {
            fadeInOne.classList.add('fade-in-view');
            fadeInTwo.classList.add('fade-in-view');
            fadeInThree.classList.add('fade-in-view');
        }
    }, { threshold: [0] });

    observer.observe(fadeInOne);
    observer.observe(fadeInTwo);
    observer.observe(fadeInThree);

});


