import React from 'react';

const skills = {
  apis: [
    { name: 'RESTful APIs', icon: '/icons/restful.png' },
    // Add more APIs as needed
  ],
  databases: [
    { name: 'MySQL', icon: '/icons/mysql.png' },
    { name: 'AWS', icon: '/icons/aws.png' },
    // Add more databases as needed
  ],
  frameworks: [
    { name: 'React.js', icon: '/icons/react.png' },
    { name: 'Bootstrap', icon: '/icons/bootstrap.png' },
    { name: 'ASP.NET', icon: '/icons/aspnet.png' },
    // Add more frameworks as needed
  ],
  languages: [
    { name: 'Python', icon: '/icons/python.png' },
    { name: 'Java', icon: '/icons/java.png' },
    { name: 'C++', icon: '/icons/cpp.png' },
    { name: 'JavaScript', icon: '/icons/javascript.png' },
    { name: 'PHP', icon: '/icons/php.png' },
    // Add more languages as needed
  ],
  tools: [
    { name: 'WordPress', icon: '/icons/wordpress.png' },
    { name: 'Git', icon: '/icons/git.png' },
    { name: 'GitHub', icon: '/icons/github.png' },
    { name: 'MS Word', icon: '/icons/msword.png' },
    { name: 'MS Excel', icon: '/icons/msexcel.png' },
    // Add more tools as needed
  ]
};

const Skills = () => {
  return (
    <div className="py-8">
      <h2 className="text-center text-3xl font-bold my-5">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-8 px-5">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="flex flex-col items-center">
            <h3 className="text-lg font-semibold capitalize mb-2">{category}</h3>
            {skillList.map(skill => (
              <div key={skill.name} className="flex flex-col items-center mb-4">
                <img src={skill.icon} alt={skill.name} className="w-12 h-12 object-contain" />
                <span className="text-sm mt-1">{skill.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
