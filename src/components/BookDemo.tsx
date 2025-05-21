import React from 'react';
import Button from './Button';

const BookDemo: React.FC = () => {
  return (
    <section className="py-10 bg-black">
      {/* Card Container */}
      <div
        className="container mx-auto px-4 relative z-10"
        style={{
          maxWidth: '1200px', // Restrict the card width
        }}
      >
        <div
          className="max-w-7xl mx-auto p-8 md:p-12 rounded-lg border border-gray-700 bg-opacity-10 backdrop-blur-md shadow-lg"
          style={{
            backgroundImage: `url('https://www.centralaxis.com/background.png ')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backdropFilter: 'blur(200px) brightness(0.2)',
            WebkitBackdropFilter: 'blur(100px)', // Safari support
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            position: 'relative',
          }}
        >
          {/* Dark overlay + blur for better text visibility */}
          <div
            className="absolute inset-0 bg-black opacity-65"
          />

          {/* Content */}
          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Book a Demo</h2>
            <p className="text-gray-300 mb-8 text-xl md:text-2xl">
              See how CentralAxis can revolutionize your data center operations.
            </p>
           <div className="flex justify-center">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-black font-bold hover:bg-gray-400 transition-colors duration-300"
            >
              Schedule Now
            </Button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDemo;