import React, { useState } from 'react';
import { Linkedin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID, 
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      },
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      setStatus('Failed to send message. Please try again.');
      console.error(error);
    });
  };

  return (
    <section className="bg-gradient-to-b from-amber-50 to-amber-100 min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Contact Form */}
        <div className="w-full md:w-1/2">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Get in Touch
            </h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto rounded-full"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="group relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm rounded-xl 
                  border border-amber-200 focus:border-blue-500 
                  transition-all duration-300 
                  group-hover:shadow-lg group-hover:bg-amber-50/50"
              />
            </div>

            <div className="group relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm rounded-xl 
                  border border-amber-200 focus:border-blue-500 
                  transition-all duration-300 
                  group-hover:shadow-lg group-hover:bg-amber-50/50"
              />
            </div>

            <div className="group relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows="4"
                className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm rounded-xl 
                  border border-amber-200 focus:border-blue-500 
                  transition-all duration-300 
                  group-hover:shadow-lg group-hover:bg-amber-50/50"
              />
            </div>

            <button
              type="submit"
              className="group relative w-full inline-flex items-center justify-center gap-2 
                bg-blue-600 text-white px-6 py-3 rounded-full
                shadow-lg hover:bg-blue-700 transition-all duration-300 
                hover:shadow-xl hover:scale-105 active:scale-95 
                overflow-hidden"
            >
              <Send className="w-5 h-5 relative z-10 group-hover:translate-x-0.5 transition-transform duration-300" />
              <span className="relative z-10 font-medium">Send Message</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </form>

          {status && <p className="mt-4 text-center text-blue-600">{status}</p>}
        </div>

        {/* LinkedIn Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <a 
            href="https://www.linkedin.com/in/kajedrych/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative mb-6"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-blue-300 to-blue-500 
            rounded-full opacity-0 group-hover:opacity-75 blur 
            transition-opacity duration-300" />
            <div className="relative bg-white p-4 rounded-full 
              shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <Linkedin 
                className="w-12 h-12 text-blue-600 
                  group-hover:text-blue-700 
                  transform group-hover:scale-110 
                  transition-all duration-300" 
              />
            </div>
          </a>
  
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">
              Let's Connect
            </h3>
            <p className="text-slate-600 max-w-md">
              Feel free to reach out on LinkedIn. I'm always open to discussing new projects, opportunities, or just having a professional chat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
