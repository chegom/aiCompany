document.addEventListener('DOMContentLoaded', () => {
    // Particles.js Configuration for "Signal/Grid" Effect
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 60,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#F37021' // Orange Accent
                },
                shape: {
                    type: 'circle',
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
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#94a3b8', // Light Grey Lines
                    opacity: 0.3,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 0.6
                        }
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }

    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.nav-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            if (navLinks.style.display === 'flex') {
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'rgba(255, 255, 255, 0.98)';
                navLinks.style.padding = '20px';
                navLinks.style.borderBottom = '1px solid rgba(0,0,0,0.1)';
            }
        });
    }

    // Scroll Animations (Simple Reveal)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.problem-copy, .solution-card, .data-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Number Counter Animation
    const counterObserverOptions = {
        threshold: 0.5
    };

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const start = parseInt(counter.getAttribute('data-start'));
                const end = parseInt(counter.getAttribute('data-end'));
                const suffix = counter.getAttribute('data-suffix') || '';

                // Bar Animation Data
                const widthStart = parseInt(counter.getAttribute('data-width-start'));
                const widthEnd = parseInt(counter.getAttribute('data-width-end'));
                const barFill = counter.parentElement.querySelector('.fill');

                const duration = 2000; // 2 seconds
                const startTime = performance.now();

                const easeOutQuart = (x) => {
                    return 1 - Math.pow(1 - x, 4);
                };

                const updateCounter = (currentTime) => {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const easedProgress = easeOutQuart(progress);

                    // Update Number
                    const currentVal = Math.floor(start + (end - start) * easedProgress);
                    counter.innerText = currentVal + suffix;

                    // Update Bar Width
                    if (!isNaN(widthStart) && !isNaN(widthEnd) && barFill) {
                        const currentWidth = widthStart + (widthEnd - widthStart) * easedProgress;
                        barFill.style.width = `${currentWidth}%`;
                    }

                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.innerText = end + suffix; // Ensure final value is exact
                        if (!isNaN(widthEnd) && barFill) {
                            barFill.style.width = `${widthEnd}%`;
                        }
                    }
                };

                requestAnimationFrame(updateCounter);
                observer.unobserve(counter);
            }
        });
    }, counterObserverOptions);

    const counters = document.querySelectorAll('.data-value');
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

    console.log('Universe N - Modern Initialized');
});
