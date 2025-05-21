import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent opacity-30" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 " style={{lineHeight: '1.2',color:'#d2d2d2'}}>
            Data Center Management Software
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto" style={{lineHeight: '2',color:'#5d5d65'}}>
            Increase uptime, reduce costs, automate operations, and stay compliant.
            Built for colocations, data centers, and cloud providers.
          </p>
          <button
            style={{ backgroundColor: '#8256e7' }}
            className="min-w-[350px] text-white px-8 py-4 text-lg font-medium hover:bg-purple-700 transition-colors"
          >
            Request Demo
          </button>

        </div>
      </div>
    </section>
  );
};

export default Hero;