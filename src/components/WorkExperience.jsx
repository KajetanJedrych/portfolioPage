import React from 'react';

const WorkExperience = () => {
  return (
    <section className="bg-gradient-to-b from-amber-100 to-amber-200 py-16 px-4" id="experience">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Work Experience</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800">Full-stack Engineer</h3>
          <p className="text-sm text-gray-600">WordFred | May 2024 – Present</p>
          <ul className="list-disc list-inside mt-4 text-gray-600">
            <li>Develop Node.js back-end services using AWS S3 and Lambda.</li>
            <li>Enhance platform scalability across diverse CMS platforms including WordPress and WooCommerce.</li>
            <li>Improve system efficiency and reliability through robust solutions.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
