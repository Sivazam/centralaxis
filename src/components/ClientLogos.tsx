import React from 'react';

const ClientLogos: React.FC = () => {
  const logos = [
    { name: 'Cisco', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png' },
    { name: 'IBM', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1000px-IBM_logo.svg.png' },
    { name: 'Dell', url: 'https://www.centralaxis.com/landing/logos/dell.svg' },
    { name: 'HP', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/1200px-HP_logo_2012.svg.png' },
    { name: 'Intel', url: 'https://www.centralaxis.com/landing/logos/intel.svg' },
    { name: 'Hewlett', url: 'https://www.centralaxis.com/landing/logos/hp.svg' },
    
    { name: 'schneider', url: 'https://www.centralaxis.com/landing/logos/schneider.svg'},
    { name: 'Lenovo', url: 'https://www.centralaxis.com/landing/logos/lenovo.svg' },
  ];

  // Duplicate the logos for seamless scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="py-12 border-t border-gray-800 overflow-hidden">
      <div className="relative w-full">
        <div className="flex animate-scroll whitespace-nowrap gap-12 md:gap-24">
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 flex items-center">
              <img
                src={logo.url}
                alt={`${logo.name} logo`}
                className="h-12 md:h-10 opacity-50 grayscale hover:opacity-75 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;
