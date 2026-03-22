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

            history.pushState({
                page: pageId
            }, '', `#${pageId}`);

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

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
        }, {
            threshold: 0.5
        });

        skillCards.forEach(card => observer.observe(card));
    }
}

// Contact Form Submission Handler
class ContactFormManager {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.status = document.getElementById('form-status');
        this.setupListener();
    }

    setupListener() {
        if (this.form) {
            this.form.addEventListener("submit", this.handleSubmit.bind(this));
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const emailAnimation = document.getElementById('email-animation'); // Get the animation

        // 1. Show the animation
        if (emailAnimation) {
            emailAnimation.classList.add('active');
        }

        // 2. Wait for 2 seconds (2000ms) for the animation to play
        await new Promise(resolve => setTimeout(resolve, 2000));

        // 3. Run the form submission logic
        try {
            const response = await fetch(event.target.action, {
                method: this.form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                this.status.innerHTML = "Thanks for your submission!";
                this.form.reset();
            } else {
                const responseData = await response.json();
                if (Object.hasOwn(responseData, 'errors')) {
                    this.status.innerHTML = responseData["errors"].map(error => error["message"]).join(", ");
                } else {
                    this.status.innerHTML = "Oops! There was a problem submitting your form";
                }
            }
        } catch (error) {
            this.status.innerHTML = "Oops! There was a problem submitting your form";
        } finally {
            // 4. Hide the animation after the form is submitted (success or error)
            if (emailAnimation) {
                emailAnimation.classList.remove('active');
            }
        }
    }
}

// Contact Form Functionality
class ContactManager {
    constructor() {
        this.setupContactActions();
    }

    // Sets up event listeners for contact links
    setupContactActions() {
        // const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
        // const emailAnimation = document.getElementById('email-animation'); // Get the animation element

        // emailLinks.forEach(link => {
        //     link.addEventListener('click', (e) => {
        //         e.preventDefault(); // Prevent the default mailto link behavior

        //         // Show the animation
        //         emailAnimation.classList.add('active');

        //         // Wait for the animation to play
        //         setTimeout(() => {
        //             // Hide the animation
        //             emailAnimation.classList.remove('active');

        //             // Trigger the mailto link programmatically
        //             window.location.href = e.target.closest('a').href;
        //         }, 2000); // Wait for 2 seconds
        //     });
        // });

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
                const buttonText = button.textContent.trim();

                if (buttonText === 'View Code') {
                    this.handleViewCode(button);
                } else if (buttonText === 'Live Demo') {
                    this.handleLiveDemo(button);
                }
            });
        });
    }

    handleViewCode(button) {
        alert('GitHub repository link would be opened here. Please add your actual repository URLs.');
    }

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
        const downloadAnimation = document.getElementById('download-animation');

        downloadButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();

                const action = button.dataset.action;
                const file = button.dataset.file;

                if (action === 'download') {
                    downloadAnimation.classList.add('active');
                    setTimeout(() => {
                        this.handleDownload(file);
                        downloadAnimation.classList.remove('active');
                    }, 2000);
                } else if (action === 'preview') {
                    this.handlePreview(file);
                }
            });
        });
    }

    handleDownload(file) {
        if (file) {
            const link = document.createElement('a');
            link.href = file;
            link.download = file;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }

    handlePreview(file) {
        if (file) {
            window.open(file, '_blank', 'noopener');
        }
    }
}

// Certificate Verification
class CertificateManager {
    constructor() {
        this.setupVerificationActions();
    }

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

    handleVerification(button) {
        const url = button.dataset.url; // Grabs the URL from the data-url attribute
        if (url) {
            window.open(url, '_blank', 'noopener'); // Opens the verification link
        } else {
            alert('Verification link not found.');
        }
    }
}

// Publication Actions
class PublicationManager {
    constructor() {
        this.setupPublicationActions();
    }

    setupPublicationActions() {
        const pubButtons = document.querySelectorAll('.publication-actions .btn');
        pubButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
            });
        });
    }
}

// Typewriter class modified to type a single title once
class Typewriter {
    constructor(element, text, speed = 150) {
        this.element = element;
        this.text = text;
        this.speed = speed;
        this.charIndex = 0;
        this.type();
    }

    type() {
        if (this.charIndex < this.text.length) {
            this.element.textContent += this.text.charAt(this.charIndex);
            this.charIndex++;
            setTimeout(() => this.type(), this.speed);
        } else {
            this.element.style.borderRight = 'none';
        }
    }
}

// Page State Management
class StateManager {
    constructor() {
        this.handleBrowserNavigation();
    }

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

function showDigitalGlitch() {
    const glitch = document.getElementById('binary-glitch');
    const binaryString = Array.from({
        length: 20
    }, () => Math.round(Math.random())).join('');
    const randomX = Math.random() * (window.innerWidth - 150);
    const randomY = Math.random() * (window.innerHeight - 150);
    glitch.style.left = `${randomX}px`;
    glitch.style.top = `${randomY}px`;
    glitch.textContent = binaryString;
    glitch.style.display = 'block';
    setTimeout(() => {
        glitch.style.display = 'none';
        const minDelay = 90 * 1000;     // 1.5 minutes
        const maxDelay = 3 * 60 * 1000; // 3 minutes
        const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
        setTimeout(showDigitalGlitch, randomDelay);
    }, 1000); // Display for 1 second
}

function showSpiralAnimation() {
    const spiral = document.getElementById('spiral-animation');
    const randomX = Math.random() * (window.innerWidth - 300);
    const randomY = Math.random() * (window.innerHeight - 300);
    spiral.style.left = `${randomX}px`;
    spiral.style.top = `${randomY}px`;
    spiral.classList.add('active');
    setTimeout(() => {
        spiral.classList.remove('active');
    }, 1000); // The animation is only 1 second long
    const minDelay = 2 * 60 * 1000; // 2 minutes
    const maxDelay = 4 * 60 * 1000; // 4 minutes
    const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
    setTimeout(showSpiralAnimation, randomDelay);
}

function showRobotAnimation() {
    const robot = document.getElementById('robot-animation');
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const animWidth = 300;
    const animHeight = 300;
    let startX, startY;
    switch (Math.floor(Math.random() * 4)) {
        case 0:
            startX = Math.random() * viewportWidth - animWidth / 2;
            startY = -animHeight;
            break;
        case 1:
            startX = viewportWidth;
            startY = Math.random() * viewportHeight - animHeight / 2;
            break;
        case 2:
            startX = Math.random() * viewportWidth - animWidth / 2;
            startY = viewportHeight;
            break;
        case 3:
            startX = -animWidth;
            startY = Math.random() * viewportHeight - animHeight / 2;
            break;
    }
    const endX = Math.random() * (viewportWidth - animWidth);
    const endY = Math.random() * (viewportHeight - animHeight);
    robot.style.transform = `translate(${startX}px, ${startY}px)`;
    robot.classList.add('active');
    setTimeout(() => {
        robot.style.transform = `translate(${endX}px, ${endY}px)`;
    }, 10000); // Display for 10 seconds
    setTimeout(() => {
        robot.classList.remove('active');
        const minDelay = 5 * 60 * 1000;  // 5 minutes
        const maxDelay = 10 * 60 * 1000; // 10 minutes
        const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
        setTimeout(showRobotAnimation, randomDelay);
    }, 10000);
}

// Function to trigger a full-page glitch effect
function triggerPageGlitch() {
    const body = document.body;
    body.classList.add('page-glitch');

    // Remove the class after the animation completes
    setTimeout(() => {
        body.classList.remove('page-glitch');

        const minDelay = 3 * 60 * 1000; // 3 minutes
        const maxDelay = 7 * 60 * 1000; // 7 minutes
        const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;

        // Schedule the next glitch
        setTimeout(triggerPageGlitch, randomDelay);
    }, 400); // Must match the animation duration (0.4s)
}

// And update the initial call to use a random delay too
setTimeout(triggerPageGlitch, Math.random() * (7 * 60 * 1000 - 3 * 60 * 1000) + 3 * 60 * 1000);

let isAISoundAnimationClickable = false;

function showAISoundAnimation() {
    const aiSound = document.getElementById('ai-sound-animation');
    const randomX = Math.random() * (window.innerWidth - 300);
    const randomY = Math.random() * (window.innerHeight - 300);
    aiSound.style.left = `${randomX}px`;
    aiSound.style.top = `${randomY}px`;
    aiSound.classList.add('active');
    isAISoundAnimationClickable = true;
    setTimeout(() => {
        aiSound.classList.remove('active');
        isAISoundAnimationClickable = false;
    }, 400); // The animation is only 0.4 seconds long
    const minDelay = 2.5 * 60 * 1000; // 2.5 minutes
    const maxDelay = 5 * 60 * 1000;   // 5 minutes
    const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
    setTimeout(showAISoundAnimation, randomDelay);
}

// Create an AudioContext (it's best to create it once)
let audioCtx;

// Function to play the custom sound file
function playClickSound() {
    const sound = document.getElementById('click-sound');
    if (sound) {
        sound.currentTime = 0; // Rewind to the start
        sound.play();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.resumeWebsite = new ResumeWebsite();
    new SkillsAnimation();
    new ContactManager();
    new ContactFormManager();
    new PortfolioManager();
    new ResumeManager();
    new CertificateManager();
    new PublicationManager();
    new StateManager();

    const typewriterElement = document.getElementById('typewriter-text');
    if (typewriterElement) {
        const textToType = typewriterElement.textContent;
        typewriterElement.textContent = '';
        setTimeout(() => {
            new Typewriter(typewriterElement, textToType.trim());
        }, 100);
    }

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

    document.body.classList.add('loaded');
    setTimeout(showAISoundAnimation, Math.random() * (90 * 1000) + 30000); // Between 30-120 seconds
    setTimeout(showDigitalGlitch, Math.random() * (60 * 1000) + 20000);    // Between 20-80 seconds
    setTimeout(showSpiralAnimation, Math.random() * (120 * 1000) + 45000); // Between 45-165 seconds
    setTimeout(showRobotAnimation, Math.random() * (180 * 1000) + 90000);  // Between 90-270 seconds
    setTimeout(triggerPageGlitch, Math.random() * (150 * 1000) + 60000);   // Between 60-210 seconds

    const aiSound = document.getElementById('ai-sound-animation');
    const modal = document.getElementById('catch-modal');
    const closeBtn = document.querySelector('#catch-modal .close-btn');

    if (aiSound) {
        aiSound.addEventListener('click', (e) => {
            if (isAISoundAnimationClickable) {
                e.preventDefault();
                playClickSound();
                aiSound.classList.remove('active'); // Hide the animation
                isAISoundAnimationClickable = false;
                modal.style.display = 'block'; // Show the modal
            }
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        const navMenu = document.getElementById('nav-menu');
        const hamburger = document.getElementById('nav-hamburger');
        if (navMenu && hamburger) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    }
});

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
        img.src = img.dataset.src;
        img.classList.remove('lazy');
    });
}