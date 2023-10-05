import React from 'react';
import { DiReact, DiJavascript, DiHtml5, DiCss3, DiNodejs, DiNpm, DiPhotoshop, DiPostgresql, DiIllustrator,  } from 'react-icons/di';
import { SiTailwindcss, SiFigma } from 'react-icons/si';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const skills = [
  {
    name: 'React',
    icon: <DiReact />,
  },
  {
    name: 'HTML',
    icon: <DiHtml5 />,
  },
  {
    name: 'CSS',
    icon: <DiCss3 />,
  },
  {
    name: 'Javascript',
    icon: <DiJavascript />,
  },
  {
    name: 'Tailwind',
    icon: <SiTailwindcss />,
  },
  {
    name: 'NodeJs',
    icon: <DiNodejs />,
  },
  {
    name: 'Npm',
    icon: <DiNpm />,
  },
  {
    name: 'Postgresql',
    icon: <DiPostgresql />,
  },
  {
    name: 'Photoshop',
    icon: <DiPhotoshop />,
  },
  {
    name: 'Illustrator',
    icon: <DiIllustrator />,
  },
  {
    name: 'Figma',
    icon: <SiFigma />,
  },
  
]

const Skills = () => {
  return <section className='section' id='skills'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-col'>
        {/* text */}
        <motion.div
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 lg:bg-bottom mb-12 lg:mb-0 flex-row'>
          <h2 className='h2 text-accent mb-6 font-primary'>
            My Skills
            </h2>
          <h3 className='h3 max-w-[455px] mb-16'>
          I'm a Front-end Developer with over a decade of graphic design experience
          </h3>
          <button className='btn btn-sm mb-16'>
          <a href='#work' >View my work</a>
          </button>
        </motion.div>

        {/* Skills */}
        <motion.div 
        variants={fadeIn('left', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 w-[450px]'>
        {/* Skills List*/}
        <div>
          {skills.map ((skills, index) => {
            const {name, icon} = skills;
            return <div key={index} className='border-b border-white/20 mb-4 '>
              <div className='max-w-[300px] flex flex-row justify-between items-center text-center'>
                <h4 className='text-[64px] tracking-wider font-primary mb-1 '>{icon}</h4>
                <p className='text-[36px] font-primary leading-tight '>{name}</p>
              </div>
            </div>;
          })}
        </div>
        </motion.div>
      </div>
    </div>
    </section>;
};

export default Skills;