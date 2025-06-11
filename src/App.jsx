
import React from 'react';
import { Toaster } from '@/components/ui/toaster';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import EducationSection from '@/components/sections/EducationSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

import { 
  Code,
  Shield,
  Database,
  Globe,
  Github,
  Brain,
  GitBranch,
  Cloud,
  Laptop,
  Server,
  Cpu,
  Network,
  Palette,
  Terminal,
  Layers,
  DatabaseZap,
  ShieldCheck,
  Atom,
  GitFork,
  Cog
} from 'lucide-react';


const App = () => {
  const categorizedSkills = [
    {
      category: "Programming Languages",
      icon: Code, 
      skills: [
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" },
      ]
    },
    {
      category: "Web Technologies",
      icon: Globe,
      skills: [
        { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JSP", logo: "https://media.licdn.com/dms/image/sync/v2/D5627AQFxtnULcumPMA/articleshare-shrink_800/articleshare-shrink_800/0/1720732982939?e=2147483647&v=beta&t=sJx-E1gG1iNSIbdWPmEaljs25jPtt1GSORpqIr0l5Z0" },
      ]
    },
    {
      category: "Database Tools",
      icon: DatabaseZap,
      skills: [
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" },
        { name: "MariaDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg" },
        { name: "JDBC", logo: "data:image/jpeg;base64,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" },
      ]
    },
    {
      category: "Cybersecurity Concepts",
      icon: ShieldCheck,
      skills: [
        { name: "Fundamentals", logo: "https://img.icons8.com/fluency/48/cyber-security.png" },
        { name: "IDS", logo: "https://img.icons8.com/ios-filled/50/000000/radar.png" },
        { name: "Network Security", logo: "https://img.icons8.com/fluency/48/000000/firewall.png" },
      ]
    },
    {
      category: "AI Tools",
      icon: Atom,
      skills: [
        { name: "Hugging Face", logo: "https://d7umqicpi7263.cloudfront.net/img/product/716604e6-3e1d-4bed-b99f-f59125b54ae9.png" },
        { name: "Generative AI", logo: "https://img.icons8.com/fluency/48/artificial-intelligence.png" },
      ]
    },
    {
      category: "Version Control",
      icon: GitFork,
      skills: [
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      ]
    },
  ];

  const projects = [
    {
      title: "Secure Private Cloud Storage",
      description: "Designed a secure cloud storage system with internal threat detection. Implemented an IDS for enhanced system protection. Used MariaDB for database management on Ubuntu OS. Ensured data compliance and ran security test protocols.",
      technologies: ["Jetson Orin Nano", "Linux", "MariaDB", "IDS"],
      projectIcon: Cloud,
      image: "secure-cloud-storage",
      category: "Cybersecurity",
      details: [
        "Built with Jetson Orin Nano for edge computing power.",
        "Utilized Linux (Ubuntu) as the core operating system.",
        "Integrated MariaDB for robust and secure data storage.",
        "Implemented an Intrusion Detection System (IDS) for real-time threat monitoring.",
        "Focused on data compliance and rigorous security testing."
      ]
    },
    {
      title: "Netflix Clone",
      description: "Built a responsive and stylish Netflix-like interface. Implemented features similar to real streaming platforms for improved UX.",
      technologies: ["HTML", "CSS", "Responsive Design"],
      link: "https://github.com/Praveenkolamuri/Netflix-clone-.git",
      projectIcon: Palette,
      image: "netflix-clone-project",
      category: "Frontend",
      details: [
        "Recreated the Netflix UI using HTML and CSS.",
        "Ensured a fully responsive design for various screen sizes.",
        "Focused on user experience (UX) to mimic a real streaming platform.",
        "Styled components to match Netflix's aesthetic."
      ]
    },
    {
      title: "Registration Page",
      description: "Developed a user registration system with complete database integration. Used JDBC and Servlets for backend communication.",
      technologies: ["Java", "JDBC", "JSP", "Servlets", "MySQL"],
      link: "https://github.com/Praveenkolamuri/registration-page-using-jdbc-.git",
      projectIcon: Server,
      image: "registration-system-project",
      category: "Backend",
      details: [
        "Backend developed using Java, Servlets, and JSP.",
        "Utilized JDBC for database connectivity with MySQL.",
        "Implemented secure user registration and data handling.",
        "Focused on server-side logic and database interactions."
      ]
    }
  ];

  const experiences = [
    {
      title: "Cybersecurity Intern",
      company: "AIMERS (Artificial Intelligence Medical and Engineering Researchers Society)",
      period: "May 2023 – July 2023",
      description: "Completed a 120-hour internship focused on cybersecurity. Gained practical experience identifying and mitigating security vulnerabilities. Learned about AI integration with tools like Hugging Face.",
      icon: Shield
    },
    {
      title: "Java Full Stack Intern",
      company: "Tech Wing",
      period: "December 2023 – May 2024",
      description: "Completed a full-stack internship covering frontend and backend development. Built real-time applications using HTML, CSS, Java, JDBC, JSP, and MySQL. Participated in projects involving threat analysis and network security protocols. Applied AI tools to improve software security.",
      icon: Code
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology (Computer Science in Cybersecurity)",
      institution: "Godavari Global University, Rajamundry",
      period: "2021 – Present",
      grade: "GPA: 7.66",
      description: "Focusing on cybersecurity principles, network security, ethical hacking, and secure software development. Actively involved in projects combining AI with cybersecurity."
    },
    {
      degree: "Intermediate – MPC (Maths, Physics, Chemistry)",
      institution: "Aditya Junior College, Rajamundry",
      period: "2019 – 2021",
      grade: "Marks: 891/1000",
      description: "Completed higher secondary education with a strong foundation in mathematics and physical sciences, fostering analytical and problem-solving skills."
    },
    {
      degree: "SSC (10th Grade)",
      institution: "N.N.M.C.H School, Rajamundry",
      period: "Completed in 2019",
      grade: "CGPA: 9.0",
      description: "Achieved a high CGPA, demonstrating consistent academic excellence and a strong work ethic from an early stage."
    }
  ];

  const aboutMe = {
    intro: "I am Kolamuri Sai Praveen, a passionate and goal-oriented individual currently pursuing my Bachelor's degree in Computer Science with a specialization in Cybersecurity from Godavari Global University in Rajamundry.",
    experience: "I have gained hands-on experience through internships in cybersecurity and Java full-stack development. I've worked on projects that involve network security, web design, backend integration, and secure cloud infrastructure. I am particularly interested in combining cybersecurity with emerging AI technologies like Hugging Face tools to enhance digital protection.",
    interests: "Outside academics, I explore Generative AI tools and enjoy experimenting with frontend designs and backend logic. I love staying up to date with technology trends and contributing to GitHub repositories."
  };

  const heroData = {
    name: "Kolamuri Sai Praveen",
    title: "Aspiring Cybersecurity Analyst | Java Full Stack Developer",
    subtitle: "Passionate about building secure digital solutions and mastering full-stack development.",
    imageUrl: "https://storage.googleapis.com/hostinger-horizons-assets-prod/24881602-09d4-46e7-880a-619d14360d63/63cf71078fdb3f7dca141a5dfa1c6238.jpg"
  };


  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection data={heroData} />
      <AboutSection data={aboutMe} />
      <EducationSection data={education} />
      <SkillsSection categorizedSkills={categorizedSkills} />
      <ExperienceSection experiences={experiences} />
      <ProjectsSection projects={projects} />
      <ContactSection />
      <Footer />
      <Toaster />
    </div>
  );
};

export default App;