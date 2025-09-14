(function() {
    'use strict';
    
    // System theme detection
    const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Theme-based color configuration
    const themeColors = {
        lineLinked: {
            light: '#6a0d83',
            dark: '#a29bfe'
        }
    };
    
    // Get current theme color
    function getThemeColor() {
        const currentTheme = document.documentElement.getAttribute('data-bs-theme');
        return currentTheme === 'light' ? 'light' : 'dark';
    }
    
    // Initialize particles with theme-based colors
    function initParticles() {
        const theme = getThemeColor();
        
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 120,
                    density: { 
                        enable: true, 
                        value_area: 800 
                    }
                },
                color: {
                    value: 'random'
                },
                shape: {
                    type: ['circle', 'triangle', 'polygon', 'edge', 'star'],
                    stroke: { 
                        width: 0, 
                        color: '#000000' 
                    },
                    polygon: { 
                        nb_sides: 5 
                    }
                },
                opacity: {
                    value: 0.6,
                    random: true,
                    anim: { 
                        enable: true, 
                        speed: 0.8, 
                        opacity_min: 0.3, 
                        sync: false 
                    }
                },
                size: {
                    value: 4,
                    random: true,
                    anim: { 
                        enable: true, 
                        speed: 3, 
                        size_min: 1, 
                        sync: false 
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: themeColors.lineLinked[theme],
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 5,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: { 
                        enable: false, 
                        rotateX: 800, 
                        rotateY: 1600 
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { 
                        enable: true, 
                        mode: ['grab', 'connect'] 
                    },
                    onclick: { 
                        enable: true, 
                        mode: 'push' 
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 180,
                        line_linked: { 
                            opacity: 0.5 
                        }
                    },
                    push: { 
                        particles_nb: 4 
                    }
                }
            },
            retina_detect: true
        });
    }
    
    // Update particles when theme changes
    function updateParticlesOnThemeChange() {
        // Destroy existing particles
        if (window.pJSDom && window.pJSDom.length > 0) {
            window.pJSDom[0].pJS.fn.vendors.destroypJS();
            window.pJSDom = [];
        }
        
        // Reinitialize with new theme
        initParticles();
    }
    
    // Setup theme change observer
    function setupThemeObserver() {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.attributeName === 'data-bs-theme') {
                    setTimeout(updateParticlesOnThemeChange, 100);
                }
            });
        });
        
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-bs-theme']
        });
    }
    
    // Auto initialization
    if (typeof particlesJS !== 'undefined') {
        initParticles();
        setupThemeObserver();
    } else {
        document.addEventListener('DOMContentLoaded', function() {
            if (typeof particlesJS !== 'undefined') {
                initParticles();
                setupThemeObserver();
            }
        });
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initParticles);
    } else {
        initParticles();
    }
})();
