// Central navigation config. Add a new page by adding one entry here AND
// creating the matching route folder under app/<href>/page.tsx.
export type NavItem = {
  href: string
  label: string
}

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact Information" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/publications", label: "Publications" },
  { href: "/certificates", label: "Certificates" },
  { href: "/resume", label: "Resume" },
]

export const siteConfig = {
  name: "Alhassan Jawad",
  title: "Alhassan Jawad - Electrical Engineer & OT-Security Engineer",
  description:
    "Full-Stack Developer and Electrical Engineer specializing in control systems, embedded programming, and web development. Based in Stockholm, Sweden.",
  url: "https://alhassanjawad.com",
  copyright: "© Alhassan Jawad 2026. All rights reserved.",
}
