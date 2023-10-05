import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import {FaGithub, FaLinkedin} from 'react-icons/fa';

const Contact = () => {
  return <section className='py-16 lg:section' id='contact'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row'>
        {/* text */}
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 flex justify-start items-center'>
          <div>
            <h4 className='text-xl uppercase text-accent mb-2 tracking-wide'>
              Get in touch
            </h4>
            <h2 className='text-[45px] font-primary lg:text-[90px] leading-none mb-12'>Let's Collaborate</h2>
          </div>
        </motion.div>
        {/* social buttons */}
        <motion.form 
        variants={fadeIn('left', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
          <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
          type='text' placeholder='Your name' />

        <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
          type='text' placeholder='Your email' />
        <textarea className='bg-transparent border-b py-12 resize-none outline-none w-full placeholder:text-white focus:border-accent transition-all mb-12'
        placeholder='Your message'>

        </textarea>

        <button className='btn btn-lg'>Send message</button>

           </motion.form>
      </div>
      <motion.div 
       variants={fadeIn('up', 0.3)}
       initial='hidden'
       whileInView={'show'}
       viewport={{once: false, amount: 0.3}}
      className='flex-1 flex justify-center items-center py-12 text-[64px]'>
        <a href='https://github.com/WulfCoDev' target='_blank' ><FaGithub /></a>
        <a href='https://www.linkedin.com/in/dev-christian-alexander/ ' target='_blank'><FaLinkedin /></a>
        </motion.div>
    </div>
    </section>;
};

export default Contact;