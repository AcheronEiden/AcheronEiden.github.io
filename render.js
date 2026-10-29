import { 
    skillsData, 
    experienceData, 
    educationData,
    languagesData,
    projectsData, 
    publicationsData, 
    certificatesData, 
    resumesData,
    contactData
} from './data.js';

export function renderAll() {
    renderSkills();
    renderExperience();
    renderEducation();
    renderLanguages();
    renderProjects();
    renderPublications();
    renderCertificates();
    renderResumes();
    renderContact();
}

function renderSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;

    // 1. Render all Card Categories (OT Security, Programming, Technical, Soft, Architecture)
    const cardCategories = [
        skillsData.engineeringSecurity,
        skillsData.programmingLanguages,
        skillsData.technicalElectrical,
        skillsData.softSkills,
        skillsData.architecturalConcepts
    ];

    const cardsHtml = cardCategories.map(cat => `
        <div class="skills-category">
            <h3 class="category-title">${cat.category}</h3>
            <div class="skills-grid">
                ${cat.items.map(item => `
                    <div class="skill-card">
                        <div class="skill-header">
                            <h4>${item.name}</h4>
                        </div>
                        <p class="skill-description">${item.desc}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');

    // 2. Render Tools & Technologies with Tooltip Badges
    const toolsHtml = `
        <div class="section section-alt" style="border-radius: 1rem; margin-top: 2rem; padding: 2rem 1rem;">
            <div class="container">
                <h3 class="category-title">Tools & Technologies</h3>
                <div class="tools-grid">
                    ${skillsData.toolsAndTechnologies.map(toolCat => `
                        <div class="tool-category">
                            <h4>${toolCat.title}</h4>
                            <div class="badge-container">
                                ${toolCat.badges.map(b => `
                                    <span class="badge badge-outline" data-tooltip="${b.tooltip}">${b.name}</span>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    container.innerHTML = cardsHtml + toolsHtml;
}

function renderExperience() {
    const container = document.getElementById('experience-container');
    if (!container) return;

    container.innerHTML = experienceData.map(exp => `
        <div class="experience-card">
            <div class="card-header">
                <div class="job-info">
                    <h3>${exp.title}</h3>
                    <p class="company">${exp.company}</p>
                    ${exp.badge ? `<span class="badge badge-outline">${exp.badge}</span>` : ''}
                </div>
                <span class="date">${exp.date}</span>
            </div>
            <div class="card-content">
                <ul class="job-duties">
                    ${exp.duties.map(duty => `<li>${duty}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    container.innerHTML = projectsData.map(group => `
        <div class="projects-section-group" style="width: 100%; margin-bottom: 3.5rem;">
            <h3 class="category-title" style="text-align: left; margin-bottom: 1.5rem; border-bottom: 2px solid var(--color-border); padding-bottom: 0.5rem;">
                ${group.categoryTitle}
            </h3>
            <!-- Inner grid ensures cards display in 2 or 3 responsive columns, but the section itself is 100% full-width row -->
            <div class="portfolio-grid">
                ${group.items.map(proj => `
                    <div class="project-card">
                        <div class="project-header">
                            <div class="project-icon">${proj.icon}</div>
                            <div class="project-info">
                                <h3>${proj.title}</h3>
                                <p class="project-type">${proj.type}</p>
                                ${proj.company ? `<p class="project-type">${proj.company}</p>` : ''}
                            </div>
                            <span class="badge badge-deployed">${proj.status}</span>
                        </div>
                        <span class="badge category-badge">${proj.category}</span>
                        <div class="project-content">
                            <p>${proj.description}</p>
                            
                            ${proj.features && proj.features.length > 0 ? `
                                <h4>Key Features</h4>
                                <ul class="job-duties" style="margin-bottom: 1rem;">
                                    ${proj.features.map(f => `<li>${f}</li>`).join('')}
                                </ul>
                            ` : ''}

                            <h4>Technologies Used</h4>
                            <div class="badge-container">
                                ${proj.tags.map(tag => `<span class="badge badge-outline">${tag}</span>`).join('')}
                            </div>

                            ${proj.link ? `
                            <div class="project-actions" style="margin-top: 1.5rem;">
                                <button class="btn btn-outline" onclick="window.open('${proj.link}', '_blank', 'noopener');">${proj.linkText}</button>
                            </div>` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function renderPublications() {
    const container = document.getElementById('publications-container');
    if (!container) return;

    container.innerHTML = publicationsData.map(pub => {
        // Fallback or custom text
        const pdfText = pub.pdfBtnText || "View PDF";
        const linkText = pub.linkBtnText || "Link";

        // Click handler: if locked and file is unavailable, show notification
        const pdfClick = pub.isLocked && !pub.pdfLink 
            ? "alert('This publication is locked under an embargo until 2028.');" 
            : `window.open('${pub.pdfLink}', '_blank', 'noopener');`;

        const linkClick = pub.isLocked && !pub.link 
            ? "alert('This link is locked under an embargo until 2028.');" 
            : `window.open('${pub.link}', '_blank', 'noopener');`;

        return `
            <div class="publication-card">
                <div class="publication-header">
                    <div class="publication-icon">📄</div>
                    <div class="publication-info">
                        <span class="badge">${pub.type}</span>
                        <span class="badge category-badge">${pub.field || pub.type2 || 'Electrical Engineering'}</span>
                        <span class="badge category-badge">${pub.university}</span>
                        <h3>${pub.title}</h3>
                    </div>
                    <span class="badge badge-published">Published</span>
                </div>
                <div class="publication-content">
                    <div class="publication-details">
                        <div class="detail-section">
                            <h4>Publication Details</h4>
                            <p><strong>Year:</strong> ${pub.year}</p>
                            ${pub.pages ? `<p><strong>Pages:</strong> ${pub.pages}</p>` : ''}
                            <p><strong>Citations:</strong> ${pub.citations}</p>
                            ${pub.urn ? `<p><strong>URN:</strong> ${pub.urn}</p>` : ''}
                            ${pub.oai ? `<p><strong>OAI:</strong> ${pub.oai}</p>` : ''}
                            ${pub.diva ? `<p><strong>DiVA ID:</strong> ${pub.diva}</p>` : ''}
                        </div>
                    </div>

                    <div class="abstract-section">
                        <h4>Abstract</h4>
                        <p>${pub.abstract}</p>
                    </div>

                    <div class="keywords-section">
                        <h4>Keywords</h4>
                        <div class="badge-container">
                            ${pub.tags.map(tag => `<span class="badge badge-outline">${tag}</span>`).join('')}
                        </div>
                    </div>

                    <div class="publication-actions">
                        ${pub.pdfLink || pub.isLocked ? `
                            <button class="btn btn-outline" onclick="${pdfClick}">${pdfText}</button>
                        ` : ''}
                        ${pub.link || pub.isLocked ? `
                            <button class="btn btn-outline" onclick="${linkClick}">${linkText}</button>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function renderCertificates() {
    const container = document.getElementById('certificates-container');
    if (!container) return;

    container.innerHTML = certificatesData.map(cert => `
        <div class="certificate-card">
            <div class="certificate-header">
                <div class="certificate-info">
                    <h3>${cert.title}</h3>
                    <p class="issuer">${cert.issuer}</p>
                </div>
                <span class="badge badge-professional">${cert.badge}</span>
            </div>
            <div class="certificate-content">
                <p>${cert.description}</p>
                <div class="certificate-date">
                    <h4>Date Obtained</h4>
                    <p>${cert.date}</p>
                </div>
                <div class="skills-validated">
                    <h4>Skills Validated</h4>
                    <div class="badge-container">
                        ${cert.skills.map(skill => `<span class="badge badge-outline">${skill}</span>`).join('')}
                    </div>
                </div>
                <button class="btn btn-outline" data-action="verify" data-url="${cert.url}">Verify Certificate</button>
            </div>
        </div>
    `).join('');
}

function renderResumes() {
    const container = document.getElementById('resume-container');
    if (!container) return;

    container.innerHTML = resumesData.map(res => `
        <div class="resume-card">
            <div class="resume-header">
                <div class="resume-icon">📄</div>
                <div class="resume-info">
                    <h3>${res.title}</h3>
                    <p>${res.category}</p>
                </div>
                <div class="language-flag">${res.flag}</div>
            </div>
            <div class="resume-badges">
                <span class="badge badge-outline">PDF</span>
            </div>
            <div class="resume-content">
                <div class="resume-details">
                    <div class="detail-section">
                        <h4>Language</h4><p>${res.lang}</p>
                    </div>
                    <div class="detail-item">
                        <h4>File Size</h4><p>${res.size}</p>
                    </div>
                </div>
                <div class="last-updated">
                    <h4>📅 Last Updated</h4><p>${res.date}</p>
                </div>
                <div class="resume-actions">
                    <button class="btn btn-primary" data-action="download" data-file="${res.file}">Download</button>
                    <button class="btn btn-outline" data-action="preview" data-file="${res.file}">Preview</button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderEducation() {
    const container = document.getElementById('education-container');
    if (!container) return;

    container.innerHTML = educationData.map(edu => `
        <div class="card">
            <div class="card-header">
                <div>
                    <h3>${edu.degree}</h3>
                    <p class="company">${edu.institution}</p>
                    <p class="specialization">${edu.specialization}</p>
                </div>
                <div style="text-align: right;">
                    <span class="date">${edu.date}</span><br>
                    <span class="badge badge-outline" style="margin-top: 5px;">${edu.badge}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function renderLanguages() {
    const container = document.getElementById('languages-container');
    if (!container) return;

    container.innerHTML = languagesData.map(lang => `
        <div class="skill-card">
            <div class="skill-header">
                <h4>${lang.name}</h4>
            </div>
            <p class="skill-description">${lang.proficiency}</p>
        </div>
    `).join('');
}

function renderContact() {
    const introEl = document.getElementById('contact-intro');
    const dynamicContainer = document.getElementById('contact-cards-container');

    if (introEl && contactData.intro) {
        introEl.textContent = contactData.intro;
    }

    if (!dynamicContainer) return;

    dynamicContainer.innerHTML = contactData.items.map(item => `
        <div class="contact-card">
            <div class="contact-icon">${item.icon}</div>
            <h3>${item.title}</h3>
            <p class="contact-value">${item.value}</p>
            <p class="contact-description">${item.desc}</p>
            <a href="${item.link}" target="_blank" rel="noopener" class="btn btn-outline">${item.btnText}</a>
        </div>
    `).join('');
}