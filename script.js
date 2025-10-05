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

// Navbar Auto Close on Mobile - Additional Code
function initializeNavbarMobile() {
    const navbarCollapse = document.getElementById('navbarSupportedContent');
    const navLinks = document.querySelectorAll('.nav-link');
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    
    // Function to close navbar on mobile
    function closeNavbar() {
        if (window.innerWidth < 768 && navbarCollapse.classList.contains('show')) {
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse, {toggle: false});
            bsCollapse.hide();
        }
    }
    
    // Add click event to nav links for mobile close
    navLinks.forEach(link => {
        // Skip dropdown toggles - they should only open/close dropdown
        if (link.classList.contains('dropdown-toggle')) {
            return;
        }
        
        const originalOnClick = link.onclick;
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href')?.startsWith('#')) {
                closeNavbar();
            }
            if (originalOnClick) originalOnClick.call(this, e);
        });
    });
    
    // Add click event to dropdown items for mobile close
    dropdownItems.forEach(item => {
        const originalOnClick = item.onclick;
        item.addEventListener('click', function(e) {
            closeNavbar();
            if (originalOnClick) originalOnClick.call(this, e);
        });
    });
    
    // Prevent dropdown toggle from closing navbar
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            // Only toggle dropdown, don't close navbar
            e.stopPropagation();
        });
    });
}

// Smooth scroll with navbar offset - Additional Code
function setupSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    const dropdownItems = document.querySelectorAll('.dropdown-item[href^="#"]');
    
    function smoothScrollTo(targetId) {
        // Handle home link (scroll to top)
        if (targetId === '#' || targetId === '#home') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight - 10;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
    
    // Add smooth scroll to nav links (excluding dropdown toggles)
    navLinks.forEach(link => {
        if (!link.classList.contains('dropdown-toggle')) {
            link.addEventListener('click', function(e) {
                if (this.getAttribute('href').startsWith('#')) {
                    e.preventDefault();
                    smoothScrollTo(this.getAttribute('href'));
                }
            });
        }
    });
    
    // Add smooth scroll to dropdown items
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                smoothScrollTo(this.getAttribute('href'));
            }
        });
    });
}

// Initialize only the additional functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeNavbarMobile();
    setupSmoothScroll();
});
