import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Img1 from '../assets/img1.png';
import Img2 from '../assets/img2.png';
import Img3 from '../assets/img3.png';

const Work = () => {
  return (
  <section className='section' id='work'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 flex flex-col gap-y-12 mb-10'>
          {/* Text */}
          <div>
            <h2 className='h2 leading-tight text-accent'>My Latest <br />
            Work.
            </h2>
            <p className='max-w-sm mb-16'>A series of projects featuring REST API and React. All work hosted on netlify. All code available on Github.</p>
            <button className='btn btn-sm'>View all projects</button>
          </div>

          {/* Image */}
          
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* Overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt='' />
            {/* Pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Front-end</span>
              </div>
            {/* Title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>WulfCo Shop</span>
            </div>
          </div>
        </motion.div>
          
        <motion.div 
        variants={fadeIn('left', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 flex flex-col gap-y-10'>
        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* Overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt='' />
            {/* Pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Front-end</span>
              </div>
            {/* Title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Stranger's Things</span>
            </div>
          </div>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* Overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt='' />
            {/* Pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Front-end</span>
              </div>
            {/* Title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Puppy Bowl</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
  
};

export default Work;