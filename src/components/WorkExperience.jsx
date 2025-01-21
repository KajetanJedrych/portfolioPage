import React from 'react';
import { Building2, Briefcase, ChevronRight, Download } from 'lucide-react';

const WorkExperience = () => {
  const experiences = [
    {
      title: "QA Engineer",
      company: "Acoustic",
      period: "2024 - Current",
      icon: <Briefcase className="w-6 h-6" />,
      description: [
        "Managing entire testing process for marketing applications (web & API)",
        "Creating test strategies and automation using Java (Selenium), JavaScript (Playwright)",
        "Building complete test projects with Cucumber and AWS technologies",
        "Presenting test results to stakeholders and overseeing testing lifecycle"
      ]
    },
    {
      title: "Software Test Engineer",
      company: "Solwit S.A (Intel Poland)",
      period: "2021 - 2024",
      icon: <Building2 className="w-6 h-6" />,
      description: [
        "Led performance testing department for OpenVINO applications",
        "Developed Python tools for validation procedures enhancement",
        "Resolved CI errors within Docker and Jenkins environments",
        "Designed, developed, and maintained a test repository Python(Selenium, pytest)"
      ]
    },
    {
      title: "Junior Specialist for Testing",
      company: "ManpowerGroup Poland (Intel Poland)",
      period: "2020 - 2021",
      icon: <Building2 className="w-6 h-6" />,
      description: [
        "Established Windows test environments",
        "Executed thorough testing procedures",
        "Produced detailed bug reports and collaborated with development teams"
      ]
    }
  ];

  const handleDownloadCV = () => {
    window.open('/Kajetan Jedrych.pdf', '_blank');
  };

  return (
    <section className="bg-gradient-to-b from-amber-100 to-amber-200 py-16 px-4" id="experience">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-6">
            Work Experience
          </h2>
          
          <button
            onClick={handleDownloadCV}
            className="group relative inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full
              shadow-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-xl
              hover:scale-105 active:scale-95 overflow-hidden"
          >
            <span className="relative z-10 font-medium">Download Full CV</span>
            <Download className="w-5 h-5 relative z-10 group-hover:translate-y-0.5 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="group relative rounded-xl"
            >
              {/* Decorative gradient borders */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-amber-300 to-amber-500 opacity-0 group-hover:opacity-50 blur transition-opacity duration-300 rounded-xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200/20 to-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              
              {/* Main content */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 transition-all duration-300 
                group-hover:shadow-xl group-hover:bg-gradient-to-br from-amber-50 to-amber-100">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600 transform transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                    {exp.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <p className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full
                        group-hover:bg-amber-100 group-hover:text-slate-600 transition-all duration-300">
                        {exp.period}
                      </span>
                    </div>
                    
                    <ul className="mt-4 space-y-2">
                      {exp.description.map((item, idx) => (
                        <li 
                          key={idx}
                          className="flex items-start gap-2 text-slate-600 group-hover:text-slate-800 transition-colors duration-300"
                        >
                          <ChevronRight className="w-5 h-5 text-blue-500 mt-0.5 group-hover:text-blue-600 transition-colors duration-300" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;