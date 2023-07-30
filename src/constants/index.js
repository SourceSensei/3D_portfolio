import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Development",
    icon: web,
  },
  {
    title: "Backend Development",
    icon: mobile,
  },
  {
    title: "Pentesting",
    icon: backend,
  },
  {
    title: "Marketing",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Content Analyst",
    company_name: "Cognizant/Google",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2022 - Currently Working",
    points: [
      "Analyze and identify content that is not in compliance with requirements and flag for action in a timely manner",
      "Review the reported content within agreed turnaround times and standards of quality",
      "Recognize trends and patterns, and escalate issues outside of the established policies",
      "Use market specific knowledge and insights to spot and scope solutions to improve the support of user community",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Freelancer",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Currently Working",
    points: [
      "Create website layout/user interface by using standard HTML, CSS, Node JS and React JS practices",
      "Integrate data from various back-end services and databases",
      "Be responsible for maintaining, expanding, and scaling the website",
      "Stay updated to emerging technologies/industry trends and apply them into operations and activities",
    ],
  },
  {
    title: "Pentester",
    company_name: "Pentester",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2023 - Currently Working",
    points: [
      "Comprehensive knowledge of computer security, including forensics, systems analysis and more",
      "Insight into how hackers exploit the human element to gain unauthorized access to secure systems",
      "Clear understanding of how computer security breaches can disrupt business, including the financial and managerial implications",
      "Communications skills to document and share your findings",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but SourceSensei proved me wrong.",
    name: "Nina Tolkunova",
    designation: "Tourist Guide",
    company: "Luzitana Sol",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like SourceSensei does.",
    name: "Antonio Trindade",
    designation: "Senior Engineer",
    company: "Nokia",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After SourceSensei optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Matilde Dias",
    designation: "Marketing Department",
    company: "Eleven",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Restaurant Website",
    description:
      "Indulge in a captivating culinary experience with our ReactJS-powered restaurant website, where flavors come to life on the digital plate.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/SourceSensei/restaurant_project",
  },
  {
    name: "Bank Website",
    description:
      "Experience modern banking at its finest with our sleek ReactJS-powered bank website, where innovation meets convenience for seamless financial management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/SourceSensei/bank_app_project",
  },
  {
    name: "Admin Dashboard",
    description:
      "Navigate your data with ease using our dynamic ReactJS admin dashboard, featuring an array of captivating charts that offer valuable insights and empower data-driven decisions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "syncfusion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/SourceSensei/react-admin-dashboard",
  },
];

export { services, technologies, experiences, testimonials, projects };
