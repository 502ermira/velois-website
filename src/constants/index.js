import {
  mobile,
  qa,
  smart_home,
  language_learning_platform,
  chatbot,
  costum_software,
  foundation,
  designer,
  web_dev,
  team,
  developer,
  api,
  pm,
  success,
  it_support,
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
  industry,
  ai,
  accreditation,
  threejs,
  web_application,
  share,
  logo,
  partnership,
  trends,
  product_launch,
  mcpd,
  xyz,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },

];

const cards = [
    {
      name: "Who we are",
      description:
        "We are a team of passionate software professionals dedicated to delivering high-quality solutions.",
      id: 'team',
      image: developer,
    },
    {
      name: "What we do",
      description:
      "We deliver innovative solutions tailored to meet your business needs and drive digital transformation.",
      id: 'services',
      image: web_dev,
    },
    {
      name: "What sets us apart",
      description:
        "Our unique blend of expertise, creativity, and client-centric focus sets us apart from the competition.",
      id: 'testimonials',
      image: team,
    },
];

const about = [
  {
    title: "Innovation",
    description: "We foster a culture of innovation, constantly exploring new ideas and technologies.",
    icon: "FaRegLightbulb", 
  },
  {
    title: "Expertise",
    description: "Our team consists of experts in various programming languages and frameworks.",
    icon: "AiOutlineCode", 
  },
  {
    title: "Agility",
    description: "We embrace agile methodologies to deliver high-quality software solutions efficiently.",
    icon: 'AiOutlineRocket',
  },
  {
    title: "Collaboration",
    description: "We believe in collaboration and teamwork, fostering a supportive environment for success.",
    icon: 'AiOutlineTeam',
  },
];
const teamMembers = [
  {
    name: 'Emily Lawson',
    role: 'CEO',
    image: 'https://randomuser.me/api/portraits/women/8.jpg'
  },
  {
    name: 'Jane Smith',
    role: 'COO',
    image: 'https://randomuser.me/api/portraits/men/7.jpg'
  },
  {
    name: 'Alice Johnson',
    role: 'Strategic Advisor',
    image: 'https://randomuser.me/api/portraits/women/12.jpg' 
  },
  {
    name: 'John Doe',
    role: 'Strategic Advisor',
    image: 'https://randomuser.me/api/portraits/men/9.jpg' 
  },
  
];

const services = [
  {
    title: "Custom Software Development",
    icon: costum_software,
    description: 'Velois specializes in developing tailor-made software solutions across various domains, including ERP, CRM, inventory management and workflow automation.',
    share: share,
  },
  {
    title: "Web Application Development",
    icon: web_application,
    description : 'Velois creates dynamic and scalable web applications using modern technologies such as React, Angular, or Vue.js. Services include e-commerce platforms, CMS and custom web solutions.',
    share: share,
  },
  {
    title: "Mobile App Development",
    icon: mobile,
    description :'Velois designs and develops native or cross-platform mobile applications for iOS and Android using Swift, Kotlin, React Native, or Flutter.' ,
    share: share,
  },
  {
    title: "UI/UX Design and Prototyping",
    icon: designer,
    description: 'Velois provides user interface (UI) and user experience (UX) design services, crafting visually appealing and user-friendly interfaces.',
    share: share,
  },
  {
    title: "Quality Assurance and Testing",
    icon: qa,
    description : 'Velois conducts comprehensive software testing and quality assurance to ensure the reliability, functionality, and security of applications.',
    share: share,
  }, 
  {
    title: "Cloud Application Development",
    icon: api,
    description : 'Velois leverages cloud technologies like AWS, Microsoft Azure, or Google Cloud Platform to develop cloud-native applications and deploy them for scalability & reliability.',
    share: share,
  },
  {
    title: "Maintenance and Support",
    icon: it_support,
    description : 'Velois offers ongoing maintenance and support services, including bug fixes, updates, and security enhancements to ensure the long-term success of the software solutions.',
    share: share,
  },
  {
    title: "Project Management",
    icon: pm,
    description: 'Velois provides expert consulting services. They offer technical guidance and project management throughout the software development lifecycle.',
    share: share,
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

const keyMilestones = [
  {
    title: "Company Founding: Velois",
    date: "February 4, 2018",
    description: "Founded Velois on February 4, 2018, with a vision to deliver innovative software solutions and meet the growing demands of the digital landscape.",
    icon : foundation,
  },
  {
    title: "Product Launch: XYZ Software",
    date: "February 12, 2019",
    description: "Successfully launched our flagship software solution, XYZ Software, which revolutionized the industry with its innovative features and user-friendly interface.",
    icon : product_launch,
  },
  {
    title: "Industry Conference: Developer Summit",
    date: "October, 2019",
    description: "Participated in Developer Summit, a leading software development conference, where we showcased our expertise, shared insights, and collaborated with industry peers.",
    icon : industry,
  },
  {
    title: "Certification: Microsoft Certified Professional Developer (MCPD)",
    date: "January, 2020",
    description: "Earned the Microsoft Certified Professional Developer (MCPD) certification, demonstrating our advanced skills and expertise in Microsoft technologies and development practices.",
    icon : mcpd,
  },
  {
    title: "Launch of AI-powered Application",
    date: "February, 2021",
    description: "Introduced an AI-powered application that leveraged machine learning and natural language processing, enabling businesses to automate processes and gain valuable insights.",
    icon : ai,
  },
  {
    title: "Industry Conference: CodeX",
    date: "October, 2023",
    description: "Presented our cutting-edge software development methodologies and technologies at CodeX, a prestigious conference attended by industry leaders and experts.",
    icon : industry,
  },
  {
    title: "Accreditation: ISO 27001",
    date: "February, 2024",
    description: "Achieved ISO 27001 accreditation, certifying our robust information security management system and commitment to safeguarding client data and sensitive information.",
    icon : accreditation,
  },
];

const articles = [
  {
    
    title: 'Customer Success Story: How Our Software Transformed a Business',
    image: success,
    description: 'Discover how our software solution helped a client revolutionize their operations, increase efficiency, and achieve remarkable business growth.',
  },
  {
    
    title: 'New Partnership with Industry-leading Company',
    image: partnership,
    description: 'We are thrilled to announce our new partnership with the XYZ company, combining our expertise to deliver cutting-edge solutions to our clients.',
  },
      {
 
    title: 'Key Trends in Software Development: What to Expect in 2024',
    image: trends,
    description: 'Stay ahead of the curve with our insights into the key trends shaping the software development landscape in 2024 and beyond.',
  },
  {
 
    title: 'Introducing Our New Product: XYZ Software Suite',
    image: xyz,
    description: 'We are thrilled to unveil our latest product, the XYZ Software, a comprehensive solution for businesses to streamline their operations.',
  },
  
];

const testimonials = [
  {
    testimonial:
      "Velois provided exceptional customer support, going above and beyond to ensure our satisfaction.",
    name: "Sarah Lee",
    designation: "CFO",
    company: "ABC Corporation",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "We owe our business' transformation to the exceptional expertise and innovative solutions provided by Velois.",
    name: "David Brown",
    designation: "COO",
    company: "XYZ Company",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      " Partnering with Velois has been a game-changer for us, and we look forward to continuing this successful collaboration in the future.",
    name: "Jessica Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Smart Home Automation App",
    description:
      'From adjusting the thermostat to turning on/off lights, activating security cameras, the app puts the power of home management in the palm of your hand.',
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "java",
        color: "pink-text-gradient",
      },
    ],
    image: smart_home,
    
  },
  {
    name: "Language Learning Platform",
    description:
      "This platform provides a wide range of interactive and engaging language learning resources, including lessons, exercises, quizzes, and immersive language activities.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: language_learning_platform,
    
  },
  {
    name: "AI-Powered Chat Support",
    description:
      "Feature a project that demonstrates the implementation of an AI-powered chatbot to provide quick and efficient customer support and enhancing user experience.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "nltk",
        color: "green-text-gradient",
      },
      {
        name: "tensorflow",
        color: "pink-text-gradient",
      },
    ],
    image: chatbot,
  
  },
];

export { services, cards, technologies, keyMilestones, testimonials, projects, articles, about, teamMembers };