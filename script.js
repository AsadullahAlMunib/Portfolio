AOS.init({
    duration: 500
});

//Theme Toggle JS 
function themeToggle(themeToggleButton) {
    const themeElement = document.documentElement;
    const themeAttribute = themeElement.getAttribute("data-bs-theme");
    const themeIcon = themeToggleButton.querySelector("i").classList;
    if (themeAttribute === 'light') {
        themeElement.setAttribute("data-bs-theme", 'dark');
        themeIcon.remove('bi-moon-stars-fill');
        themeIcon.add('bi-sun-fill');
    } else {
        themeElement.setAttribute("data-bs-theme", 'light');
        themeIcon.remove('bi-sun-fill');
        themeIcon.add('bi-moon-stars-fill');
    }
}

//Back To Top JS 
const backToTop = document.getElementById("backToTop");
window.onscroll = function() {
    backToTop.style.opacity = (window.scrollY>window.innerHeight*0.4)?'1':'0';
}
backToTop.onmouseover = function() {
    backToTop.classList.remove('bi-arrow-up-circle');
    backToTop.classList.add('bi-arrow-up-circle-fill');
    backToTop.style.transform='scale(1.3)';
}
backToTop.onmouseout = function() {
    backToTop.classList.remove('bi-arrow-up-circle-fill');
    backToTop.classList.add('bi-arrow-up-circle');
    backToTop.style.transform='scale(1)';
}
backToTop.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    backToTop.style.transform='scale(1.15)';
}

//Hero Section Height 
const navbarHeight = document.querySelector('.navbar').offsetHeight;
document.querySelector('.hero-section').style.height = `calc(100vh - ${navbarHeight}px)`;


//Projects Filter 
function filterProjects(category) {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        const match = card.getAttribute('data-category') === category || category === 'all';
        card.getAttribute('data-category') === category ? card.removeAttribute('data-aos') : card.setAttribute('data-aos', 'zoom-in-down');
        card.style.display = match ? 'block' : 'none';
    });
}

// Bootstrap's JavaScript requires Popper.js
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap tooltips if needed
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});
