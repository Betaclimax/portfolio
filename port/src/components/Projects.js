function Project({ title, position, image, animationDelay }) {
  return (
    <div className="project-card" style={{ animationDelay }}>
      <img src={image} alt={title} className="w-full h-32 object-cover rounded-t-md" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-[var(--text)]">{title}</h3>
        <p className="text-sm text-[var(--text)] opacity-80">{position}</p>
      </div>
    </div>
  );
}
export default Project;