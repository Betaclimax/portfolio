import { useParams, Link } from 'react-router-dom';

function ProjectDetail({ projects }) {
  const { title } = useParams();
  const project = projects.find(p => p.title === title);

  if (!project) return <div className="p-8 text-[var(--text)]">Project not found!</div>;

  return (
    <div className="min-h-screen p-8 ml-24 bg-[var(--bg)] text-white">
      <Link 
        to="/" 
        className="nova-button inline-block mb-6 px-6 py-2 font-bold rounded-full transition-all duration-300 ease-in-out"
      >
        Back to Home
      </Link>
      <div className="max-w-3xl mx-auto animate-slide-up">
        <h2 className="text-5xl font-bold mb-6 nova-header">{project.title}</h2>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-64 object-cover rounded-lg mb-6 border-2 border-[var(--accent)] transition-transform duration-300 hover:scale-105" 
        />
        <div className="nova-detail-card">
          <h3 className="text-xl font-bold text-[var(--accent)] glow-text mb-2">position</h3>
          <p className="text-base mb-4">{project.position}</p>
          <h3 className="text-xl font-bold text-[var(--accent)] glow-text mb-2">Tech Stack</h3>
          <p className="text-base mb-4">{project.tech}</p>
          <h3 className="text-xl font-bold text-[var(--accent)] glow-text mb-2">Date</h3>
          <p className="text-base mb-4">{project.Date}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;