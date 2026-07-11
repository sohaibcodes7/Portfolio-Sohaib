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
  next,
  nest,
  mui,
  meta,
  starbucks,
  upwork,
  tesla,
  shopify,
  abyss,
  apple,
  architect,
  cars,
  foods,
  tours,
  airbnb,
  airflip,
  ecom,
  agency
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    subtitle: "react.js",
    icon: web,
  },
  {
    title: "Front-End Development",
    subtitle: "JavaScript, HTML5, CSS3",
    icon: mobile,
  },
  {
    title: "Responsive Web Design",
    subtitle: "Tailwind CSS",
    icon: backend,
  },
  {
    title: "API Integration",
    subtitle: "Context-API, Axios",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },

 
   {
     name: "git",
     icon: git,
   },
  // {
  //   name: "figma",
  //   icon: figma,
  // },

];

const experiences = [
  {
    title: "Senior Software Engineer",
    company_name: "Airlfip",
    icon: airflip,
    iconBg: "#fff",
    date: "March 2024 - Present",
    points: [
      "Solely developing and maintaining the company's flagship product Airflip with Next.js, Nest.js, PostgreSQL and other related technologies.",
      "Implemented an Excel-like solution to manage more than 800K rows of complex data efficiently with server-side support to view and manage huge amounts of data within seconds.",
      "Implemented various charts-based graphic solutions to glance at big chunks of data with improved insights.",
      "Improved the performance of the company’s website from 65% to 99% on pagespeed, directly impacting the conversion rate which increased the revenue by 30%  in just 4 months.",
      "Implemented a fully customizable form builder solution from scratch, eliminating the data structure rigidity with zero flexibility to give the user 100% control over the shape of the data they want to manage.",
      "Improved UI for comprehending and managing data-intensive user forms directly improving on the customers’ ease of use of the product.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Abyss Solutions Pty. Ltd.",
    icon: abyss,
    iconBg: "#383E56",
    date: "February 2022 - March 2024",
    points: [
      "Developing and maintaining the company's flagship product Abyss Fabric using Next.js, Nest.js with MongoDB among other major related technologies.",
      "Proficiently working in development, adept at sprint planning and Program Increments (PIs) with a strong track record of delivering high-quality software on schedule.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Present",
    points: [
      "Developing and maintaining various clients' web applications and websites using MERN stack and other related technologies.",
      "Collaborating with clients to understand their requirements and provided technical guidance and solutions to address their business needs.",
      "Collaborating with clients' representatives including designers, product managers, and other developers to deliver high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Agency-AI",
    description:
      "This AI agency website demonstrates modern web development techniques with React and Tailwind CSS, including responsive layouts, clean UI, and reusable components.",
    tags: [
      {
        name: "Tailwind CSS",
        color: "blue-text-gradient",
      },
      // {
      //   name: "css",
      //   color: "green-text-gradient",
      // },
      {
        name: "React.js",
        color: "pink-text-gradient",
      },
    ],
    image: agency,
    url: "https://agency-ai-rosy.vercel.app/",
  },
 
  {
    name: "Apple Website",
    description:
      "This apple website clone showcases various aspects of the web development techniques including complex css animations and event listeners",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: apple,
    url: "https://apple-ecom-webiste.vercel.app",
  },
 
  {
    name: "Architecture",
    description:
      "This example project has complex css animations and a responsive design to work with every screen size.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: architect,
    url: "https://architecture-project-eight.vercel.app",
  },

  {
    name: "Ecom store ",
    description:
      "This example project has complex css animations and a responsive design to work with every screen size.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      
    ],
    url: "https://ecom-webiste-kappa.vercel.app",
    image: ecom,
  },
  // {
  //   name: "Ecom store ",
  //   description:
  //     "A music player is a software or device that lets you play, pause, and manage audio files or songs.",
  //   tags: [
  //     {
  //       name: "React",
  //       color: "blue-text-gradient",
  //     },
      
  //   ],
  //   url: "https://ecom-webiste-kappa.vercel.app",
  //   image: ecom,
  // },
];

export const PINK = "#f72585";
export const BLUE = "#170664";

export { services, technologies, experiences, testimonials, projects };
