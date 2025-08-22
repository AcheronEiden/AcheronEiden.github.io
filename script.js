// Professional Resume Website JavaScript

// Navigation and Page Management
class ResumeWebsite {
    constructor() {
        this.currentPage = 'home';
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupMobileMenu();
        this.setupAnimations();
        this.setupSmoothScrolling();
        this.showPage('home');
    }

    // Sets up event listeners for navigation links
    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = link.dataset.page;
                this.showPage(page);
                this.setActiveNavLink(link);
                this.closeMobileMenu();
            });
        });
    }

    // Sets up the hamburger menu for mobile
    setupMobileMenu() {
        const hamburger = document.getElementById('nav-hamburger');
        const navMenu = document.getElementById('nav-menu');

        if (hamburger) {
            hamburger.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                hamburger.classList.toggle('active');
            });
        }
    }

    // Sets up Intersection Observer for fade-in animations on sections
    setupAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationDelay = '0s';
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, observerOptions);

        const observeElements = document.querySelectorAll('.card, .skill-card, .contact-card, .project-card, .certificate-card, .resume-card');
        observeElements.forEach(el => observer.observe(el));
    }

    // Sets up smooth scrolling behavior
    setupSmoothScrolling() {
        document.addEventListener('scroll', this.throttle(() => {
            this.updateNavbarOnScroll();
        }, 16));
    }

    // Hides all pages and shows the selected one
    showPage(pageId) {
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => {
            page.classList.remove('active');
        });

        const targetPage = document.getElementById(`${pageId}-page`);
        if (targetPage) {
            targetPage.classList.add('active');
            this.currentPage = pageId;

            history.pushState({ page: pageId }, '', `#${pageId}`);

            window.scrollTo({ top: 0, behavior: 'smooth' });

            setTimeout(() => {
                this.setupAnimations();
            }, 100);
        }
    }

    // Updates the active class on the navigation links
    setActiveNavLink(activeLink) {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => link.classList.remove('active'));
        activeLink.classList.add('active');
    }

    // Closes the mobile navigation menu
    closeMobileMenu() {
        const navMenu = document.getElementById('nav-menu');
        const hamburger = document.getElementById('nav-hamburger');

        if (navMenu && hamburger) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    }

    // Changes navbar background on scroll
    updateNavbarOnScroll() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    }

    // Utility function for throttling to limit function calls on scroll
    throttle(func, limit) {
        let inThrottle;
        return function () {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }
}

// Skills Progress Animation
class SkillsAnimation {
    constructor() {
        this.animateOnScroll();
    }

    // Animates skill progress bars when they come into view
    animateOnScroll() {
        const skillCards = document.querySelectorAll('.skill-card');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target.querySelector('.progress-fill');
                    if (progressBar) {
                        const width = progressBar.style.width;
                        progressBar.style.width = '0%';
                        setTimeout(() => {
                            progressBar.style.width = width;
                        }, 200);
                    }
                }
            });
        }, { threshold: 0.5 });

        skillCards.forEach(card => observer.observe(card));
    }
}

// Contact Form Functionality
class ContactManager {
    constructor() {
        this.setupContactActions();
    }

    // Sets up event listeners for contact links
    setupContactActions() {
        const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
        const emailAnimation = document.getElementById('email-animation'); // Get the animation element

        emailLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent the default mailto link behavior
                
                // Show the animation
                emailAnimation.classList.add('active');

                // Wait for the animation to play
                setTimeout(() => {
                    // Hide the animation
                    emailAnimation.classList.remove('active');
                    
                    // Trigger the mailto link programmatically
                    window.location.href = e.target.closest('a').href;
                }, 2000); // Wait for 2 seconds
            });
        });
        
        // The rest of the ContactManager class remains the same
        const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
        phoneLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                console.log('Phone link clicked:', link.href);
            });
        });
    }
}

// Portfolio Interactions
class PortfolioManager {
    constructor() {
        this.setupProjectActions();
    }

    // Sets up event listeners for project buttons
    setupProjectActions() {
        const projectButtons = document.querySelectorAll('.project-actions .btn');

        projectButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                // The `onclick` attribute on the button handles the link, so this part is only for placeholders
                const buttonText = button.textContent.trim();
                
                if (buttonText === 'View Code') {
                    this.handleViewCode(button);
                } else if (buttonText === 'Live Demo') {
                    this.handleLiveDemo(button);
                }
            });
        });
    }

    // Placeholder function for viewing project code
    handleViewCode(button) {
        alert('GitHub repository link would be opened here. Please add your actual repository URLs.');
    }

    // Placeholder function for viewing a live demo
    handleLiveDemo(button) {
        alert('Live demo would be opened here. Please add your actual demo URLs.');
    }
}

// Resume Download Manager
class ResumeManager {
    constructor() {
        this.setupDownloadActions();
    }

    setupDownloadActions() {
        const downloadButtons = document.querySelectorAll('.resume-actions .btn');
        const downloadAnimation = document.getElementById('download-animation'); // Get the new animation element

        downloadButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const action = button.dataset.action;
                const file = button.dataset.file;
                
                if (action === 'download') {
                    e.preventDefault(); // Prevent default button action
                    
                    // Show the animation
                    downloadAnimation.classList.add('active');
                    
                    // Wait for the animation to play before triggering the download
                    setTimeout(() => {
                        this.handleDownload(file);
                        // Hide the animation after the download is initiated
                        downloadAnimation.classList.remove('active');
                    }, 2000); // Animation duration is 2 seconds
                } else if (action === 'preview') {
                    this.handlePreview(file);
                }
            });
        });
    }

    // Handles the download of the specified file
    handleDownload(file) {
        if (file) {
            const link = document.createElement('a');
            link.href = file;
            link.download = file;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            console.log('Download initiated for:', file);
        } else {
            console.error('No file specified for download.');
        }
    }

    // Handles the preview of the specified file in a new tab
    handlePreview(file) {
        if (file) {
            window.open(file, '_blank', 'noopener');
            console.log('Preview opened for:', file);
        } else {
            console.error('No file specified for preview.');
        }
    }
}

// Certificate Verification
class CertificateManager {
    constructor() {
        this.setupVerificationActions();
    }

    // Sets up event listeners for certificate verification buttons
    setupVerificationActions() {
        const verifyButtons = document.querySelectorAll('.certificate-card .btn');

        verifyButtons.forEach(button => {
            if (button.textContent.includes('Verify')) {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.handleVerification(button);
                });
            }
        });
    }

    // Placeholder function for certificate verification
    handleVerification(button) {
        alert('Certificate verification would open here. Please add your actual verification URLs.');
    }
}

// Publication Actions
class PublicationManager {
    constructor() {
        this.setupPublicationActions();
    }

    // Sets up event listeners for publication buttons
    setupPublicationActions() {
        const pubButtons = document.querySelectorAll('.publication-actions .btn');

        pubButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const buttonText = button.textContent.trim();

                if (buttonText === 'View PDF') {
                    this.handlePDFView(button);
                } else if (buttonText === 'Publisher Link') {
                    this.handlePublisherLink(button);
                } else if (buttonText.includes('Citations')) {
                    this.handleCitations(button);
                }
            });
        });
    }

    // Placeholder function for viewing a publication PDF
    handlePDFView(button) {
        alert('PDF view would open here. Please add your actual publication PDF links.');
    }

    // Placeholder function for opening a publisher link
    handlePublisherLink(button) {
        alert('Publisher link would open here. Please add your actual publisher URLs.');
    }

    // Placeholder function for showing citations
    handleCitations(button) {
        alert('Citations would be shown here. Please add your actual citation links.');
    }
}

// Page State Management
class StateManager {
    constructor() {
        this.handleBrowserNavigation();
    }

    // Handles browser back/forward button clicks and initial page load
    handleBrowserNavigation() {
        window.addEventListener('popstate', (e) => {
            if (e.state && e.state.page) {
                window.resumeWebsite.showPage(e.state.page);
                const navLink = document.querySelector(`[data-page="${e.state.page}"]`);
                if (navLink) {
                    window.resumeWebsite.setActiveNavLink(navLink);
                }
            }
        });

        window.addEventListener('load', () => {
            const hash = window.location.hash.substring(1);
            if (hash && document.getElementById(`${hash}-page`)) {
                window.resumeWebsite.showPage(hash);
                const navLink = document.querySelector(`[data-page="${hash}"]`);
                if (navLink) {
                    window.resumeWebsite.setActiveNavLink(navLink);
                }
            }
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize main website functionality
    window.resumeWebsite = new ResumeWebsite();

    // Initialize specialized managers
    new SkillsAnimation();
    new ContactManager();
    new PortfolioManager();
    new ResumeManager();
    new CertificateManager();
    new PublicationManager();
    new StateManager();

    // Add smooth scrolling behavior to all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add loading animation completion
    document.body.classList.add('loaded');
});

// Handle window resize for responsive behavior
window.addEventListener('resize', () => {
    // Close mobile menu on resize to larger screen
    if (window.innerWidth > 768) {
        const navMenu = document.getElementById('nav-menu');
        const hamburger = document.getElementById('nav-hamburger');
        if (navMenu && hamburger) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    }
});

// Performance optimization: Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}
