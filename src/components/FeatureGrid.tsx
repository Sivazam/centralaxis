import React from 'react';
import FeatureCard from './FeatureCard';
import { Server, Network, Shield, Cpu, BarChart, Database } from 'lucide-react';

const FeatureGrid: React.FC = () => {
  const features = [
    {
      title: 'Resource Management',
      description: 'Monitor and manage all your computing resources from a single dashboard with real-time insights.',
      icon: Server
    },
    {
      title: 'Deployment Automation',
      description: 'Automate deployment processes and orchestrate container management across your infrastructure.',
      icon: Database
    },
    {
      title: 'Networking',
      description: 'Comprehensive networking solutions to ensure optimal connectivity and performance for all services.',
      icon: Network
    },
    {
      title: 'Resource Monitoring',
      description: 'Deep insights into resource usage and availability with predictive analytics for capacity planning.',
      icon: BarChart
    },
    {
      title: 'Digital Twins',
      description: 'Create virtual replicas of your infrastructure to simulate changes and optimize configurations.',
      icon: Cpu
    },
    {
      title: 'Security Management',
      description: 'Enterprise-grade security controls and compliance monitoring for your entire infrastructure.',
      icon: Shield
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
        />
      ))}
    </div>
  );
};

export default FeatureGrid;