// Content for the Home page: hero, about, experience, education, languages.

export const hero = {
  name: "Alhassan Jawad",
  // Typed out by the typewriter effect on load.
  subtitle: "Electrical Engineer⚡| OT-Security Engineer🛡️",
  profileImage: "/profile-image.png",
  sideImage: "/Security.jpg",
  location: "Stockholm, Sweden",
  email: "alhassan000@yahoo.com",
  phone: "+46 76 281 8440",
  phoneHref: "tel:+46762818440",
}

export const aboutSkills = [
  "Embedded Systems (C/C++ & Assembly)",
  "Control Theory & Automation",
  "Python & Java",
  "Network & OT Security",
  "Linux & System Optimization",
]

export type Experience = {
  title: string
  company: string
  badge?: string
  dateStart: string
  dateEnd: string
  duties: string[]
}

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "Portabel Health",
    badge: "Internship",
    dateStart: "Sep 2025 -",
    dateEnd: "Dec 2025",
    duties: [
      "Contributed to the development and implementation of technical solutions across various projects.",
      "Improved work processes by contributing to project management and technical documentation.",
      "Applied industry best practices and technical standards to solve real-world challenges.",
    ],
  },
  {
    title: "Programmer & SEO Analyst",
    company: "Bonn Bonn AB",
    badge: "Freelance/Contract",
    dateStart: "June 2025 -",
    dateEnd: "Sep 2025",
    duties: [
      "Established the basic structure of the website and integrated payment methods and social media",
      "Fixed an email marketing system with structured strategies, and optimized and configured SEO for the website",
    ],
  },
  {
    title: "Co-founder & Chief Technology Officer (CTO)",
    company: "NordicFlip",
    badge: "Startup (Closed)",
    dateStart: "March 2023 -",
    dateEnd: "June 2024",
    duties: [
      "Oversaw the development and maintenance of all company digital assets as head programmer.",
      "Responsible for the technical roadmap and implementation of new features.",
      "Ensured website functionality and digital infrastructure were stable and secure.",
    ],
  },
  {
    title: "Co-founder & Chief Technology Officer (CTO)",
    company: "FurryTool",
    badge: "Startup (Closed)",
    dateStart: "Apr 2023 -",
    dateEnd: "Aug 2023",
    duties: [
      "Led the digital strategy and acted as head programmer for a new pet-related online store.",
      "Managed and maintained the company's website and all digital platforms.",
      "Coordinated with the team to set technical goals and deliver key features.",
    ],
  },
  {
    title: "Teaching Assistant in Programming",
    company: "Uppsala University",
    dateStart: "Aug 2023 -",
    dateEnd: "July 2025",
    duties: [
      "Assisted over 50 students per semester with concept clarification, concept explanation, and problem solving",
      "Graded assignments and examinations",
      "Collaborated with peers to develop course materials and address student inquiries",
    ],
  },
  {
    title: "Project Manager",
    company: "Uppsala University",
    dateStart: "Aug 2022 -",
    dateEnd: "Dec 2022",
    duties: [
      "Collaborated with peers and led a team to reduce electricity consumption in a commercial building by 35% through real-time data analysis and system optimization",
    ],
  },
  {
    title: "Project Member - Signal Processing",
    company: "Uppsala University",
    dateStart: "Jan 2022 -",
    dateEnd: "June 2022",
    duties: ["Developed solutions for signal processing for a specific case using MATLAB and Python"],
  },
  {
    title: "Co-founder (CMO & CFO)",
    company: "RARE",
    badge: "Startup (Closed)",
    dateStart: "June 2018 -",
    dateEnd: "Sep 2028",
    duties: [
      "Co-founded a recycling company as part of a government entrepreneurship summer program.",
      "Gained hands-on experience in business development and project execution.",
      "Contributed to the development and marketing of the company's services.",
    ],
  },
]

export type Education = {
  degree: string
  dateStart: string
  dateEnd: string
  institution: string
  specialization?: string
  note?: string
}

export const education: Education[] = [
  {
    degree: "Master of Science (M.Sc.) in Electrical Engineering",
    dateStart: "2025 -",
    dateEnd: "2027",
    institution: "Department of Electrical Engineering | Uppsala University, Sweden",
    specialization: "Control of electrical systems & programming of embedded systems",
  },
  {
    degree: "Bachelor of Science (B.Sc.) in Electrical Engineering",
    dateStart: "2019 -",
    dateEnd: "2022",
    institution: "Department of Electrical Engineering | Uppsala University, Sweden",
    note: "Degree issued in 2026",
  },
]

export type Language = {
  name: string
  level: string
}

export const languages: Language[] = [
  { name: "Swedish", level: "Fluent" },
  { name: "English", level: "Fluent" },
  { name: "Arabic", level: "Native" },
]
