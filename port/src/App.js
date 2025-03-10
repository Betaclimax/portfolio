import Project from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import WorkExperience from './components/WorkExperience';
import { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaTelegram, FaDownload, FaCloudSun, FaStar, FaCode, FaBrain, FaLink, FaDiscord } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Image1 from './images/banner-bg3.jpg';
import Image2 from './images/banner-bg4.jpg';
import Avatar from './images/avatar.jpg';
import Resume from './assets/myresume2.pdf';
import c1 from './images/c1.jpg';
import c2 from './images/c2.jpg';
import c3 from './images/c3.jpg';
import c4 from './images/c4.jpg';
import c5 from './images/c5.jpg';


function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [activeSkill, setActiveSkill] = useState(null);
  const projects = [
    { 
      title: "Tradelot Technology, Remote", 
      position: "Front-End Developer", 
      image: c1,
      tech: "Translated design team's UX wireframes and mockups into responsive, interactive features, using HTML/CSS and JavaScript Worked with agile team to migrate legacy company website to AngularJS, Sass, HTML5, and Drupal Created HTML email templates that improved email CTR rates by ~25% Designed and developed GUI for applications and modules, using JavaScript",
      Date: "May 2019 to Jul 2020",
      demo: "https://example.com/my-first-app"
    },
    { 
      title: "Crane & Jenkins, Remote", 
      position: "Front-End Developer", 
      image: c3,
      tech: "Revamped UI and app interface for customer-facing e-commerce site with 200,000+ unique visitors per month Designed and developed front-end for 20+ websites, using jQuery, AJAX, React.js, and Handlebars.js Created custom AngularJS components for internal framework Automated image optimization, using Grunt and minified JS and CSS, which reduced page load times by up to 30%",
      Date: "Jul 2020 to Apr 2021",
      demo: "https://jin-portfolio.netlify.app"
    },
    { 
      title: "Flatfile", 
      position: "AI Engineer", 
      image: c4,
      tech: "Developed and optimized AI models for recommendation systems. Implemented deep learning frameworks such as TensorFlow, PyTorch, and scikit-learn to enhance model performance. Designed and maintained scalable AI solutions, integrating them into production environments. Conducted data preprocessing, feature engineering, and model evaluation to improve accuracy. Collaborated with cross-functional teams to deploy AI-driven solutions, enhancing automation and decision-making processes.",
      Date: "May 2021 to Mar 2023",
      demo: "https://jin-portfolio.netlify.app"
    },
    { 
      title: "Marble Dao, Remote", 
      position: "Senior Smart Contract and Full Stack Developer", 
      image: c2,
      tech: "Developed smart contracts for Dex, Staking, NFT Market Place with Cosmwasm Worked with Design team to create user-friendly UI and convenient UX, created Single Page Application with Next.js Developed RESTful API with Node.js and Express.js to provide statistics and analytics for NFT marketplace Used Jasmine and Jest to test component functionality and used Postman to test APIs Led a development team of 4 senior developers Participated in Agile methodology for application development and used JIRA as project management tool",
      Date: "Apr 2023 to Mar 2024",
      demo: "https://jin-portfolio.netlify.app"
    },
    { 
      title: "GlobalLogic, Remote", 
      position: "Senior Software Engineer", 
      image: c5,
      tech: "Developed a high-traffic eCommerce platform using Nest.js and MongoDB, which resulted in a 30% increase in user engagement. Implemented microservices architecture to enhance system scalability, reducing downtime by 25% during peak traffic.",
      Date: "Apr 2024 to Dec 2024",
      demo: "https://jin-portfolio.netlify.app"
    },
  ];
  const skills = [
    { name: "Web apps", offer: "I offer custom, scalable, and user-friendly web apps tailored to your needs. I build stable, high-performance websites using the latest technologies. My expertise includes AI integration, blockchain, and full-stack development to ensure secure, efficient, and future-proof solutions." },
    { name: "AI apps", offer: "AI-powered apps tailored to your needs, including automation tools, predictive analytics, and computer vision solutions. Using cutting-edge models and APIs, I ensure scalable, efficient, and user-friendly AI integration." },
    { name: "Blockchain", offer: "I can offer you secure, scalable, and efficient blockchain solutions tailored to your needs. Whether it's smart contracts, decentralized applications (DApps), NFT platforms, or blockchain integration, I ensure robust architecture, seamless deployment, and optimized performance." },
  ];

  const skillIcons = {
    "Web apps": <FaCode />,
    "AI apps": <FaBrain />,
    "Blockchain": <FaLink />
  };

  const techStack = {
    languages: ["C", "C++", "Python", "Matlab", "HTML", "CSS", "JavaScript", "PHP", "Go", "TypeScript"],
    frameworks: ["Visual Studio", "Django", "Flask", "Angular.js", "Laravel", "CI", "Spring", "Vue.js", "React", "FastAPI", "Express", "Nest.js"],
    databases: ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
    blockchain: [
      { name: "Solidity", years: 3 },
      { name: "Rust", years: 2 },
      { name: "Cosmwasm", years: 2 },
      { name: "Cosmos SDK", years: 2 },
      { name: "Near-SDK-RS", years: 1 }
    ]
  };

  const carouselImages = [Image1, Image2];

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.className = theme;
  }, [theme]);

  const themes = [
    { name: 'dark', icon: <FaMoon /> },
    { name: 'light', icon: <FaSun /> },
    { name: 'sunset', icon: <FaCloudSun /> },
    { name: 'neon', icon: <FaStar /> }
  ];

  const switchTheme = () => {
    const currentIndex = themes.findIndex(t => t.name === theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex].name);
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
  };

  const projectSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }]
  };

  const subtitle = "Dynamic and creative Developer   AI | BlOCKCHAIN | WEB";

  const MainContent = () => (
    <div className="min-h-screen font-sans">
      {/* Sticky Sidebar Nav */}
      <nav className="fixed left-0 top-0 h-screen w-24 flex flex-col items-center py-12 nav-bg curved-nav">
        <button 
          onClick={switchTheme} 
          className="text-3xl mb-12 text-[var(--accent)] nav-icon animate-nav-in hover-glow"
          style={{ animationDelay: '0.1s' }}
        >
          {themes.find(t => t.name === theme).icon}
        </button>
        <button 
          onClick={() => scrollToSection('projects')} 
          className="text-xl mb-10 text-[var(--text)] nav-icon animate-nav-in hover-scale"
          style={{ animationDelay: '0.2s' }}
        >
          Projects
        </button>
        <button 
          onClick={() => scrollToSection('skills')} 
          className="text-xl mb-10 text-[var(--text)] nav-icon animate-nav-in hover-scale"
          style={{ animationDelay: '0.3s' }}
        >
          Offer
        </button>
        <button 
          onClick={() => scrollToSection('contact')} 
          className="text-xl mb-10 text-[var(--text)] nav-icon animate-nav-in hover-scale"
          style={{ animationDelay: '0.4s' }}
        >
          Contact
        </button>
        <a 
          href={Resume} 
          download="Jin_Resume.pdf" 
          className="text-3xl mb-10 text-[var(--text)] nav-icon animate-nav-in hover-spin"
          style={{ animationDelay: '0.7s' }}
          title="Download Resume"
        >
          <FaDownload />
        </a>
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-3xl mt-auto mb-10 text-[var(--text)] nav-icon animate-nav-in hover-spin"
          style={{ animationDelay: '0.5s' }}
        >
          <FaGithub />
        </a>
        <a 
          href="https://discord.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-3xl mb-10 text-[var(--text)] nav-icon animate-nav-in hover-spin"
          style={{ animationDelay: '0.6s' }}
        >
          <FaDiscord />
        </a>
        <a 
          href="https://telegram.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-3xl mb-10 text-[var(--text)] nav-icon animate-nav-in hover-spin"
          style={{ animationDelay: '0.6s' }}
        >
          <FaTelegram />
        </a>
      </nav>

      {/* Main Content */}
      <main className="ml-24 p-8">
        {/* Hero with Carousel */}
        <section className="relative h-screen">
          <Slider {...sliderSettings} className="w-full h-full">
            {carouselImages.map((img, index) => (
              <div key={index} className="w-full h-screen">
                <img 
                  src={img} 
                  alt={`Slide ${index + 1}`} 
                  className="w-full h-full object-cover" 
                />
              </div>
            ))}
          </Slider>
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute top-0 left-0 w-full flex flex-col items-center pt-16">
            <img 
              src={Avatar} 
              alt="Jin's Avatar" 
              className="fashion-avatar mb-6" 
            />
            <div className="text-center">
              <h1 className="text-6xl font-bold mb-2 text-[var(--text)] glow-text">Hi, I am Jin!</h1>
              <p className="text-xl text-[var(--text)] glow-text fashion-subtitle">{subtitle}</p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-16 project-bg relative overflow-hidden">
          <h2 className="text-3xl font-bold text-center mb-8 bright-header">A Peek at My Portfolio</h2>
          <h2 className="text-2xl font-bold text-center mb-12 bright-header">Here are some cool projects I've worked on that really show what I can do.</h2>
          <div className="max-w-4xl mx-auto">
            <Slider {...projectSliderSettings}>
              {projects.map((project, index) => (
                <Link 
                  to={`/project/${project.title}`} 
                  key={index} 
                  className="fashion-project px-2"
                >
                  <Project 
                    title={project.title} 
                    position={project.position} 
                    image={project.image} 
                  />
                </Link>
              ))}
            </Slider>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-16 skill-bg relative overflow-hidden">
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-8 text-[var(--text)] glow-text">What I Offer</h2>
            <p className="text-xl text-[var(--text)] mb-12 fashion-subtitle">Here’s how I can bring value to your projects:</p>
            <div className="skill-grid max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="skill-card"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <button 
                    onClick={() => setActiveSkill(activeSkill === skill.name ? null : skill.name)}
                    className="text-2xl text-[var(--accent)] glow-text flex items-center w-full justify-center hover-glow"
                  >
                    <span className="hover-spin inline-block mr-2">{skillIcons[skill.name]}</span> 
                    <span>{skill.name}</span>
                  </button>
                  {activeSkill === skill.name && (
                    <p className="text-[var(--text)] mt-2 animate-fade-in">{skill.offer}</p>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-12">
              <h3 className="text-3xl font-bold text-[var(--text)] glow-text mb-8">My Tech Stack</h3>
              <div className="tech-grid max-w-4xl mx-auto">
                <div className="tech-section">
                  <h4 className="text-xl font-bold text-[var(--accent)] glow-text mb-4">Languages</h4>
                  <div className="flex flex-wrap gap-4 justify-center">
                    {techStack.languages.map((lang, idx) => (
                      <div key={idx} className="tech-card">{lang}</div>
                    ))}
                  </div>
                </div>
                <div className="tech-section">
                  <h4 className="text-xl font-bold text-[var(--accent)] glow-text mb-4">Frameworks</h4>
                  <div className="flex flex-wrap gap-4 justify-center">
                    {techStack.frameworks.map((fw, idx) => (
                      <div key={idx} className="tech-card">{fw}</div>
                    ))}
                  </div>
                </div>
                <div className="tech-section">
                  <h4 className="text-xl font-bold text-[var(--accent)] glow-text mb-4">Databases</h4>
                  <div className="flex flex-wrap gap-4 justify-center">
                    {techStack.databases.map((db, idx) => (
                      <div key={idx} className="tech-card">{db}</div>
                    ))}
                  </div>
                </div>
                <div className="tech-section">
                  <h4 className="text-xl font-bold text-[var(--accent)] glow-text mb-4">Blockchain Development</h4>
                  <div className="flex flex-wrap gap-4 justify-center">
                    {techStack.blockchain.map((bc, idx) => (
                      <div key={idx} className="tech-card">{bc.name} ({bc.years} yrs)</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 contact-bg relative overflow-hidden flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-8 text-[var(--text)] glow-text animate-slide-up">Connect With Me</h2>
            <div className="contact-info max-w-8xl mx-auto">
              <div className="contact-item">
                <FaEnvelope className="inline-block text-[var(--accent)] text-xl mr-2 hover-spin" />
                <span className="text-lg text-[var(--text)] glow-text">beta.climax@gmail.com</span>
              </div>
              <div className="contact-item">
                <FaTelegram className="inline-block text-[var(--accent)] text-xl mr-2 hover-spin" />
                <span className="text-lg text-[var(--text)] glow-text">@stillbullrun</span>
              </div>
              <div className="contact-item">
                <FaPhone className="inline-block text-[var(--accent)] text-xl mr-2 hover-spin" />
                <span className="text-lg text-[var(--text)] glow-text">+1 2266405226</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="inline-block text-[var(--accent)] text-xl mr-2 hover-spin" />
                <span className="text-lg text-[var(--text)] glow-text">Toronto City, Canada</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-[var(--text)] opacity-70">
        <p>©Jin.Designed</p>
      </footer>
    </div>
  );

  return (
    <Router basename="/portfolio">
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/project/:title" element={<ProjectDetail projects={projects} />} />
        <Route path="/work-experience/:title" element={<WorkExperience />} />
      </Routes>
    </Router>
  );
}

export default App;