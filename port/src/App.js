import Project from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import WorkExperience from './components/WorkExperience';
import { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaTelegram, FaDownload, FaCloudSun, FaStar, FaCode, FaBrain, FaLink, FaDiscord, FaRobot, FaTimes } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Image1 from './images/banner-bg3.jpg';
import Image2 from './images/banner-bg4.jpg';
import Avatar from './images/avatar.jpg';
import Resume from './assets/myresume2.pdf';

// Chatbot Component
function Chatbot() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([{ sender: 'bot', text: 'Hey! Ask me anything about Jin’s skills!' }]);
  const [userInput, setUserInput] = useState('');

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const newMessages = [...chatMessages, { sender: 'user', text: userInput }];
    setChatMessages(newMessages);

    let botResponse = "Hmm, I’m not sure about that. Try asking about Jin’s skills!";
    if (userInput.toLowerCase().includes("skill")) {
      botResponse = "Jin’s skilled in AI, blockchain, and web development—pretty cool, right? Ask me about a specific skill!";
    } else if (userInput.toLowerCase().includes("ai")) {
      botResponse = "Jin builds AI-powered apps with automation, analytics, and more. Want details?";
    } else if (userInput.toLowerCase().includes("blockchain")) {
      botResponse = "Jin’s a blockchain pro—Solidity, Rust, and Cosmos SDK are his jam. Curious about a project?";
    } else if (userInput.toLowerCase().includes("web")) {
      botResponse = "Jin crafts sleek, scalable web apps with React, Node.js, and more. What do you want to know?";
    }

    setTimeout(() => {
      setChatMessages((prev) => [...prev, { sender: 'bot', text: botResponse }]);
    }, 500);

    setUserInput('');
  };

  return (
    <>
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 text-4xl text-[var(--accent)] bg-[rgba(0,0,0,0.5)] p-4 rounded-full hover-glow hover-scale"
      >
        <FaRobot />
      </button>

      {isChatOpen && (
        <div key="chat-window" className="fixed bottom-20 right-6 w-80 h-96 bg-[rgba(0,0,0,0.7)] border border-[var(--accent)] rounded-lg shadow-lg flex flex-col animate-slide-up">
          <div className="flex justify-between items-center p-2 border-b border-[var(--accent)]">
            <h4 className="text-lg text-[var(--text)] glow-text">Jin’s AI Assistant</h4>
            <button onClick={() => setIsChatOpen(false)} className="text-[var(--text)] hover-spin">
              <FaTimes />
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            {chatMessages.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-2 p-2 rounded-lg ${msg.sender === 'bot' ? 'bg-[rgba(255,255,255,0.1)] text-[var(--text)]' : 'bg-[var(--accent)] text-black ml-auto'}`}
                style={{ maxWidth: '80%' }}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <form onSubmit={handleChatSubmit} className="p-2 border-t border-[var(--accent)] flex">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Ask me something..."
              className="flex-1 p-2 bg-transparent text-[var(--text)] border-none focus:outline-none glow-input"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleChatSubmit(e);
                }
              }}
            />
            <button type="submit" className="text-[var(--accent)] p-2 hover-glow nova-button">
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}

function App() {
  const themes = [
    { name: 'dark', icon: <FaMoon /> },
    { name: 'light', icon: <FaSun /> },
    { name: 'sunset', icon: <FaCloudSun /> },
    { name: 'neon', icon: <FaStar /> }
  ];

  const initialTheme = localStorage.getItem('theme');
  const validTheme = themes.some(t => t.name === initialTheme) ? initialTheme : 'dark';
  const [theme, setTheme] = useState(validTheme);
  const [activeTech, setActiveTech] = useState(null);

  const projects = [
    { 
      title: "Tradelot Technology, Remote", 
      position: "Front-End Developer", 
      image: "https://picsum.photos/300/200?random=1",
      challenge: "Mastering React hooks and state management.",
      demo: "https://example.com/my-first-app"
    },
    { 
      title: "Portfolio Site", 
      position: "This full-stack masterpiece.", 
      image: "https://picsum.photos/300/200?random=2",
      tech: "React, Node.js, Tailwind CSS",
      challenge: "Creating a responsive, animated UI with smooth scrolling.",
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
    languages: [
      { name: "C", proficiency: 80 },
      { name: "C++", proficiency: 85 },
      { name: "Python", proficiency: 90 },
      { name: "Matlab", proficiency: 70 },
      { name: "HTML", proficiency: 95 },
      { name: "CSS", proficiency: 90 },
      { name: "JavaScript", proficiency: 95 },
      { name: "PHP", proficiency: 75 },
      { name: "Go", proficiency: 80 },
      { name: "TypeScript", proficiency: 85 }
    ],
    frameworks: [
      { name: "Visual Studio", proficiency: 80 },
      { name: "Django", proficiency: 85 },
      { name: "Flask", proficiency: 80 },
      { name: "Angular.js", proficiency: 75 },
      { name: "Laravel", proficiency: 70 },
      { name: "CI", proficiency: 65 },
      { name: "Spring", proficiency: 70 },
      { name: "Vue.js", proficiency: 85 },
      { name: "React", proficiency: 95 },
      { name: "FastAPI", proficiency: 80 },
      { name: "Express", proficiency: 85 },
      { name: "Nest.js", proficiency: 80 }
    ],
    databases: [
      { name: "MongoDB", proficiency: 85 },
      { name: "MySQL", proficiency: 80 },
      { name: "PostgreSQL", proficiency: 85 },
      { name: "Redis", proficiency: 75 }
    ],
    blockchain: [
      { name: "Solidity", years: 3, proficiency: 90 },
      { name: "Rust", years: 2, proficiency: 85 },
      { name: "Cosmwasm", years: 2, proficiency: 80 },
      { name: "Cosmos SDK", years: 2, proficiency: 85 },
      { name: "Near-SDK-RS", years: 1, proficiency: 70 }
    ]
  };

  const techCategories = [
    { name: "Languages", items: techStack.languages },
    { name: "Frameworks", items: techStack.frameworks },
    { name: "Databases", items: techStack.databases },
    { name: "Blockchain Development", items: techStack.blockchain }
  ];

  const carouselImages = [Image1, Image2];

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.className = theme;
  }, [theme]);

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
          className="cyber-toggle mb-12"
          title={`Switch to ${themes[(themes.findIndex(t => t.name === theme) + 1) % themes.length].name}`}
        >
          <span className="cyber-toggle-icon">{themes.find(t => t.name === theme)?.icon || <FaMoon />}</span>
        </button>
        <button 
          onClick={() => scrollToSection('home')} 
          className="text-xl mb-10 text-[var(--text)] nav-icon animate-nav-in hover-scale"
          style={{ animationDelay: '0.2s' }}
        >
          home
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
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-3xl mb-10 text-[var(--text)] nav-icon animate-nav-in hover-spin"
          style={{ animationDelay: '0.6s' }}
        >
          <FaLinkedin />
        </a>
      </nav>

      {/* Main Content */}
      <main className="ml-24 p-8">
        {/* Hero with Carousel */}
        <section id="home" className="relative h-screen">
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

        {/* Skills */}
        <section id="skills" className="py-16 skill-bg relative overflow-hidden">
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-8 text-[var(--text)] glow-text">What I Offer</h2>
            <div className="cyber-orb-grid max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="cyber-orb-container"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="cyber-orb">
                    <span className="cyber-orb-icon">{skillIcons[skill.name]}</span>
                    <h3 className="cyber-orb-title">{skill.name}</h3>
                  </div>
                  <div className="cyber-orb-text">
                    <p>{skill.offer}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <h3 className="text-3xl font-bold text-[var(--text)] glow-text mb-8">My Tech Stack</h3>
              <div className="tech-grid max-w-4xl mx-auto">
                {techCategories.map((category, index) => (
                  <div key={index} className="tech-section">
                    <button 
                      onClick={() => setActiveTech(activeTech === category.name ? null : category.name)}
                      className="text-xl text-[var(--accent)] glow-text flex items-center w-full justify-center hover-glow mb-4"
                    >
                      <span>{category.name}</span>
                    </button>
                    {activeTech === category.name && (
                      <div className="flex flex-wrap gap-4 justify-center animate-fade-in">
                        {category.items.map((item, idx) => (
                          <div key={idx} className="neon-progress">
                            <span className="neon-progress-label">
                              {category.name === "Blockchain Development" ? `${item.name} (${item.years} yrs)` : item.name}
                            </span>
                            <div className="neon-progress-bar">
                              <div 
                                className="neon-progress-fill" 
                                style={{ width: `${item.proficiency}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
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

      {/* Chatbot Component */}
      <Chatbot />

      {/* Footer */}
      <footer className="text-center py-6 text-[var(--text)] opacity-70">
        <p>©Jin.Designed</p>
      </footer>
    </div>
  );

  return (
    <Router basename='/portfolio'>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/project/:title" element={<ProjectDetail projects={projects} />} />
        <Route path="/work-experience/:title" element={<WorkExperience />} />
      </Routes>
    </Router>
  );
}

export default App;