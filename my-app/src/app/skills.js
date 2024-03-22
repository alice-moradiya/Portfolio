import React from 'react';

const skills = {

  Skills: [
    { name: 'ReactJS', icon: '/react.png' },
    { name: 'NextJS', icon: '/next.png' },
    { name: 'Bootstrap', icon: '/bootstrap.png' },
    { name: 'Android', icon: '/Android.png' },
    { name: 'Java', icon: '/java.png' },
    { name: 'C++', icon: '/C++.png' },
    { name: 'Javascript', icon: '/js.png' },
    
    
    { name: 'PHP', icon: '/icons/PHP.png' },
    { name: 'PHP', icon: '/icons/PHP.png' },
    { name: 'PHP', icon: '/icons/PHP.png' },
    { name: 'PHP', icon: '/icons/PHP.png' },

    // ... other frameworks
  ],
};

const Skills = () => {
  return (
    <section id='skills'  className="bg-dark-section text-white py-8">
      <h2 className="text-center text-3xl font-bold my-5">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-5">
        {Object.entries(skills).flatMap(([category, skillList]) =>
          skillList.map(skill => (
            <div key={skill.name} className="flex flex-col items-center p-4 bg-dark-card rounded-lg">
              <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
              <span className="text-sm">{skill.name}</span>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Skills;
