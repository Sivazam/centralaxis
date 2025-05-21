import React from 'react';
import Button from './Button';

interface CTASectionProps {
  title: string;
  subtitle?: string;
  primaryButtonText: string;
  secondaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonLink?: string;
  variant?: 'primary' | 'secondary';
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  subtitle,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonLink = '#',
  secondaryButtonLink = '#',
  variant = 'primary',
}) => {
  const isPrimary = variant === 'primary';

  return (
    <div className="lg:mx-20">
      <section 
        className="py-10 px-4 sm:px-6 lg:px-8 rounded-xl" 
        style={{ backgroundColor: '#150d22'}}
      >
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left md:max-w-xl w-full">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">{title}</h2>
              {subtitle && <p className="text-gray-300">{subtitle}</p>}
            </div>

            <div className="flex flex-col gap-4 w-full md:w-auto">
              <Button 
                variant="primary" 
                size="lg"
                href={primaryButtonLink}
                className="text-white font-medium px-8 py-2.5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                style={{ 
                  backgroundColor: '#8b5cf6',
                  boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)'
                }}
              >
                {primaryButtonText}
              </Button>
              
              {secondaryButtonText && (
                <Button 
                  variant="outline" 
                  size="lg"
                  href={secondaryButtonLink}
                  className="border border-gray-600 text-white font-medium px-8 py-2.5 rounded-full transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  style={{ 
                    backgroundColor: '#18181a',
                    boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)'
                  }}
                >
                  {secondaryButtonText}
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTASection;