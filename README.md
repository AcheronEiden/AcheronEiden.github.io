# Professional Resume Website

This document is a comprehensive guide to help you manage your personal resume website. It details the file structure, how to customize each section, and explains the core functionality of the code. Think of this as a reference manual you can come back to whenever you want to update your portfolio.

## 📁 File Structure

The project is a static single-page application built with vanilla HTML, CSS, and JavaScript.

```
.../
├── index.html          # The main HTML file with all content sections.
├── styles.css          # The main CSS file for all styling and layout.
├── script.js           # The main JavaScript file for all interactive features.
└── profile-image.png   # Your profile photo, used on the homepage.
```

The website is a **single-page application (SPA)**, which means all the content for each section is loaded in `index.html`. The `script.js` file handles showing and hiding these sections to simulate navigation without reloading the page.

-----

## 🏗️ How to Add or Edit Content (by Section)

Each page is a `<div class="page">` with a unique ID, like `id="home-page"`. To edit content, you'll work directly in the `index.html` file.

### **Home Page (`id="home-page"`)**

This is the landing page that introduces you.

  * **Hero Section**: Change your name, title, and contact details inside the `<section class="hero-section">`. The icons are from the [Font Awesome library](https://fontawesome.com/v6/search?o=r&m=free). You can replace them by finding a new icon and changing the class name of the `<i>` tag (e.g., `<i class="fa-solid fa-location-dot"></i>`).
  * **About Me**: Edit the text within the `<p>` tags and update your top skills inside the `<div class="badge-container">`.
  * **Experience & Education**: Each job or educational entry is its own `<div class="card">`. To add a new one, copy an existing `div.card`, paste it, and fill in your new details. This ensures the styling remains consistent.

### **Skills Page (`id="skills-page"`)**

This page is built with nested sections.

  * **Skill Categories**: Each category (e.g., "Programming Languages," "Technical Skills") is a `<div class="skills-category">`. You can add new categories by copying this block.
  * **Skill Cards**: Each individual skill is a `<div class="skill-card">`. To add a new skill, copy a card, update the title, description, and the percentage in the `span.skill-level`. The progress bar animation is handled automatically by the `script.js` file.
  * **Tools & Technologies**: The badges for tools are inside a `div.badge-container`. To add a new tool, simply add a new `<span class="badge badge-outline">New Tool</span>` inside the container.

### **Contact Information (`id="contact-page"`)**

This page provides various ways for people to reach you.

  * **Contact Cards**: Each contact method (Email, Phone, etc.) is a `<div class="contact-card">`. To add a new one, copy a card and update the icon, title, and links accordingly.
  * **Call-to-Action Box**: The box at the bottom is a new section. You can easily modify the text and links within this section. Remember that the `Hire Me` button is an email link and the `Download CV` button links to the Resume page (`#resume`).

### **Portfolio Page (`id="portfolio-page"`)**

This section showcases your projects.

  * **Project Cards**: Each project is a `<div class="project-card">`. To add a new project, copy a card, paste it into the `portfolio-grid`, and update the project title, type, description, and technologies.
  * **Project Links**: The buttons (`View Code`, `Live Demo`) are placeholders. You'll need to update the `onclick` event in `script.js` to link to your actual project URLs.

### **Publications Page (`id="publications-page"`)**

This section is for your research and academic work.

  * **Publication Cards**: Each publication is a `<div class="publication-card">`. To add a new one, copy a card and fill in the details like authors, journal, abstract, and keywords. The buttons at the bottom are placeholders, and you'll need to update the corresponding functions in `script.js` with the correct links to your documents or publisher pages.

### **Certificates Page (`id="certificates-page"`)**

This page lists your certifications.

  * **Certificate Cards**: Each certificate is a `<div class="certificate-card">`. Copy and paste a card to add a new one, then update the details.
  * **Certification Overview**: The numbers here are static. To update them, you need to manually change the numbers in the `h4.stat-number` tags.

### **Resume Page (`id="resume-page"`)**

This page is dedicated to your downloadable resume.

  * **Resume Cards**: Each resume file is a `<div class="resume-card">`. Copy a card to add a new version of your resume (e.g., a Swedish version or a simplified version) and update the file details.
  * **Download & Preview**: The `Download` and `Preview` buttons are placeholders. You will need to update the `onclick` event in `script.js` to link to your actual resume files.

-----

## 🎨 Styling & Customization

The design is built with a variable-based approach, making it easy to change the look and feel. All core styling is defined by **CSS custom properties** (variables) inside the `:root` selector at the top of `styles.css`.

  * **Colors**: Change `var(--color-primary)`, `var(--color-secondary)`, and other color variables to update the entire color scheme of the website at once.
  * **Typography**: Modify `var(--font-family)` or other font-related variables to change the typography.
  * **Spacing**: Adjust the `var(--spacing-...)` values to fine-tune the layout and spacing.

### **Specialized Classes**

Some elements have specific classes for unique styling:

  * `.badge-professional`: Used on the certificates page for professional-level badges.
  * `.stat-number-blue` and `.stat-number-purple`: Used to color the numbers in the "Certification Overview" section.
  * `section-alt`: This class is applied to sections that use the subtle background gradient, creating a visual break between pages. You can add or remove this class from any `<section>` to change its background.

-----

## 🧠 JavaScript Functionality (`script.js`)

The JavaScript file is organized into several classes, each handling a specific part of the website's functionality. The code is commented to explain what each part does.

  * `ResumeWebsite`: The main class that controls the page navigation, mobile menu, and animations.
  * `SkillsAnimation`: Manages the animation of the progress bars in the Skills section.
  * `ContactManager`: Contains placeholder code for contact actions like sending emails or making calls.
  * `PortfolioManager`: Contains placeholder functions for linking to your project code and live demos.
  * `ResumeManager`: Manages the download and preview functionality for your resume files.
  * `CertificateManager`: Contains a placeholder function for certificate verification.
  * `Typewriter`: Animates the hero title on the homepage by typing it out one character at a time.
  * `StateManager`: Ensures the website handles browser back/forward buttons correctly.
  * `showDigitalGlitch`: Displays a brief, randomized binary code glitch at a random screen position.
  * `showSpiralAnimation`: Causes a spiral animation to appear and disappear at a random location on the page.
  * `showRobotAnimation`: Triggers a robot animation to appear at random times and locations on the page.
  * `showAISoundAnimation`: Displays an AI sound wave animation at random intervals
  * `triggerPageGlitch`: Initiates a full-page glitch effect at random intervals.

**Important**: To make the website fully functional, you must update the placeholder alert messages in classes like `PortfolioManager`, `ResumeManager`, and `CertificateManager` with your actual links or custom functionality.

-----

## 🚀 Deployment and Maintenance

The website is a static site, which means it can be hosted anywhere.

  * **Hosting**: You can deploy it on services like **GitHub Pages**, **Netlify**, or **Vercel** for free.
  * **Updates**: To keep your website current, regularly update the `index.html` file with your latest experience, projects, and skills.
