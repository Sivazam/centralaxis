import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ClientLogos from '../components/ClientLogos';
import FeatureSection from '../components/FeatureSection';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import FeatureGrid from '../components/FeatureGrid';
import BookDemo from '../components/BookDemo';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import DynamicResourceSection from '../components/SectionHeading1';

const HomePage: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      
      <Hero />
      
      <ClientLogos />
      
      <section className="py-20">
        <div className="container mx-auto px-4">

          <SectionHeading 
            title="Modernizing the Digital Backbone"
            centered={true}
            tags={['Built for AI']}
            subtitle="Data center software (DCIM, BMS and EPMS) has stagnated. We've built a better way."

          />
        </div>
      </section>
      
      <FeatureSection 
        title="Advanced Monitoring"
        description="Comprehensive monitoring tools designed specifically for your data center efficiency needs will provide insights and analytics to optimize performance across your entire infrastructure."
        videoUrl="https://www.centralaxis.com/hb-monitoring.mp4"
        points={[
          {
            title: "Real-time performance metrics and predictive analytics",
            description: "Monitor all critical systems in real-time with AI-powered predictions"
          },
          {
            title: "Customizable alerts and intelligent notifications",
            description: "Set up smart alerts with machine learning to reduce false positives"
          },
          {
            title: "Integrated connectivity and service mapping",
            description: "Visualize dependencies between services and infrastructure components"
          },
          {
            title: "Comprehensive reporting and trend analysis",
            description: "Generate detailed reports on performance, capacity, and utilization"
          }
        ]}
      />
      
      <FeatureSection 
        title="Network Management and Monitoring"
        description="Complete visibility into your networking infrastructure with management capabilities designed for modern hybrid environments, spanning physical, virtual, and cloud resources."
        videoUrl="https://www.centralaxis.com/landing/networking-b.mp4"
        reversed={true}
        points={[
          {
            title: "Real-time network performance monitoring and bandwidth optimization",
            description: "Monitor traffic patterns and optimize network utilization"
          },
          {
            title: "Automated configuration and change management",
            description: "Automate network device configurations with version control"
          },
          {
            title: "Advanced network diagnostics and troubleshooting",
            description: "Quickly identify and resolve network issues with diagnostic tools"
          }
        ]}
      />
      
      <FeatureSection 
        title="Asset Management"
        description="Streamline your data center operations with our comprehensive asset management system, designed to track and optimize resource utilization in real-time."
        videoUrl='https://www.centralaxis.com/landing/asset-management-b.mp4'
        points={[
          {
            title: "Centralized inventory tracking and lifecycle management",
            description: "Track hardware and software assets throughout their lifecycle"
          },
          {
            title: "Intelligent capacity based on usage trends and forecasting",
            description: "Plan capacity needs based on historical data and growth projections"
          },
          {
            title: "Comprehensive utilization and optimization recommendations",
            description: "Get actionable insights to optimize asset utilization and reduce costs"
          }
        ]}
      />
      
      <FeatureSection 
        title="A Single Pane of Glass"
        description="Unify monitoring and management across all systems, providing comprehensive visibility and control from a single interface."
        videoUrl='https://www.centralaxis.com/landing/SinglePane-b.mp4'
        reversed={true}
        points={[
          {
            title: "Comprehensive visibility across all of your computing infrastructure",
            description: "View all systems and resources from a single dashboard"
          },
          {
            title: "Unified operations dashboards for your teams",
            description: "Customizable views for different teams and roles"
          },
          {
            title: "Correlated data between infrastructure and applications",
            description: "Link infrastructure metrics with application performance"
          },
          {
            title: "Custom dashboards, reporting, and API integrations for ITSM products",
            description: "Integrate with your existing ITSM tools and create custom reports"
          }
        ]}
      />
      
      <FeatureSection 
        title="Built-In Compliance"
        description="Ensure regulatory compliance and adhere to industry standards with built-in compliance monitoring and reporting features."
        videoUrl='https://www.centralaxis.com/landing/__compliance.mp4'
        points={[
          {
            title: "Pre-built templates for major data center standards",
            description: "Quick implementation of compliance requirements"
          },
          {
            title: "SOC, PCI, HIPAA, and ISO 27001 compliance ready",
            description: "Satisfy regulatory requirements with built-in controls"
          },
          {
            title: "We guarantee compliance and certification-ready deployments",
            description: "Reduce compliance-related efforts and costs"
          }
        ]}
      />
      
      <FeatureSection 
        title="Data Center Planning"
        description="Plan and design the future of your data center infrastructure with advanced modeling and simulation tools."
        videoUrl='https://www.centralaxis.com/landing/dc-planning.mp4'
        reversed={true}
        points={[
          {
            title: "Model new racks and plot colocation space in data centers",
            description: "Plan physical layouts with 3D modeling"
          },
          {
            title: "Validate power loads and cooling needs",
            description: "Ensure optimal power and cooling distribution"
          },
          {
            title: "Capacity monitoring of the most advanced and efficient data centers worldwide",
            description: "Learn from best practices and industry benchmarks"
          }
        ]}
      />
      
      <section className="py-20">
      </section>
      <CTASection
        title="We've Built the Future of Data Centers"
        subtitle="Contact our team for a demo"
        primaryButtonText="Set Up a Time"
        secondaryButtonText="Learn More"
      />
        <section className="py-5">
      </section>
      <section className="py-16 bg-gray-900/30">
        {/* <div className="container mx-auto px-4">
          <SectionHeading 
            title="Dynamic Resource Management"
            subtitle="Advanced tools for intelligent monitoring and allocation of resources across your entire infrastructure."
            className="mb-12"
            tags={['Built for Scale']}
          />
          
          <FeatureGrid />
        </div> */}
        <DynamicResourceSection />
      </section>
      
      <BookDemo />
      
      <FAQ />
      
      <Footer />
    </div>
  );
};

export default HomePage;