document.addEventListener('DOMContentLoaded', () => {

    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.nav-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // Scroll Animations (Fade In)
    const fadeObserverOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeElements = document.querySelectorAll(
        `h1, .hero-sub-copy, .cta-button, 
        .section-sub-title, .section-main-title, .section-description, 
        .process-card, .solution-card, .data-item, 
        .problem-copy, .feature-list li, 
        .footer-copy, .footer-cta, .footer-brand, .footer-sns, .footer-bottom, 
        .hero-visual-col, .mockup-header, .mockup-content, .noise-graphic`
    );

    fadeElements.forEach(el => {
        el.classList.add('fade-in-element');
    });

    // Validating Hero Animation: Delay observer start slightly to ensure initial state (opacity: 0) is rendered
    setTimeout(() => {
        const fadeObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, fadeObserverOptions);

        fadeElements.forEach(el => {
            fadeObserver.observe(el);
        });
    }, 100);

    // Number Counter Animation
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const start = parseFloat(target.getAttribute('data-start'));
                const end = parseFloat(target.getAttribute('data-end'));
                const suffix = target.getAttribute('data-suffix') || '';
                const duration = 2000; // ms
                const startTime = performance.now();

                function update(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);

                    // Ease out quart
                    const ease = 1 - Math.pow(1 - progress, 4);

                    const current = start + (end - start) * ease;

                    // Format number: integer if whole, 1 decimal if small range/float needed
                    // For this specific use case, our numbers are integers (40, 0, 4, 35).
                    // However, let's keep it robust.
                    let formattedNumber = Math.floor(current);
                    if (end % 1 !== 0) {
                        formattedNumber = current.toFixed(1);
                    }

                    target.textContent = formattedNumber + suffix;

                    if (progress < 1) {
                        requestAnimationFrame(update);
                    } else {
                        target.textContent = end + suffix; // Ensure final value is exact
                    }
                }

                requestAnimationFrame(update);
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.data-value').forEach(el => {
        counterObserver.observe(el);
    });

    console.log('Universe N - Modern Initialized');
});
