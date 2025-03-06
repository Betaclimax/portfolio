import { Link } from 'react-router-dom';

function Project({ title, position, image }) {
  return (
    <div className="fashion-project-card">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-36 object-cover rounded-lg transition-transform duration-300 hover:scale-105" 
        />
        <div className="absolute inset-0 bg-black/50 rounded-lg"></div> {/* Dark overlay */}
      </div>
      <div className="p-3">
        <h3 className="text-lg font-bold text-white glow-text mb-1">{title}</h3>
        <p className="text-white text-xs mb-2">{position}</p>
      
      </div>
    </div>
  );
}

export default Project;