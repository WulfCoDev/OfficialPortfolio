import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView ({
    threshold: 0.5,
  });

  return (
    <section className='section' id='about' ref={ref}>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top rounded-full'></motion.div>

          <motion.div 
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='font-primary flex-1'>
            <h2 className='h2 text-accent'>About me</h2>
            <h3 className='h3 mb-4'>I'm a Front-end Developer with over a decade of graphic design experience</h3>
            <p className='mb-6'>
            I am a Web Developer with a background in IT/Tech repair and have over a decade of graphic design experience. 
            I am seeking remote opportunities as a Web Developer or Software Engineer.
            </p>
            <p className='mb-6'>I currently work for Amazon while I complete Fullstack Academy's Web Development program and 
               am also being AWS Cloud Practitioner certified.
            </p>
            <p className='mb-6'>
            What drew me to web development is the ability to express my creativity whilst leveraging my design skills from my graphic design experience. 
            On the other hand, web development succumbs my need for problem-solving and constant self-evolution; growth.
            </p>
            <p className='mb-6'>
            In my free time, you can find me sim-racing or just hanging out with friends on Discord. 
            I also enjoy making 3D prints and other things such as custom stickers, clothes, etc.
            </p>

            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    inView ?
                    <CountUp start={0} end={11} duration={3}/>  : null
                  }+
                  
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br />
                  Graphic Design <br />
                  Experience
                </div>
              </div>

              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                    inView ?
                    <CountUp start={0} end={1} duration={3}/>  : null
                  }+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br />
                  Front-end <br />
                  Experience
                </div>
              </div>

              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                    inView ?
                    <CountUp start={0} end={4} duration={3}/>  : null
                  }+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br />
                  IT/Tech Repair <br />
                  Experience
                </div>
              </div>

            </div>
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'><a href='#contact' >Contact Me</a></button>
              <a href="#work" className='text-gradient btn-link'>
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
  
};

export default About;