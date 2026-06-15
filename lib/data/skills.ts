// Content for the Skills page.

// A skill that may have a progress level (0-100) or just a description.
export type Skill = {
  name: string
  level?: number
  description: string
}

export type SkillCategory = {
  title: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 80, description: "Data analysis, machine learning, automation" },
      { name: "Java", level: 30, description: "AI applications" },
      { name: "C/C++", level: 30, description: "System programming, embedded systems" },
      { name: "TypeScript", level: 30, description: "Adaptive & User-Centric Design" },
      { name: "JavaScript", level: 65, description: "Modern web design and responsive layouts" },
      { name: "HTML/CSS", level: 70, description: "Frontend web development" },
      { name: "Haskell & Assembly (MIPS assembly)", level: 35, description: "Low-level programming" },
      { name: "R", level: 30, description: "Statistical computing and graphics" },
      { name: "SQL", level: 40, description: "Database querying and management" },
    ],
  },
  {
    title: "Technical & Electrical Skills",
    skills: [
      { name: "System Optimization", level: 80, description: "Performance tuning and efficiency improvements" },
      {
        name: "Data Analysis",
        level: 90,
        description: "Statistical analysis and data visualization + predictive modeling + optimization",
      },
      { name: "Machine Learning", level: 55, description: "ML algorithms and model deployment" },
      {
        name: "Embedded Systems & IoT",
        level: 45,
        description: "Microcontroller programming and IoT device integration",
      },
      { name: "Control Systems", level: 60, description: "Control theory and applications" },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Problem Solving", level: 80, description: "Creative thinking and innovative solutions" },
      { name: "Strategic Planning", level: 90, description: "Strategic thinking and long-term vision" },
      { name: "Team & Time Management", level: 80, description: "Effective team collaboration and project management" },
      {
        name: "Effective Communication",
        level: 90,
        description: "Clear and concise communication with technical and non-technical audiences",
      },
      {
        name: "Technical Mentorship",
        level: 80,
        description: "Guiding and assisting others in their technical learning and development.",
      },
      { name: "Adaptability", level: 100, description: "Always ready to learn and adapt to new technologies and challenges" },
      { name: "Self-taught", level: 90, description: "Programmer with a passion for learning" },
    ],
  },
  {
    title: "Architectural & Core Concepts",
    skills: [
      {
        name: "Separation of Concerns (SoC)",
        description:
          "The principle of dividing an application into distinct sections. I apply this by separating data logic, UI, and user input handling in my projects to improve maintainability and scalability.",
      },
      {
        name: "Client-Server Architecture",
        description:
          "A foundational model where a 'client' requests services from a centralized 'server'. All my full-stack projects, like the e-commerce platform, are built on this model to manage data and user interactions seamlessly.",
      },
      {
        name: "Software Infrastructure",
        description:
          "Knowledge of the underlying structure needed for software. This includes deploying applications on cloud platforms and configuring the necessary environment for them to run effectively.",
      },
      {
        name: "REST APIs",
        description:
          "Designing and consuming APIs for efficient communication. I have experience consuming third-party REST APIs for features like payment processing and designing API endpoints for new applications.",
      },
      {
        name: "Monolithic vs. Microservices",
        description:
          "Understanding the trade-offs between a single, unified 'Monolith' versus smaller, independent 'Microservices'. This knowledge informs my architectural decisions for new projects based on their specific needs.",
      },
      {
        name: "SOLID Principles",
        description:
          "Five core design principles in object-oriented programming. I follow these principles when writing code to create software that is understandable, flexible, and maintainable over time.",
      },
    ],
  },
]

export type Tool = {
  name: string
  tooltip: string
}

export type ToolCategory = {
  title: string
  tools: Tool[]
}

export const toolCategories: ToolCategory[] = [
  {
    title: "Core Skills & Methodologies",
    tools: [
      { name: "Agile Methodologies", tooltip: "Manages tasks in short, iterative cycles" },
      { name: "Unit Testing", tooltip: "Testing individual components of an application" },
    ],
  },
  {
    title: "Development Tools",
    tools: [
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
      { name: "Docker", tooltip: "Platform for building and running containerized applications" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    tools: [
      { name: "React", tooltip: "A JavaScript library for building user interfaces" },
      { name: "Node.js", tooltip: "A JavaScript runtime for server-side development" },
      { name: "NumPy & SciPy", tooltip: "Python libraries for scientific computing and data analysis" },
      { name: "Pandas", tooltip: "A Python library for data manipulation and analysis" },
      { name: "Matplotlib", tooltip: "A Python library for creating static and interactive plots" },
      { name: "TensorFlow", tooltip: "An open-source library for machine learning" },
      { name: "Angular", tooltip: "A JavaScript/TypeScript framework for building web applications" },
    ],
  },
  {
    title: "Databases & Cloud",
    tools: [
      { name: "MySQL", tooltip: "Open-source relational database management system" },
      { name: "Firebase", tooltip: "Backend-as-a-Service (BaaS) platform by Google" },
      { name: "Azure", tooltip: "Microsoft's cloud computing platform" },
      { name: "Google Cloud", tooltip: "Google's cloud computing platform" },
      { name: "DBeaver", tooltip: "Universal database tool for developers and DBAs" },
      { name: "Apache", tooltip: "Popular open-source HTTP web server" },
    ],
  },
  {
    title: "Platforms & CMS",
    tools: [
      { name: "Shopify", tooltip: "An e-commerce platform for online stores" },
      { name: "WordPress", tooltip: "A popular content management system (CMS)" },
    ],
  },
]
