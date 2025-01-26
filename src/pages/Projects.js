import React from 'react';
import { Code, ExternalLink, Github, MessageCircle } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
        title: "A business card site for a local service provider",
        technologies: ["React", "Tailwind CSS"],
        description: "Business card site created for a local service provider in the repairment windows industry ",
        githubLink: "https://github.com/KajetanJedrych/profenst",
        demoLink: "https://kajetanjedrych.github.io/profenst/"
      },
    {
      title: "Backend of a calendar application for a massage studio",
      technologies: ["Django", "JWT", "PostgreSQL"],
      description: "Backend project developed as part of a university course to explore and gain hands-on experience with modern backend technologies and practices",
      githubLink: "https://github.com/KajetanJedrych/DjangoWSB",
      demoLink: "https://github.com/KajetanJedrych/DjangoWSB"
    },
    {
      title: "Portfolio Website",
      technologies: ["React", "Tailwind CSS", "emailjs"],
      description: "Responsive personal portfolio showcasing skills, experience, and projects with modern, interactive design",
      githubLink: "https://github.com/KajetanJedrych/portfolioPage",
      demoLink: "https://your-portfolio-site.com"
    },
    {
      title: "Frontend of a calendar application for a massage studio",
      technologies: ["React", "TypeScript", "Moment.js"],
      description: "Project developed as part of a university course to explore and gain hands-on experience with modern web technologies",
      githubLink: "https://github.com/KajetanJedrych/CalendarAppFE",
      demoLink: "https://github.com/KajetanJedrych/CalendarAppFE"
    }
  ];

  return (
    <>
      <section className="bg-gradient-to-b from-amber-50 to-amber-100 py-16 px-4 min-h-screen" id="projects">
        <div className="max-w-6xl mx-auto ">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              My Projects
            </h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group relative rounded-xl"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-amber-300 to-amber-500 opacity-0 group-hover:opacity-50 blur transition-opacity duration-300 rounded-xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200/20 to-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                
                <div className="relative bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 transition-all duration-300 
                  group-hover:shadow-xl group-hover:bg-gradient-to-br from-amber-50 to-amber-100">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex gap-2 mt-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="text-xs font-medium bg-blue-100 text-blue-600 px-2 py-1 rounded-full
                            group-hover:bg-blue-200 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-blue-600 transition-colors duration-300"
                      >
                        <Github className="w-6 h-6" />
                      </a>
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-blue-600 transition-colors duration-300"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 group-hover:text-slate-800 transition-colors duration-300">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-amber-100 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            I'm always excited to collaborate on innovative projects. Whether you have a specific idea or need technical expertise, I'm ready to bring your vision to life.
          </p>
          <a 
            href="/contact"
            className="group relative inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full
              shadow-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-xl
              hover:scale-105 active:scale-95 overflow-hidden"
          >
            <MessageCircle className="w-6 h-6 relative z-10 group-hover:rotate-6 transition-transform duration-300" />
            <span className="relative z-10 font-medium">Contact Me</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Projects;