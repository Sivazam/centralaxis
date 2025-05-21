import React from 'react';
import logo from '../../assets/favIcon.png';

const Footer: React.FC = () => {
  return (
    <footer className="section container bg-black py-8">
        {/* Thin Horizontal Border */}
      {/* <div className="border-t border-gray-800 mt-4"></div> */}
      <div className="border-b border-gray-800 mb-4"></div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-20 flex items-center justify-between">
        
        {/* Logo and Copyright */}
        <div className=" flex items-center gap-4">
          <img src={logo} alt="Logo" style={{width:'4rem'}} />
          <p className="text-white-700 text-lg">
            Copyright © {new Date().getFullYear()}.
          </p>
        </div>

        {/* Spacer to push content away from the right edge */}
        <div className="ml-auto"></div>
      </div>

    
    </footer>
  );
};

export default Footer;