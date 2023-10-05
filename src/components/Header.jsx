import React from 'react';
import Logo from '../assets/logo.png';

const Header = () => {
  return <header className='py-8'>
    <div className="container mx-auto">
      <div className='flex justify-between items-center'>
        <a href='#'>
          <img className='w-[150px]' src={Logo} alt='logo' />
        </a>
        <p className='text-6xl font-["pixelify_sans"]'>WulfCoDev</p>
        <button className='btn btn-sm'>Lets Collaborate</button>
      </div>
    </div>
  </header>;
};

export default Header;