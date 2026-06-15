// Content for the Publications page.

export type PublicationDetail = {
  label: string
  value: string
}

export type Publication = {
  tags: string[]
  title: string
  status: string
  authors: string
  details: PublicationDetail[]
  abstract: string
  keywords: string[]
  actions: { label: string; url: string }[]
}

export const publications: Publication[] = [
  {
    tags: ["Master's Degree Thesis", "Electrical Engineering", "Uppsala University"],
    title: "Improvement of an Automated Aeroponic Plant Cultivation System",
    status: "Published",
    authors: "Alhassan Jawad",
    details: [
      { label: "Year", value: "2025" },
      { label: "Pages", value: "pp. 100" },
      { label: "Citations", value: "14" },
    ],
    abstract:
      "This thesis presents an automated aeroponic cultivation system, advancing sustainable agriculture by efficiently controlling a plant's environment. The core of the system is a rule-based algorithm on an ESP32 microcontroller that successfully regulates temperature and humidity. The research demonstrates the algorithm's effectiveness in maintaining stable conditions, offering a more reliable and energy-efficient solution for sustainable, small-scale farming.",
    keywords: [
      "Aeroponics",
      "IoT Sensors",
      "MIMO (Multiple-Input Multiple-Output) Systems",
      "Control algorithm",
    ],
    actions: [
      { label: "View PDF (Locked until 2028)", url: "/masters-degree-thesis-electrical-engineering.pdf" },
      { label: "Link (Locked until 2028)", url: "https://uu.diva-portal.org" },
    ],
  },
  {
    tags: ["Bachelor's Degree Thesis", "Electrical Engineering", "Uppsala University"],
    title: "Power flexibility in a property: Independent Project in Electrical Engineering",
    status: "Published",
    authors: "Alhassan Jawad, Andreas Hertzberg, Johan Sundman",
    details: [
      { label: "Year", value: "2022" },
      { label: "Pages", value: "pp. 100" },
      { label: "Citations", value: "10" },
      { label: "URN", value: "urn:nbn:se:uu:diva-479221" },
      { label: "OAI", value: "oai:DiVA.org:uu-479221" },
      { label: "DiVA, id", value: "diva2:1678189" },
    ],
    abstract:
      "This thesis presents a novel approach to energy optimization in commercial buildings using real-time control systems and machine learning algorithms. Our method achieved a 35% reduction in electricity consumption while maintaining optimal comfort levels.",
    keywords: ["Smart Buildings", "Energy Optimization", "Control Systems", "IoT Sensors"],
    actions: [
      { label: "View PDF", url: "/bachelors-degree-thesis-electrical-engineering.pdf" },
      {
        label: "Link",
        url: "https://uu.diva-portal.org/smash/record.jsf?pid=diva2%3A1678189&dswid=-6938",
      },
    ],
  },
]
