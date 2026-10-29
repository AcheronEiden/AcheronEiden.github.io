export const profileData = {
    title: "Alhassan Jawad",
    subtitle: "Electrical Engineer ⚡ | OT-Security Engineer 🛡️",
    location: "Stockholm, Sweden",
    email: "alhassan0000@yahoo.com",
    phone: "+46 76 281 8440",
    phoneDisplay: "+46 76 281 8440"
};

export const skillsData = {
    // 1. OT/ICS, Control & Security (From the technical CV alignment)
    engineeringSecurity: {
        category: "OT/ICS & Infrastructure Security",
        items: [
            { name: "Industrial Cybersecurity", desc: "NIST SP 800-82, ISO/IEC 27001, SCADA/ICS segmentation, cell protection" },
            { name: "Active Directory & Identity", desc: "Role-Based Access Control (RBAC), Least-Privilege enforcement, LDAP auditing" },
            //{ name: "Industrial Networking", desc: "VLAN segmentation, subnets, TCP/IP, switch and router staging" },
            { name: "Embedded Firmware & Low-Level", desc: "Bare-metal registers, timer interrupts (ISRs), C/C++ on ESP32 & ATmega328P" },
            //{ name: "Hardware Interfacing Protocols", desc: "I2C non-blocking state machines, SPI, UART communication buses" }
        ]
    },

    // 2. All Your Programming Languages (Percentages removed, cards retained)
    programmingLanguages: {
        category: "Programming Languages",
        items: [
            { name: "Python", desc: "Data analysis, machine learning, automation" },
            { name: "C/C++", desc: "Low-level system programming, embedded systems" },
            { name: "Java", desc: "Object-oriented design, backend algorithms, and AI applications" },
            { name: "SQL", desc: "Relational database querying, time-series data indexing, and schema design (PostgreSQL/MySQL) & management" },
            { name: "JavaScript", desc: "Modern web design and responsive layouts" },
            { name: "TypeScript", desc: "Adaptive & User-Centric Design" },
            { name: "HTML5 / CSS3", desc: "Frontend web development" },
            { name: "Haskell & Assembly (MIPS)", desc: "Low-level computer architecture/registers" },
            { name: "R", desc: "Statistical computing, numerical data manipulation, and scientific visualization" }
        ]
    },

    // 3. Technical & Electrical Skills
    technicalElectrical: {
        category: "Technical & Electrical Engineering",
        items: [
            { name: "Control Systems", desc: "Multivariable control (MIMO), state-space modeling, feedback control loops, HIL simulation" },
            { name: "System Optimization", desc: "Performance tuning and efficiency improvements" },
            { name: "Data Analysis", desc: "Statistical analysis and data visualization + predictive modeling + optimization" },
            { name: "Machine Learning", desc: "ML algorithms and model deployment" }
        ]
    },

    // 4. Soft Skills
    softSkills: {
        category: "Professional & Soft Skills",
        items: [
            { name: "Problem Solving", desc: "Creative thinking and innovative solutions" },
            { name: "Strategic Planning", desc: "Strategic thinking and long-term vision" },
            { name: "Team & Time Management", desc: "Effective team collaboration and project management" },
            { name: "Effective Communication", desc: "Clear and concise communication with technical and non-technical audiences" },
            { name: "Technical Mentorship", desc: "Guiding junior engineers and students through hands-on laboratory instrumentation" },
            { name: "Adaptability", desc: "Always ready to learn and adapt to new technologies and challenges" }
        ]
    },

    // 5. Architectural & Core Concepts
    architecturalConcepts: {
        category: "Architectural & Core Concepts",
        items: [
            { name: "Separation of Concerns (SoC)", desc: "The principle of dividing an application into distinct sections. I apply this by separating data logic, UI, and user input handling in my projects to improve maintainability and scalability." },
            { name: "Client-Server Architecture", desc: "A foundational model where a 'client' requests services from a centralized 'server'. All my full-stack projects, like the e-commerce platform, are built on this model to manage data and user interactions seamlessly." },
            { name: "Software & Network Infrastructure", desc: "Knowledge of the underlying structure needed for software. This includes deploying applications on cloud platforms and configuring the necessary environment for them to run effectively." },
            { name: "REST APIs", desc: "Designing and consuming APIs for efficient communication. I have experience consuming third-party REST APIs for features like payment processing and designing API endpoints for new applications." },
            { name: "Monolithic vs. Microservices", desc: "Understanding the trade-offs between a single, unified 'Monolith' versus smaller, independent 'Microservices'. This knowledge informs my architectural decisions for new projects based on their specific needs." },
            { name: "SOLID Principles", desc: "Five core design principles in object-oriented programming. I follow these principles when writing code to create software that is understandable, flexible, and maintainable over time." }
        ]
    },

    // 6. Tools & Technologies Categorized (With Data Tooltips intact)
    toolsAndTechnologies: [
        {
            title: "Core Methodologies",
            badges: [
                { name: "Agile Methodologies", tooltip: "Manages tasks in short, iterative cycles" },
                { name: "Unit Testing", tooltip: "Testing individual components of an application" }
            ]
        },
        {
            title: "Development Tools",
            badges: [
                { name: "Git", tooltip: "Distributed version control system" },
                { name: "GitHub", tooltip: "A web-based hosting service for Git repositories" },
                { name: "VS Code", tooltip: "Lightweight code editor by Microsoft" },
                { name: "IntelliJ IDEA", tooltip: "Powerful IDE primarily for Java and backend development" },
                { name: "Eclipse", tooltip: "A popular IDE for Java and other programming languages" },
                { name: "Jupyter", tooltip: "Web-based notebook for data science and Python" },
                { name: "MatLab", tooltip: "Platform for numerical computing and simulation" },
                { name: "LabView", tooltip: "Graphical programming for measurement and automation" },
                { name: "PSpice & LTspice", tooltip: "Simulation and circuit design (Electrical Eng.)" },
                { name: "Altium", tooltip: "PCB and electronic design automation (Electrical Eng.)" },
                { name: "Simulink", tooltip: "Block diagram environment for simulation (MATLAB)" },
                { name: "SolidWorks", tooltip: "3D CAD software for design and simulation" },
                { name: "Postman", tooltip: "Platform for building, testing, and debugging APIs" },
                { name: "Docker", tooltip: "Platform for building and running containerized applications" }
            ]
        },
        {
            title: "Frameworks & Libraries",
            badges: [
                { name: "React", tooltip: "A JavaScript library for building user interfaces" },
                { name: "Node.js", tooltip: "A JavaScript runtime for server-side development" },
                { name: "NumPy & SciPy", tooltip: "Python libraries for scientific computing and data analysis" },
                { name: "Pandas", tooltip: "A Python library for data manipulation and analysis" },
                { name: "Matplotlib", tooltip: "A Python library for creating static and interactive plots" },
                { name: "TensorFlow", tooltip: "An open-source library for machine learning" },
                { name: "Angular", tooltip: "A JavaScript/TypeScript framework for building web applications" }
            ]
        },
        {
            title: "Databases & Cloud",
            badges: [
                { name: "MySQL", tooltip: "Open-source relational database management system" },
                { name: "Firebase", tooltip: "Backend-as-a-Service (BaaS) platform by Google" },
                { name: "Azure", tooltip: "Microsoft's cloud computing platform" },
                { name: "Google Cloud", tooltip: "Google's cloud computing platform" },
                { name: "DBeaver", tooltip: "Universal database tool for developers and DBAs" },
                { name: "Apache", tooltip: "Popular open-source HTTP web server" }
            ]
        },
        {
            title: "Platforms & CMS",
            badges: [
                { name: "Shopify", tooltip: "An e-commerce platform for online stores" },
                { name: "WordPress", tooltip: "A popular content management system (CMS)" }
            ]
        }
    ]
};

export const experienceData = [
    {
        title: "IT Infrastructure Specialist",
        company: "Abbott Laboratories",
        badge: "BTS Facility Infrastructure",
        date: "Sep 2026 - Present",
        duties: [
            "Resolve complex hardware and facility network infrastructure faults across Nordic sites (Sweden, Denmark, Finland) as Tier 3 technical escalation.",
            "Enforce Role-Based Access Control (RBAC) and least-privilege principles within Active Directory.",
            "Configure network switches, routers, and secure subnets (VLANs) to maintain local network segmentation.",
            "Execute PowerShell automation scripts to standardize OS configurations and endpoint compliance checks."
        ]
    },
    {
        title: "Software Engineer",
        company: "Portabel Health",
        badge: "Internship",
        date: "Sep 2025 - Dec 2025",
        duties: [
            "Managed backend relational schemas and optimized SQL queries in PostgreSQL for time-series data storage.",
            "Standardized Git branching protocols and change documentation to establish strict codebase traceability.",
            "Executed functional test suites across development and pre-production environments to validate backend data pipelines."
        ]
    },
    {
        title: "Programmer",
        company: "Bonn Bonn AB",
        badge: "Contract",
        date: "June 2025 - Sep 2025",
        duties: [
            "Configured website infrastructure and integrated payment gateways.",
            "Configured DNS routing and basic SEO indexing parameters."
        ]
    },
    {
        title: "Teaching Assistant in Programming",
        company: "Uppsala University",
        badge: "Information Technology",
        date: "Aug 2023 - July 2025",
        duties: [
            "Instructed laboratory sessions for 50+ engineering students across circuit analysis, embedded programming, and physical instrumentation.",
            "Conducted debugging sessions utilizing mixed-signal oscilloscopes and multimeters while enforcing high-voltage safety protocols.",
            "Calibrated and verified physical measurement test benches to ensure signal integrity."
        ]
    },
    {
        title: "Co-founder & Chief Technology Officer (CTO)",
        company: "NordicFlip",
        badge: "Startup",
        date: "March 2023 - June 2024",
        duties: [
            "Oversaw development and maintenance of company digital platforms as lead programmer.",
            "Defined the technical roadmap and implemented new web functionality.",
            "Maintained deployment stability and digital asset security."
        ]
    },
    {
        title: "Co-founder (CMO & CFO)",
        company: "RARE",
        badge: "Entrepreneurship Program",
        date: "June 2018 - Sep 2018",
        duties: [
            "Co-founded a recycling venture as part of a government entrepreneurship summer program.",
            "Managed early-stage business execution, financial tracking, and marketing outreach."
        ]
    }
];

export const educationData = [
    {
        degree: "Master of Science (M.Sc.) in Electrical Engineering",
        institution: "Department of Electrical Engineering | Uppsala University, Sweden",
        specialization: "Control of electrical systems",
        date: "2025 - 2027",
        badge: "In Progress"
    },
    {
        degree: "Bachelor of Science (B.Sc.) in Electrical Engineering",
        institution: "Department of Electrical Engineering | Uppsala University, Sweden",
        specialization: "Core Coursework: Linear dynamic systems, feedback control, and signal conditioning",
        date: "2019 - 2022",
        badge: "Graduated"
    }
];

export const languagesData = [
    {
        name: "English",
        proficiency: "Fluent",
        badge: "EN"
    },
    {
        name: "Swedish",
        proficiency: "Fluent",
        badge: "SV"
    },
    {
        name: "Arabic",
        proficiency: "Native",
        badge: "AR"
    }
];

export const projectsData = [
    {
        categoryTitle: "Engineering Projects",
        items: [
            {
                title: "Automated Aeroponic Cultivation System",
                type: "University Project (Master's Thesis)",
                company: "Internal Collaboration | Uppsala University (2025)",
                icon: "🌿",
                status: "Completed",
                category: "Embedded Systems & Control",
                description: "Developed and implemented a rule-based control algorithm on an ESP32 microcontroller to regulate temperature and humidity in a MIMO (Multiple-Input Multiple-Output) aeroponics system. Utilized IoT sensors for real-time data acquisition to automate a sustainable cultivation environment.",
                features: [
                    "Rule-based control algorithm",
                    "ESP32 Microcontroller programming",
                    "IoT Sensor integration",
                    "MIMO System control",
                    "Sustainable agriculture technology"
                ],
                tags: ["Embedded C/C++", "IoT Sensors", "Control Systems", "Real-time Systems"],
                link: "https://uu.diva-portal.org",
                linkText: "Read Thesis (Locked until 2028)"
            },
            {
                title: "Hardware-in-the-Loop Elevator Prototype",
                type: "Academic Project",
                company: "Uppsala University | 10 ECTS (2023)",
                icon: "⚙️",
                status: "Completed",
                category: "Control Systems",
                description: "Constructed and verified a physical three-level elevator prototype using a Hardware-in-the-Loop (HIL) testbench. Designed deterministic finite-state machines (FSM) and motor velocity profiles in LabVIEW.",
                features: [
                    "Hardware-in-the-Loop (HIL) testbench validation",
                    "Deterministic finite-state machine (FSM) design",
                    "Physical limit switch safety interlocks"
                ],
                tags: ["LabVIEW", "HIL", "Finite State Machines"],
                link: null,
                linkText: null
            },
            {
                title: "Smart Building Energy Management System",
                type: "University Project (Bachelor's Thesis)",
                company: "Studenternas IP, Uppsala (2022)",
                icon: "⚡",
                status: "Completed",
                category: "Power Engineering",
                description: "Developed and implemented a real-time data analysis and control system to optimize energy usage in a commercial property. The system utilized IoT sensors and predictive algorithms to manage power flexibility effectively.",
                features: [
                    "Achieved a 35% reduction in peak electricity consumption",
                    "Real-time energy monitoring dashboard",
                    "Predictive maintenance algorithms",
                    "Automated energy consumption reporting"
                ],
                tags: ["Python", "MATLAB", "IoT Sensors", "Control Systems", "Data Analytics"],
                link: "https://uu.diva-portal.org/smash/record.jsf?pid=diva2%3A1678189&dswid=-6938",
                linkText: "Read Thesis"
            },
            {
                title: "Multi-Layer Telemetry Unit & Custom PCB",
                type: "Academic Project",
                company: "Uppsala University | 10 ECTS (2022)",
                icon: "🔌",
                status: "Completed",
                category: "Hardware Design",
                description: "Designed a multi-layer PCB in Altium Designer, routing for trace clearance, high-frequency signal integrity, and analog/digital domain isolation. Developed bare-metal C firmware on an ATmega328P to parse NMEA sentences into formatted TCP telemetry payloads.",
                features: [
                    "Multi-layer PCB layout and trace clearance design in Altium",
                    "Bare-metal register programming on ATmega328P",
                    "UART to TCP/IP packet serialization"
                ],
                tags: ["Altium Designer", "ATmega328P", "UART", "TCP/IP"],
                link: null,
                linkText: null
            }
        ]
    },
    {
        categoryTitle: "Software Projects",
        items: [
            {
                title: "E-commerce Platform with Payment Integration",
                type: "Professional Project (2025)",
                company: "Company: Bonn Bonn AB",
                icon: "🌐",
                status: "Online",
                category: "Frontend Development",
                description: "Built a complete e-commerce website with integrated payment systems, social media connectivity, and SEO optimization.",
                features: [
                    "Responsive web design",
                    "Secure payment processing",
                    "Social media integration",
                    "SEO optimization",
                    "Email marketing system"
                ],
                tags: ["Shopify", "JavaScript", "HTML/CSS", "SEO Tools"],
                link: "https://bonnbonn.se",
                linkText: "Visit Store"
            }
        ]
    }
];

export const publicationsData = [
    {
        title: "Improvement of an Automated Aeroponic Plant Cultivation System",
        type: "Master's Degree Thesis",
        field: "Electrical Engineering",
        university: "Uppsala University",
        year: "2025",
        citations: "14",
        pages: "pp. 100",
        abstract: "This thesis presents an automated aeroponic cultivation system, advancing sustainable agriculture by efficiently controlling a plant's environment. The core of the system is a rule-based algorithm on an ESP32 microcontroller that regulates temperature and humidity. The research demonstrates the algorithm's effectiveness in maintaining stable conditions, offering a more reliable and energy-efficient solution for sustainable, small-scale farming.",
        tags: ["Aeroponics", "IoT Sensors", "MIMO Systems", "Control Algorithm"],
        link: "https://uu.diva-portal.org",
        pdfLink: "masters-degree-thesis-electrical-engineering.pdf",
        pdfBtnText: "View PDF (Locked until 2028)",
        linkBtnText: "Link (Locked until 2028)",
        isLocked: true
    },
    {
        title: "Power flexibility in a property: Independent Project in Electrical Engineering",
        type: "Bachelor's Degree Thesis",
        field: "Electrical Engineering",
        university: "Uppsala University",
        year: "2022",
        citations: "10",
        pages: "pp. 100",
        urn: "urn:nbn:se:uu:diva-479221",
        oai: "oai:DiVA.org:uu-479221",
        diva: "diva2:1678189",
        abstract: "This thesis presents a novel approach to energy optimization in commercial buildings using real-time control systems and machine learning algorithms. Our method achieved a 35% reduction in electricity consumption while maintaining optimal comfort levels.",
        tags: ["Smart Buildings", "Energy Optimization", "Control Systems", "Data Analysis"],
        link: "https://uu.diva-portal.org/smash/record.jsf?pid=diva2%3A1678189&dswid=-6938",
        pdfLink: "bachelors-degree-thesis-electrical-engineering.pdf"
    }
];

export const certificatesData = [
    {
        title: "Vetted Software & Electronic Engineer",
        issuer: "micro1",
        date: "April 2026",
        badge: "Vetted Talent",
        description: "Passed an AI-led technical vetting process validating expertise in bridging high-fidelity hardware simulation and modern software environments.",
        skills: ["Ngspice Circuit Simulation", "Analog & Digital Electronics", "Technical Documentation", "Cross-Team Validation"],
        url: "micro1.png"
    },
    {
        title: "Professional Cloud AI Engineer",
        issuer: "Google Cloud",
        date: "March 2026",
        badge: "Professional",
        description: "Certification demonstrating skills managing AI models, agentic AI solutions, and deploying them in production environments.",
        skills: ["Artificial Intelligence Development", "Agentic AI Solutions", "Meta Prompting","Workflow Management"],
        url: "https://coursera.org/share/7c127defea329d2049ceaad2f0114f92"
    }
];

export const resumesData = [
    {
        title: "Resume - English",
        category: "Electrical Engineering & OT-Security",
        lang: "English",
        flag: "EN",
        size: "125 KB",
        date: "October 2026",
        file: "English CV.pdf"
    },
    {
        title: "Resume - Swedish",
        category: "Elektroteknik & OT-Säkerhet",
        lang: "Swedish",
        flag: "SV",
        size: "132 KB",
        date: "October 2026",
        file: "Swedish CV.pdf"
    }
];

export const contactData = {
    intro: "I am always interested in discussing new opportunities, engineering collaborations, or infrastructure security projects. Feel free to reach out through any of the channels below.",
    items: [
        {
            title: "Phone",
            value: "+46 76 281 8440",
            desc: "Available for calls 09:00 - 20:00 (CET)",
            icon: "📞",
            actionType: "link",
            link: "tel:+46762818440",
            btnText: "Call Now"
        },
        {
            title: "Location",
            value: "Stockholm, Sweden",
            desc: "Based in Stockholm • Open to on-site & remote roles",
            icon: '<i class="fa-solid fa-location-dot"></i>',
            actionType: "link",
            link: "https://www.google.com/maps/place/Stockholm",
            btnText: "View on Map"
        },
        {
            title: "LinkedIn",
            value: "linkedin.com/in/alhassanjawad",
            desc: "Connect for professional networking",
            icon: '<i class="fa-brands fa-linkedin"></i>',
            actionType: "link",
            link: "https://linkedin.com/in/alhassanjawad",
            btnText: "Visit LinkedIn"
        },
        {
            title: "GitHub",
            value: "github.com/AcheronEiden",
            desc: "Explore repositories, firmware, and codebases",
            icon: '<i class="fa-brands fa-github"></i>',
            actionType: "link",
            link: "https://github.com/AcheronEiden",
            btnText: "Visit GitHub"
        },
        {
            title: "Availability",
            value: "Schedule a Consultation",
            desc: "Book a direct 30-minute discussion",
            icon: "📅",
            actionType: "link",
            link: "https://calendly.com/alhassan0000/30min",
            btnText: "Book a Meeting"
        }
    ]
};