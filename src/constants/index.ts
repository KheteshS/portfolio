const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  /* {
    name: "Testimonials",
    link: "#testimonials",
  }, */
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 20, suffix: "+", label: "Reusable UI Components Built" },
  { value: 10, suffix: "+", label: "Internal Products Enabled" },
  { value: 60, suffix: "%", label: "Delivery Time Improvement" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Angular Developer",
    modelPath: "/models/Angular-transformed.glb",
    scale: 2.7,
    rotation: [0, 0, 0],
    position: [0, -2.1, 0],
  },
  // {
  //   name: "Python Developer",
  //   modelPath: "/models/python-transformed.glb",
  //   scale: 0.8,
  //   rotation: [0, 0, 0],
  // },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  // {
  //   name: "Interactive Developer",
  //   modelPath: "/models/three.js-transformed.glb",
  //   scale: 0.05,
  //   rotation: [0, 0, 0],
  // },
  {
    name: "Version Control System",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },

  {
    name: "Docker",
    modelPath: "/models/docker-transformed.glb",
    scale: 8,
    rotation: [0, 0, 0],
    position: [0, 0.7, 0],
  },
];

const expCards = [
  {
    review:
      "Khetesh consistently drove frontend performance improvements and set high engineering standards through ownership of shared UI components and collaboration across teams.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Senior Full Stack Web Developer (Frontend-heavy)",
    date: "May 2025 - Present",
    responsibilities: [
      "Led cross-functional collaboration with design, product, and QA teams to deliver responsive and scalable user interfaces.",
      "Optimized Stencil-based web components using lazy loading, code splitting, and custom performance strategies.",
      "Mentored junior developers and conducted peer code reviews to improve frontend quality and consistency.",
      "Drove frontend best practices through design workshops and architectural discussions.",
    ],
  },
  {
    review:
      "Khetesh played a key role in building a scalable frontend foundation by developing a shared design system adopted across multiple internal platforms.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Web Developer",
    date: "March 2023 - May 2025",
    responsibilities: [
      "Developed and maintained a Stencil-based design system supporting 10+ internal platforms.",
      "Built and documented 20+ reusable UI components, reducing UI inconsistencies and frontend tech debt.",
      "Researched and implemented web components architecture to enable modular and scalable frontend development.",
      "Promoted adoption of AI-assisted developer tools for frontend development.",
    ],
  },
  {
    review:
      "Khetesh demonstrated strong fundamentals early in his career by improving backend reliability and contributing to enterprise-grade systems.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Graduate Engineer Trainee",
    date: "July 2022 - March 2023",
    responsibilities: [
      "Developed backend modules for enterprise part numbering systems, improving data processing efficiency.",
      "Increased backend code coverage from 30% to 80%, reducing error rates and improving system reliability.",
      "Collaborated with senior engineers on design reviews, debugging, and production issue resolution.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "github",
    url: "https://github.com/KheteshS",
    imgPath: "/images/github.png",
  },
  /* {
    name: "fb",
    url: "https://www.facebook.com/",
    imgPath: "/images/fb.png",
  }, */
  {
    name: "x",
    url: "https://x.com/KheteshSingh",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/kheteshs",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
