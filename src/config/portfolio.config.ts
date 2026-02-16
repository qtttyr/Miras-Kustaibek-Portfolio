import profilePic from '../assets/photo.jpg';
import mindgardenImg from '../assets/mindgarden.png';
import alaqayImg from '../assets/alaqayai.png';
import startupautoImg from '../assets/startupauto.png';

export const portfolioConfig = {
  name: "Miras Kustaibek",
  title: "Full Stack Developer / Startuper / Designer / Game Creator",
  about: "I build fast, creative, and optimized digital experiences. Blurring the lines between design and code.",
  bio: "As a full-stack developer and startup founder, I focus on creating digital products that are not only functional but also visually striking. I bridge the gap between creative design and robust engineering.",
  resumeLink: "/resume.pdf", // Path to your resume in public folder
  profileImage: profilePic,
  
  skills: [
    { name: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"] },
    { name: "Backend", items: ["Node.js", "Express", "Python", "Go", "PostgreSQL", "Supabase", "FastAPI"] },
    { name: "Creative", items: ["UI/UX Design", "Game Development (Unity/C#)", "Brand Identity", "3D Modeling"] },
    { name: "Tools & Cloud", items: ["Docker", "AWS", "GitHub Actions", "Vercel", "Figma"] },
  ],

  projects: [
    {
      id: "MindGarden",
      title: "MindGarden",
      description: "It is a digital space for self-reflection and emotional growth, where the user's inner state is materialized in the form of a living 3D garden.",
      detailedDescription: "MindGarden isn't a habit tracker, a diary, or a meditation app. It's an emotional interface between a person and themselves.",
      year: "2025",
      stack: ["TypeScript", "Supabase", "FastAPI", "React"],
      github: "https://github.com/qtttyr/MindGarden",
      live: "https://mindgarden.miras.dev",
      image: mindgardenImg
    },
    {
      id: "Alaqay",
      title: "Alaqay AI",
      description: "An AI referee for your Life — a personal Chief of Staff",
      detailedDescription: "Alaqay AI is a personal AI assistant that gives you digests of the news and articles you read. It is a web application that is built using React, Next.js, TypeScript, and Tailwind CSS.",
      year: "2025",
      stack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/qtttyr/Alaqay-AI",
      live: "https://alaqay",
      image: alaqayImg
    },
    {
      id: "startupautopilot",
      title: "StartUp Autopilot",
      description: "It is a web application that is built using React, Next.js, TypeScript, and Tailwind CSS.",
      detailedDescription: "StartUp Autopilot is a web application that is built using React, Next.js, TypeScript, and Tailwind CSS.",
      year: "2025",
      stack: ["React", "Tailwind v4", "Framer Motion"],
      github: "https://github.com/qtttyr/StartUp-Autopilot",
      live: "https://startupautopilot.com",
      image: startupautoImg
    }
  ],

  contact: {
    email: "miraskustaibek09@gmail.com",
    socials: [
      { name: "GitHub", link: "https://github.com/qtttyr", platform: "github" },
      { name: "Instagram", link: "https://instagram.com/vaprooll", platform: "instagram" },
      { name: "LinkedIn", link: "https://linkedin.com/in/mkqtttyr09", platform: "linkedin" },
      { name: "X", link: "https://twitter.com/vaprolol", platform: "x" }
    ]
  }
};
