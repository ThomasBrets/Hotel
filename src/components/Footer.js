import React from 'react';
// Logo
import logoWhite from "../assets/img/logo-white.svg"


const Footer = () => {
  return <footer className='bg-primary py-12'>
    <div className="container mx-auto text-white flex flex-col items-center gap-y-3 lg:flex-row lg:justify-between">
      <a href="/">
      <img src={logoWhite} alt=""/>
      </a>
      <div className="items-center">
      Copyright &copy; 2023. All rights reserved.
      </div>
    </div>
    </footer>;
};

export default Footer;
