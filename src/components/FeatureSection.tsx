import React, { ReactNode } from 'react';

interface FeaturePoint {
  title: string;
  description: string;
}

interface FeatureSectionProps {
  title: string;
  description: string;
  points?: FeaturePoint[];
  videoUrl: string;
  reversed?: boolean;
  children?: ReactNode;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  description,
  points,
  videoUrl,
  reversed = false,
  children,
}) => {
  return (
    <section className="py-4 lg:px-14"> 
      <div className="container mx-auto px-4"> 
        <div className="bg-[#1e1e20] rounded-2xl p-10 shadow-xl shadow-black/20" style={{border: '1px solid rgb(var(--grayscale-rgb-800) / 1)'}}> 
          <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 items-center`}> 
            <div className="lg:w-1/2"> 
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{title}</h2> 
              <p className="text-gray-400 mb-6">{description}</p> 
 
              {points && points.length > 0 && ( 
                <ul className="space-y-5"> 
                  {points.map((point, index) => ( 
                    <li key={index} className="flex gap-3"> 
                      <div className="flex-shrink-0 h-7 w-7 rounded-full bg-white bg-opacity-10 flex items-center justify-center mt-1"> 
                        <span className="text-white text-sm">✓</span> 
                      </div> 
                      <div> 
                        <h3 className="text-white font-medium">{point.title}</h3> 
                        <p className="text-gray-400 text-sm">{point.description}</p> 
                      </div> 
                    </li> 
                  ))} 
                </ul> 
              )} 
 
              {children} 
            </div> 
 
            <div className="lg:w-1/2"> 
              <div className="overflow-hidden rounded-lg h-full w-full"> 
                <video
                  src={videoUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </div> 
            </div> 
          </div> 
        </div> 
      </div> 
    </section>
  );
};

export default FeatureSection;