import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, message }),
      });
      const data = await response.json();
      if (data.success) {
        alert('Message sent successfully!');
        setName('');
        setMessage('');
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      alert('Error connecting to server!');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      <div className="input-group animate-slide-in" style={{ animationDelay: '0.1s' }}>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Your Name"
          required 
          className="w-full p-3 bg-transparent border-2 border-[var(--accent)] rounded-lg text-[var(--text)] focus:outline-none focus:border-glow glow-input"
        />
      </div>
      <div className="input-group animate-slide-in" style={{ animationDelay: '0.3s' }}>
        <textarea 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          placeholder="Your Message"
          required 
          className="w-full p-3 bg-transparent border-2 border-[var(--accent)] rounded-lg text-[var(--text)] focus:outline-none focus:border-glow glow-input h-32 resize-none"
        />
      </div>
      <button 
        type="submit" 
        className="w-full p-3 bg-[var(--accent)] text-white rounded-full font-bold hover:bg-opacity-80 transition-all pulse-button animate-slide-in"
        style={{ animationDelay: '0.5s' }}
      >
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;