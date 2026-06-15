// Content for the Resume page.

export const resumeIntro =
  "Download my resume in various languages, tailored for different audiences and regions. If you need a specific format or version, feel free to reach out!"

export type Resume = {
  title: string
  description: string
  // Two-letter language flag shown in the card header.
  flag: string
  badges: { label: string; outline?: boolean }[]
  language: string
  fileSize: string
  lastUpdated: string
  // File lives in /public. Both download and preview use this path.
  file: string
  // Whether to show a "Preview" button in addition to "Download".
  allowPreview: boolean
}

export const resumes: Resume[] = [
  {
    title: "Resume - English (Electrical Engineering)",
    description: "Detailed two-page English resume",
    flag: "EN",
    badges: [{ label: "Electrical focus" }, { label: "PDF", outline: true }],
    language: "English",
    fileSize: "199 KB",
    lastUpdated: "April 2026",
    file: "/english-cv-control-embedded-focus.pdf",
    allowPreview: true,
  },
  {
    title: "Resume - Swedish (Electrical Engineering)",
    description: "Detailed two-page Swedish resume",
    flag: "SV",
    badges: [{ label: "Electrical focus" }, { label: "PDF", outline: true }],
    language: "Swedish",
    fileSize: "194 KB",
    lastUpdated: "April 2026",
    file: "/swedish-cv-control-embedded-focus.pdf",
    allowPreview: true,
  },
]
