import React from 'react';
// Logo
import logoWhite from "../assets/img/logo-white.svg"


const Footer = () => {
  return <footer className='bg-primary py-12'>
    <div className="container mx-auto text-white flex justify-between">
      <a href="/">
      <img src={logoWhite} alt=""/>
      </a>
      Copyright &copy; 2023. All rights reserved.
    </div>
    </footer>;
};

export default Footer;
