import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import WorkExperience from '../components/WorkExperience';
import Footer from '../components/Footer';


const App = () => {
  return (
    <div className="font-sans bg-gradient-to-b from-amber-50 to-amber-100">
      <main>
        <Hero />
        <Skills />
        <WorkExperience />
      </main>
    </div>
  );
};

export default App;