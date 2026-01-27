// ===========================
// PRINT/EXPORT TO PDF
// ===========================

function printCV() {
    // Trigger the browser's print dialog
    window.print();
}

// ===========================
// SMOOTH SCROLLING
// ===========================

document.addEventListener('DOMContentLoaded', () => {
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
    // SCROLL ANIMATIONS
    // ===========================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections for fade-in animation
    const sections = document.querySelectorAll('.cv-section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
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
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 15l-6-6-6 6"/>
            </svg>
        `;
        btn.className = 'scroll-top-btn no-print';
        btn.setAttribute('aria-label', 'Scroll to top');
        btn.style.cssText = `
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            background: var(--primary-color);
            color: white;
            border: none;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            display: none;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: var(--shadow-lg);
            transition: all 0.3s ease;
            z-index: 999;
        `;
        
        btn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-4px)';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0)';
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
