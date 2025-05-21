import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  tags?: string[];
  centered?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  tags = [],
  centered = false,
  className = '',
}) => {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {tags.length > 0 && (
        <div className="flex gap-2 mb-4 justify-center">
          {tags.map((tag, index) => (
            <span
              key={index}
              style={{backgroundColor:'#18181a',color:'#6e727b'}}
              className="px-3 py-1 bg-purple-600/20 text-purple-400 text-lg rounded-full"
            >
             {tag}
            </span>
          ))}
        </div>
      )}
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-4">{title}</h2>
      {subtitle && <p className="text-gray-400 max-w-3xl mx-auto text-2xl">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;