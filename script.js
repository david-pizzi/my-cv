// ===========================
// PRINT/EXPORT TO PDF
// ===========================

function printCV() {
    // Trigger the browser's print dialog
    window.print();
}

// ===========================
// SCROLL PROGRESS INDICATOR
// ===========================

function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.prepend(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = `${scrollPercent}%`;
    });
}

// ===========================
// ADVANCED SCROLL REVEAL SYSTEM
// ===========================

function initScrollReveal() {
    // Add reveal classes to elements
    const sections = document.querySelectorAll('.section, .summary-section');
    const impactCards = document.querySelectorAll('.impact-card');
    const experienceCards = document.querySelectorAll('.experience-card');
    const certBadges = document.querySelectorAll('.cert-badge');
    const skillBadges = document.querySelectorAll('.skill-badge');
    const techTags = document.querySelectorAll('.tech-tag');
    const highlights = document.querySelectorAll('.highlight');
    const educationCards = document.querySelectorAll('.education-card');
    const sectionHeaders = document.querySelectorAll('.section-header');
    
    // Apply reveal classes
    sections.forEach(el => el.classList.add('reveal'));
    impactCards.forEach(el => el.classList.add('reveal-scale'));
    experienceCards.forEach(el => el.classList.add('card-reveal'));
    certBadges.forEach(el => el.classList.add('reveal-scale'));
    highlights.forEach(el => el.classList.add('reveal-left'));
    educationCards.forEach(el => el.classList.add('reveal'));
    sectionHeaders.forEach(el => el.classList.add('reveal-blur'));
    
    // Add stagger to grids
    document.querySelectorAll('.impact-grid, .cert-grid, .skills-grid').forEach(grid => {
        grid.classList.add('stagger-children');
    });
    
    // Intersection Observer for reveal animations
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Special handling for staggered children
                if (entry.target.classList.contains('stagger-children')) {
                    const children = entry.target.children;
                    Array.from(children).forEach(child => {
                        child.classList.add('active');
                    });
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -80px 0px'
    });
    
    // Observe all reveal elements
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-blur, .card-reveal, .stagger-children').forEach(el => {
        revealObserver.observe(el);
    });
}

// ===========================
// COUNTER ANIMATION
// ===========================

function initCounterAnimation() {
    const counters = document.querySelectorAll('.impact-number');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                entry.target.dataset.animated = 'true';
                animateCounter(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => counterObserver.observe(counter));
}

function animateCounter(element) {
    const text = element.textContent;
    const match = text.match(/^([£$€]?)(\d+)([+MK]?)(.*)$/);
    
    if (!match) return;
    
    const [, prefix, number, suffix, rest] = match;
    const target = parseInt(number);
    const duration = 2000;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (ease-out expo)
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(easeProgress * target);
        
        element.textContent = `${prefix}${current}${suffix}${rest}`;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = text; // Ensure final value is exact
        }
    }
    
    requestAnimationFrame(update);
}

// ===========================
// PARALLAX SCROLL EFFECTS
// ===========================

function initParallax() {
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    const heroActions = document.querySelector('.hero-actions');
    
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                const heroHeight = hero?.offsetHeight || 0;
                
                if (scrollY < heroHeight && heroContent) {
                    // Fade and scale hero content as user scrolls
                    const progress = scrollY / (heroHeight * 0.8);
                    const opacity = 1 - progress;
                    const scale = 1 - (progress * 0.1);
                    const translateY = scrollY * 0.4;
                    
                    heroContent.style.opacity = Math.max(0, opacity);
                    heroContent.style.transform = `translateY(${translateY}px) scale(${Math.max(0.9, scale)})`;
                    
                    if (heroActions) {
                        heroActions.style.opacity = Math.max(0, opacity);
                        heroActions.style.transform = `translateY(${translateY * 0.8}px)`;
                    }
                }
                
                ticking = false;
            });
            ticking = true;
        }
    });
}

// ===========================
// MAGNETIC HOVER EFFECT
// ===========================

function initMagneticEffect() {
    const magneticElements = document.querySelectorAll('.btn-primary, .impact-card, .cert-badge');
    
    magneticElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            el.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
        
        el.addEventListener('mouseleave', () => {
            el.style.transform = '';
        });
    });
}

// ===========================
// SCROLL INDICATOR HIDE
// ===========================

function initScrollIndicatorHide() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (!scrollIndicator) return;
    
    let hasScrolled = false;
    
    window.addEventListener('scroll', () => {
        if (!hasScrolled && window.scrollY > 50) {
            hasScrolled = true;
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.transform = 'translateY(20px)';
            scrollIndicator.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        }
    });
}

// ===========================
// TILT EFFECT ON CARDS
// ===========================

function initTiltEffect() {
    const cards = document.querySelectorAll('.experience-card, .education-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.transition = 'transform 0.5s ease';
        });
        
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.1s ease';
        });
    });
}

// ===========================
// SMOOTH SCROLLING
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all animation systems
    createScrollProgress();
    initScrollReveal();
    initCounterAnimation();
    initParallax();
    initMagneticEffect();
    initScrollIndicatorHide();
    initTiltEffect();
    
    // Add smooth scrolling to all links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===========================
    // KEYBOARD SHORTCUTS
    // ===========================
    
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + P to print
        if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
            e.preventDefault();
            printCV();
        }
    });

    // ===========================
    // DYNAMIC UPDATES
    // ===========================
    
    // Update last modified date if needed
    const lastUpdatedElement = document.querySelector('.cv-footer p');
    if (lastUpdatedElement && lastUpdatedElement.textContent.includes('Last updated:')) {
        // You can dynamically update this if you want
        // lastUpdatedElement.textContent = `Last updated: ${new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`;
    }

    // ===========================
    // TECH TAG INTERACTIONS
    // ===========================
    
    const techTags = document.querySelectorAll('.tech-tag, .skill-badge');
    techTags.forEach(tag => {
        tag.addEventListener('click', () => {
            // Optional: You could add filtering or highlighting functionality here
            tag.style.animation = 'pulse 0.3s ease';
            setTimeout(() => {
                tag.style.animation = '';
            }, 300);
        });
    });

    // ===========================
    // PRINT BUTTON TOOLTIP
    // ===========================
    
    const printBtn = document.getElementById('printBtn');
    if (printBtn) {
        // Add tooltip on hover
        printBtn.addEventListener('mouseenter', () => {
            printBtn.setAttribute('title', 'Export as PDF (Ctrl/Cmd + P)');
        });
    }

    // ===========================
    // EXTERNAL LINK HANDLING
    // ===========================
    
    const externalLinks = document.querySelectorAll('a[href^="http"], a[href^="https"]');
    externalLinks.forEach(link => {
        // Ensure external links open in new tab
        if (!link.hasAttribute('target')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });

    // ===========================
    // ACCESSIBILITY ENHANCEMENTS
    // ===========================
    
    // Add ARIA labels where needed
    const contactLinks = document.querySelectorAll('.contact-item');
    contactLinks.forEach(link => {
        const text = link.textContent.trim();
        if (!link.hasAttribute('aria-label')) {
            link.setAttribute('aria-label', `Contact via ${text}`);
        }
    });

    // ===========================
    // RESPONSIVE NAVIGATION HINT
    // ===========================
    
    // Optional: Add a scroll-to-top button for long CVs
    let scrollTopBtn = null;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            if (!scrollTopBtn) {
                scrollTopBtn = createScrollTopButton();
            }
            scrollTopBtn.style.display = 'flex';
        } else if (scrollTopBtn) {
            scrollTopBtn.style.display = 'none';
        }
    });

    function createScrollTopButton() {
        const btn = document.createElement('button');
        btn.innerHTML = `
            <div class="scroll-top-content">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <path d="M18 15l-6-6-6 6"/>
                </svg>
                <span class="scroll-top-text">Back to Top</span>
            </div>
        `;
        btn.className = 'scroll-top-btn no-print';
        btn.setAttribute('aria-label', 'Scroll to top');
        
        // Add enhanced styles
        const btnStyle = document.createElement('style');
        btnStyle.textContent = `
            .scroll-top-btn {
                position: fixed;
                bottom: 2rem;
                right: 2rem;
                background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                color: white;
                border: none;
                padding: 0.75rem 1.25rem;
                border-radius: 50px;
                display: none;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                box-shadow: 0 10px 40px rgba(15, 23, 42, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1);
                transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                z-index: 999;
                overflow: hidden;
            }
            
            .scroll-top-btn::before {
                content: '';
                position: absolute;
                inset: 0;
                background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
                opacity: 0;
                transition: opacity 0.3s ease;
                border-radius: inherit;
            }
            
            .scroll-top-btn:hover::before {
                opacity: 1;
            }
            
            .scroll-top-btn:hover {
                transform: translateY(-4px) scale(1.05);
                box-shadow: 0 20px 50px rgba(59, 130, 246, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.2);
            }
            
            .scroll-top-content {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                position: relative;
                z-index: 1;
            }
            
            .scroll-top-content svg {
                animation: bounceUp 2s ease-in-out infinite;
                flex-shrink: 0;
            }
            
            .scroll-top-text {
                font-size: 0.75rem;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.1em;
                white-space: nowrap;
            }
            
            @keyframes bounceUp {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-4px); }
            }
            
            @media (max-width: 640px) {
                .scroll-top-btn {
                    padding: 0.75rem;
                    border-radius: 50%;
                }
                .scroll-top-text {
                    display: none;
                }
            }
        `;
        document.head.appendChild(btnStyle);
        
        btn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        document.body.appendChild(btn);
        return btn;
    }

    // ===========================
    // LOADING ANIMATION COMPLETE
    // ===========================
    
    console.log('CV website loaded successfully! 🎉');
});

// ===========================
// CSS ANIMATION KEYFRAMES (Added via JS)
// ===========================

const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
    }
`;
document.head.appendChild(style);
