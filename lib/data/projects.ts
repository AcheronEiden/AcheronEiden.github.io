// Content for the Portfolio page.

export const portfolioIntro =
  "A showcase of my technical projects in electrical engineering, software development, and full-stack web applications. Each project demonstrates my ability to apply skills to create innovative and practical solutions."

export type ProjectAction = {
  label: string
  url: string
}

export type Project = {
  icon: string
  title: string
  // Lines shown under the title (project type, company, date, etc.)
  meta: string[]
  // Status badge in the top-right of the card header.
  status: { label: string; variant: "badge-deployed" | "badge-completed" }
  // Category tags shown below the header.
  categories: string[]
  description: string
  features: { heading: string; items: string[] }[]
  technologies: string[]
  actions: ProjectAction[]
}

export const projects: Project[] = [
  {
    icon: "🌐",
    title: "E-commerce Platform with Payment Integration",
    meta: ["Professional Project", "Company: Bonn Bonn AB"],
    status: { label: "Online", variant: "badge-deployed" },
    categories: ["Frontend Development"],
    description:
      "Built a complete e-commerce website with integrated payment systems, social media connectivity, and SEO optimization.",
    features: [
      {
        heading: "Key Features",
        items: [
          "Responsive web design",
          "Secure payment processing",
          "Social media integration",
          "SEO optimization",
          "Email marketing system",
        ],
      },
    ],
    technologies: ["Shopify", "JavaScript", "HTML/CSS", "SEO Tools"],
    actions: [{ label: "Visit Store", url: "https://bonnbonn.se" }],
  },
  {
    icon: "🌿",
    title: "Automated Aeroponic Cultivation System",
    meta: ["University Project (Master's Thesis)", "[Cooperated internally with Uppsala University]", "Date: 2025"],
    status: { label: "Completed", variant: "badge-deployed" },
    categories: ["Electrical Engineering", "Embedded Systems", "IoT"],
    description:
      "Developed and implemented a rule-based control algorithm on an ESP32 microcontroller to regulate temperature and humidity in a MIMO (Multiple-Input Multiple-Output) aeroponics system. Utilized IoT sensors for real-time data acquisition to automate a sustainable cultivation environment",
    features: [
      {
        heading: "Key Features",
        items: [
          "Rule-based control algorithm",
          "ESP32 Microcontroller programming",
          "IoT Sensor integration",
          "MIMO System control",
          "Sustainable agriculture technology",
        ],
      },
    ],
    technologies: ["Embedded C/C++", "IoT Sensors", "Control Systems", "Real-time Systems"],
    actions: [{ label: "View Publication (Locked)", url: "https://uu.diva-portal.org" }],
  },
  {
    icon: "⚡",
    title: "Smart Building Energy Management System",
    meta: [
      "University Project (Bachelor's Thesis)",
      "[Cooperated externally with Studenternas IP, Uppsala]",
      "Title: Power flexibility in a property",
      "Date: Aug 2022-Dec 2022",
    ],
    status: { label: "Completed", variant: "badge-completed" },
    categories: ["Electrical Engineering"],
    description:
      "Developed and implemented a real-time data analysis and control system to optimize energy usage in a commercial property. The system utilized IoT sensors and predictive algorithms to manage power flexibility effectively.",
    features: [
      {
        heading: "Key Achievement",
        items: [
          "Achieved a 35% reduction in the building's peak electricity consumption, demonstrating significant cost and energy savings.",
        ],
      },
      {
        heading: "Key Features",
        items: [
          "Real-time energy monitoring dashboard",
          "Predictive maintenance algorithms",
          "Automated energy consumption reporting",
        ],
      },
    ],
    technologies: ["Python", "MATLAB", "IoT Sensors", "Control Systems", "Data Analytics"],
    actions: [
      {
        label: "Read Thesis",
        url: "https://uu.diva-portal.org/smash/record.jsf?pid=diva2%3A1678189&dswid=-6938",
      },
    ],
  },
  {
    icon: "🔧",
    title: "Signal Processing Framework",
    meta: ["University Project", "Date: Jan 2022-Jun 2022"],
    status: { label: "Completed", variant: "badge-completed" },
    categories: ["Software Development", "Electrical Engineering"],
    description:
      "Developed different signal processing solutions using MATLAB and Python for analyzing complex electrical signals and extracting meaningful insights.",
    features: [
      {
        heading: "Key Features",
        items: [
          "Digital filter design and implementation",
          "Frequency domain analysis tools",
          "Real-time signal visualization",
          "Implemented anomaly detection",
        ],
      },
    ],
    technologies: ["MATLAB", "Python", "NumPy", "SciPy", "Signal Processing"],
    actions: [],
  },
]
