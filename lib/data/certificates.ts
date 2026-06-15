// Content for the Certificates page.

export type Certificate = {
  icon: string
  title: string
  issuer: string
  status: { label: string; variant: "badge-professional" | "badge-deployed" }
  description: string
  dateObtained: string
  skillsValidated: string[]
  // URL opened when the "Verify Certificate" button is clicked.
  verifyUrl: string
}

export const certificates: Certificate[] = [
  {
    icon: "🏆",
    title: "AI Professional",
    issuer: "Google Cloud",
    status: { label: "Professional", variant: "badge-professional" },
    description:
      "Hands-on certification demonstrating skills manageing AI models and deploying them in production environments. Learned how to professionally use AI and build AI-powered solutions that solve real-world problems.",
    dateObtained: "March 2026",
    skillsValidated: [
      "Artificial Intelligence Development",
      "Agentic AI Solutions",
      "Meta Prompting",
      "Workflow Management",
    ],
    verifyUrl: "https://coursera.org/share/7c127defea329d2049ceaad2f0114f92",
  },
  {
    icon: "🛡️",
    title: "Vetted Software Engineer (Electronic Engineering)",
    issuer: "micro1",
    status: { label: "Vetted Talent", variant: "badge-deployed" },
    description:
      "Successfully passed a rigorous AI-led technical vetting process, ranking in the top tier of global talent. Validated expertise in bridging the gap between high-fidelity hardware simulation and modern software environments.",
    dateObtained: "April 2026",
    skillsValidated: [
      "Ngspice Circuit Simulation",
      "Analog & Digital Electronics",
      "Technical Documentation",
      "Cross-Team Collaboration",
    ],
    verifyUrl: "/micro1.png",
  },
]
