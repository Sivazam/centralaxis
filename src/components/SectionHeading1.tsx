import React from 'react';
import { Mail, Zap, BarChart3, CircuitBoard, Network } from 'lucide-react';

// Section Heading Component
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
    <div className={`${centered ? 'text-center' : ''} ${className}`} style={{margin:'0 2rem'}}>
      {tags.length > 0 && (
        <div className={`flex gap-2 mb-4 ${centered ? 'justify-center' : ''}`}>
          {tags.map((tag, index) => (
            <span
              key={index}
              style={{backgroundColor:'#18181a',color:'#6e727b'}}
              className="px-3 py-1 text-xs text-gray-400 rounded-sm"
            >
             {tag}
            </span>
          ))}
        </div>
      )}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">{title}</h2>
      {subtitle && <p className="text-gray-400 max-w-xl">{subtitle}</p>}
    </div>
  );
};

// Feature Card Component
interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className=" rounded-lg p-8 transition-all duration-300 h-full flex flex-col" style={{backgroundColor:'#18181a',border:'1px solid rgb(var(--grayscale-rgb-800) / 1)'}}>
      <div className="flex items-center mb-4">
        <div className="mr-4" style={{backgroundColor:'#272729',padding:'0.5rem',borderRadius:'1.5rem'}}>
          <Icon className="h-6 w-6 text-gray-400" />
        </div>
        <h3 className="text-2xl font-medium text-white">{title}</h3>
      </div>
      <p className="text-gray-400 text-lg">{description}</p>
    </div>
  );
};

// Main Section Component
const DynamicResourceSection: React.FC = () => {
  const features = [
    {
      title: 'Resource Management',
      description: 'See all of your resources in one place, update issues, and dynamically plan your resources.',
      icon: Mail
    },
    {
      title: 'Deployment Automation',
      description: 'From design, sourcing, supply, manufacturing, and deployment - our system automates the entire process.',
      icon: Zap
    },
    {
      title: 'Networking',
      description: 'Ensure that your networking infrastructure is always in place and ready to scale with your deployments.',
      icon: Network
    },
    {
      title: 'Firmware Versioning',
      description: 'Ensure that your firmware is always up to date and secure with our automated versioning system.',
      icon: CircuitBoard
    },
    {
      title: 'Digital Twins',
      description: 'Plan capacity intelligently with our digital twin technology.',
      icon: BarChart3
    }
  ];

  return (
    <section className="py-16 bg-black lg:p-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left side - Heading */}
          <div className="lg:w-2/3">
            <SectionHeading
              title="Dynamic Resource Management"
              subtitle="Seamlessly expand from racks to data centers. Our system grows with you, automatically managing resources across your entire infrastructure."
              tags={['Built for Scale']}
            />
          </div>
          
          {/* Right side - Feature cards */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-1  gap-12">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicResourceSection;