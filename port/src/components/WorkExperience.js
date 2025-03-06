import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

function WorkExperience() {
  const { title } = useParams();
  const [isExpanded, setIsExpanded] = useState(false);

  // Sample work experience data with long text (example)
  const experience = {
    "My First App": {
      role: "Frontend Developer",
      company: "TechStart",
      duration: "Jan 2023 - Jun 2023",
      details: "Built a responsive React app with modern UI/UX, integrating REST APIs and optimizing performance. " +
               "This project involved creating over 15,000 lines of code, debugging complex issues, and collaborating " +
               "with a team of 10 developers. I implemented features like real-time data updates, custom animations, " +
               "and a scalable architecture that handled thousands of users daily. The app was deployed to production " +
               "and received positive feedback for its sleek design and fast load times. " + 
               "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore " +
               "et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
               "aliquip ex ea commodo consequat.".repeat(10), // Simulating 15,000+ characters
    },
    "Portfolio Site": {
      role: "Full-Stack Developer",
      company: "Self",
      duration: "Jul 2023 - Present",
      details: "Designed and developed a dynamic portfolio with React, Node.js, and Tailwind CSS, featuring animations " +
               "and a backend contact form. This was a solo project where I handled everything from UI design to server " +
               "setup, ensuring a seamless user experience across devices.".repeat(20),
    },
  };

  const project = experience[title] || { role: "Unknown", company: "N/Acaadhsuhwufiosidfewuihriuwriwejnfsiucnuicnziucuihqwhjncjfaiufdjfnskdjfnaidsfnjdn,jnfsdjkfjsjfstta", duration: "N/A", details: "No details available." };

  // Truncate details to 200 characters initially
  const truncatedDetails = project.details.length > 200 && !isExpanded 
    ? `${project.details.slice(0, 200)}...` 
    : project.details;

  return (
    <div className="work-bg min-h-screen flex flex-col items-center justify-center p-8">
      <Link 
        to="/" 
        className="fixed top-0 left-0 text-3xl text-[var(--accent)] fashion-icon-button"
      >
        <FaArrowLeft />
      </Link>
      <h1 className="text-7xl font-bold text-[var(--text)] work-title mb-12">Work Experience: {title}</h1>
      <div className="max-w-3xl w-full space-y-8">
        <div className="work-card animate-work-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl font-semibold text-[var(--accent)] glow-text">{project.role}</h2>
          <p className="text-xl text-[var(--text)] opacity-80">{project.company}</p>
          <p className="text-lg text-[var(--text)] opacity-60">{project.duration}</p>
          <p className="text-[var(--text)] mt-4 fashion-desc">{truncatedDetails}</p>
          {project.details.length > 200 && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="fashion-button px-6 py-2 mt-4 text-[var(--accent)] font-bold rounded-full border-2 border-[var(--accent)] bg-transparent hover:bg-[var(--accent)] hover:text-white transition-all duration-300 ease-in-out"
            >
              {isExpanded ? "Show Less" : "Read More"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;