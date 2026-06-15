// Content for the Contact page.

export const contactIntro =
  "I'm always interested in discussing new opportunities, collaborations, or innovative projects. Feel free to reach out through any of the channels below."

// Formspree endpoint used by the contact form.
export const formspreeEndpoint = "https://formspree.io/f/mananlll"

// Icon is the Font Awesome class string OR an emoji. `isFontAwesome`
// distinguishes how it should be rendered.
export type ContactCard = {
  icon: string
  isFontAwesome: boolean
  title: string
  value: string
  description: string
  actionLabel: string
  actionHref: string
}

export const contactCards: ContactCard[] = [
  {
    icon: "📞",
    isFontAwesome: false,
    title: "Phone",
    value: "+46 76 281 8440",
    description: "Available for calls 09:00AM-08:00PM (CET)",
    actionLabel: "Call Now",
    actionHref: "tel:+46762818440",
  },
  {
    icon: "fa-solid fa-location-dot",
    isFontAwesome: true,
    title: "Location",
    value: "Hässelby Villastad Norra, Stockholm, Sweden",
    description: "Based in Stockholm, open to remote work",
    actionLabel: "View on Map",
    actionHref:
      "https://www.google.com/maps/place/Blodboksgränd+15,+165+77+Hässelby/@59.3907139,17.8036854,562m/data=!3m2!1e3!4b1!4m6!3m5!1s0x465fa0210db81ded:0x90c78054e04f4f4b!8m2!3d59.3907113!4d17.8085563!16s%2Fg%2F11pdq5bspk!5m1!1e3?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    icon: "fa-brands fa-linkedin",
    isFontAwesome: true,
    title: "LinkedIn",
    value: "linkedin.com/in /alhassanjawad",
    description: "Connect with me on LinkedIn",
    actionLabel: "Visit LinkedIn",
    actionHref: "https://linkedin.com/in/alhassanjawad",
  },
  {
    icon: "fa-brands fa-github",
    isFontAwesome: true,
    title: "GitHub",
    value: "github.com/AzheronElden",
    description: "Check out my open source projects",
    actionLabel: "Visit GitHub",
    actionHref: "https://github.com/AcheronEiden",
  },
  {
    icon: "📅",
    isFontAwesome: false,
    title: "Availability",
    value: "Available for new opportunities",
    description: "Pick a time that works for you.",
    actionLabel: "Book a Meeting",
    actionHref: "https://calendly.com/alhassan0000/30min",
  },
]
