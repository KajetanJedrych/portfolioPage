import React from 'react';
import { Github, Linkedin, X } from 'lucide-react';

const Footer = () => {
  const socials = [
    {
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/KajetanJedrych",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/kajedrych/",
      label: "LinkedIn"
    },
    {
      icon: <X className="w-5 h-5" />,
      url: "https://x.com/jkajtek",
      label: "X"
    }
  ];

  return (
    <footer className="bg-amber-200 shadow-md shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              <span className="text-blue-600">Kajetan </span>
              Jędrych
            </h2>
          </div>
          <p className="text-sm text-slate-600 ml-4">
            © {new Date().getFullYear()} Created by Kajetan Jędrych
          </p>
          <div className="flex items-center gap-4">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 bg-white rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-300/20 to-amber-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
