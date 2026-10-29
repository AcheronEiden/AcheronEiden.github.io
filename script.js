class ResumeWebsite {
    constructor() {
        this.currentPage = 'home';
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupMobileMenu();
        this.setupSmoothScrolling();
        this.showPage('home');
    }

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

    setupSmoothScrolling() {
        document.addEventListener('scroll', this.throttle(() => {
            this.updateNavbarOnScroll();
        }, 16));
    }

    showPage(pageId) {
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => page.classList.remove('active'));

        const targetPage = document.getElementById(`${pageId}-page`);
        if (targetPage) {
            targetPage.classList.add('active');
            this.currentPage = pageId;
            history.pushState({ page: pageId }, '', `#${pageId}`);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    setActiveNavLink(activeLink) {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => link.classList.remove('active'));
        activeLink.classList.add('active');
    }

    closeMobileMenu() {
        const navMenu = document.getElementById('nav-menu');
        const hamburger = document.getElementById('nav-hamburger');
        if (navMenu && hamburger) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    }

    updateNavbarOnScroll() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    }

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

class ContactFormManager {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.status = document.getElementById('form-status');
        if (this.form) this.setupListener();
    }

    setupListener() {
        this.form.addEventListener("submit", this.handleSubmit.bind(this));
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        
        try {
            const response = await fetch(event.target.action, {
                method: this.form.method,
                body: data,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                this.status.innerHTML = "Submission successful.";
                this.form.reset();
            } else {
                const responseData = await response.json();
                if (Object.hasOwn(responseData, 'errors')) {
                    this.status.innerHTML = responseData["errors"].map(error => error["message"]).join(", ");
                } else {
                    this.status.innerHTML = "Submission failed.";
                }
            }
        } catch (error) {
            this.status.innerHTML = "Submission error occurred.";
        }
    }
}

class CertificateManager {
    constructor() {
        document.addEventListener('click', (e) => {
            if (e.target.matches('.certificate-card .btn')) {
                e.preventDefault();
                const url = e.target.dataset.url;
                if (url) window.open(url, '_blank', 'noopener');
            }
        });
    }
}

class ResumeManager {
    constructor() {
        document.addEventListener('click', (e) => {
            if (e.target.matches('.resume-actions .btn')) {
                e.preventDefault();
                const action = e.target.dataset.action;
                const file = e.target.dataset.file;
                
                if (action === 'download' && file) {
                    const link = document.createElement('a');
                    link.href = file;
                    link.download = file;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                } else if (action === 'preview' && file) {
                    window.open(file, '_blank', 'noopener');
                }
            }
        });
    }
}

class StateManager {
    constructor() {
        window.addEventListener('popstate', (e) => {
            if (e.state && e.state.page) {
                window.resumeWebsite.showPage(e.state.page);
                const navLink = document.querySelector(`[data-page="${e.state.page}"]`);
                if (navLink) window.resumeWebsite.setActiveNavLink(navLink);
            }
        });

        window.addEventListener('load', () => {
            const hash = window.location.hash.substring(1);
            if (hash && document.getElementById(`${hash}-page`)) {
                window.resumeWebsite.showPage(hash);
                const navLink = document.querySelector(`[data-page="${hash}"]`);
                if (navLink) window.resumeWebsite.setActiveNavLink(navLink);
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.resumeWebsite = new ResumeWebsite();
    new ContactFormManager();
    new CertificateManager();
    new ResumeManager();
    new StateManager();
    document.body.classList.add('loaded');
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