import React from 'react';


const skills = {

    Skills: [
        { name: 'Bootstrap', icon: '/Bootstrap.png' },
        { name: 'ReactJS', icon: '/react.png' },
        { name: 'NextJS', icon: '/next.png' },
        { name: 'Android', icon: '/Android.png' },
        { name: 'Tailwind CSS', icon: '/Tailwind.png' },
        { name: 'Java', icon: '/java.png' },

        { name: 'ShadecnUI', icon: '/Shadecn.png' },
        { name: 'MaterialUI', icon: '/Material.png' },
        { name: 'Python', icon: '/python.png' },
        { name: 'C++', icon: '/C++.png' },
        { name: 'Javascript', icon: '/js.png' },
        { name: 'PHP', icon: '/PHP.png' },

        { name: 'MySQL', icon: '/Mysql.png' },
        { name: 'AWS', icon: '/AWS.png' },
        { name: 'ReactBootstrap', icon: '/ReactBoot.png' },
        { name: 'ASP.Net', icon: '/ASP.png' },
        { name: 'HTML', icon: '/HTML.png' },
        { name: 'CSS', icon: '/CSS.png' },


        { name: 'Rest APIs', icon: '/Rest.png' },
        { name: 'WordPress', icon: '/Wordpress.png' },
        { name: 'Office Suite', icon: '/MS.png' },
        { name: 'Git VCS', icon: '/Git.png' },
        { name: 'GitHub', icon: '/Github.png' },
        { name: 'Kali Linux', icon: '/Kalilinux.png' },
    ],
};

const Skills = () => {
    return (
        <section id='skills' className="bg-dark-section text-white py-8">
          <h2 className="text-center text-3xl font-bold my-5">Skills & Abilities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 px-5">
            {Object.entries(skills).flatMap(([category, skillList]) =>
              skillList.map(skill => (
                <div 
                  key={skill.name} 
                  className="flex flex-col items-center p-4 bg-dark-card rounded-lg hover:scale-125 transform transition duration-300" 
                >
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
