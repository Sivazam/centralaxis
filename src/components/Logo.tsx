import React from 'react';
import { Server } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img src='https://www.centralaxis.com/_next/image?url=%2Flogo_white_icon_only.png&w=96&q=75' alt="Logo" className="h-12 w-12" />
      <span className="font-bold text-white text-xl">CentralAxis</span>
    </div>
  );
};

export default Logo;