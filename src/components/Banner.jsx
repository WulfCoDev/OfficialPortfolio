import React from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import {fadeIn} from '../variants';
import Image from '../assets/about.png';

const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className="container mx-auto">
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>

        {/* text */}

      <div className='flex-1 text-center font-secondary lg:text-left'>

        <motion.h1 
        variants={fadeIn('up', 0.3)} 
        initial="hidden" 
        whileInView={'show'} 
        viewport={{once: false, amount: 0.7}} 
        className='text-[55px] leading-[0.8] lg:text-[75px] mb-2'>
          CHRISTIAN <span>ALEXANDER</span>
        </motion.h1>

        <motion.div 
        variants={fadeIn('up', 0.4)} 
        initial="hidden" whileInView={'show'} 
        viewport={{once: false, amount: 0.7}} 
        className='mb-6 text-[36px] lg:text-[60px] uppercase leading-[1] font-primary'>
          <span className='mr-4 text-white'>I am a</span>
          <TypeAnimation sequence={[
            'Developer',
            2000,
            'Problem-Solver',
            2000,
            'Critical Thinker',
            2000,
            'Gamer',
            2000,
            'Sim Racer',
            2000,
          ]}
          speed={50}
          className='text-accent font-tertiary'
          wrapper='span'
          repeat={Infinity}
          />
        </motion.div>

        <motion.p 
        variants={fadeIn('up', 0.5)} 
        initial="hidden" whileInView={'show'} 
        viewport={{once: false, amount: 0.7}} 
        className='mb-8 max-w-lg mx-auto lg:mx-0 font-primary'>
          "Programming is a skill best acquired by practice and example rather than from books"
          <br /><span>- Alan Turing</span>
        </motion.p>

        <motion.div 
        variants={fadeIn('up', 0.6)} 
        initial="hidden" 
        whileInView={'show'} 
        viewport={{once: false, amount: 0.7}} 
        className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
          <button  className='btn btn-lg'><a href='#contact' >Contact Me</a></button>
          <a href='#work' className='text-gradient btn-link'>My Portfolio</a>
        </motion.div>

        <motion.div 
        variants={fadeIn('up', 0.7)} 
        initial="hidden" 
        whileInView={'show'} 
        viewport={{once: false, amount: 0.7}} 
        className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>

          <a href='https://github.com/WulfCoDev'>
            <FaGithub />
          </a>

          <a href='https://www.linkedin.com/in/dev-christian-alexander/'>
            <FaLinkedin />
          </a>

        </motion.div>

      </div>

      {/* Image */}

      <motion.div 
      variants={fadeIn('down', 0.5)} 
      initial="hidden" 
      whileInView={'show'} 
      className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>

          <img className='rounded-full' src={Image} alt='' />
      </motion.div>

      </div>
    </div>
  </section>;
};

export default Banner;