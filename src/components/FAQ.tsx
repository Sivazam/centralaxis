import React from 'react';
import SectionHeading from './SectionHeading';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: 'Are these solutions applicable to hybrid cloud environments?',
      answer: 'Yes, our solutions are designed to work seamlessly across on-premises, private cloud, and public cloud environments. We provide unified management capabilities for hybrid infrastructure.'
    },
    {
      question: 'How do you ensure data security?',
      answer: 'We implement multiple layers of security including encryption at rest and in transit, role-based access controls, audit logging, and compliance with industry standards such as SOC 2, ISO 27001, and GDPR.'
    },
    {
      question: 'How does pricing work?',
      answer: 'Our pricing is based on the scale of your infrastructure and the specific modules you need. We offer flexible subscription models with options for monthly or annual billing.'
    },
    {
      question: 'Do you provide ongoing support and maintenance for the platform?',
      answer: 'Yes, we offer 24/7 technical support, regular software updates, and dedicated account management. Our support tiers include standard, premium, and enterprise options to meet different needs.'
    },
    {
      question: 'How do I get started?',
      answer: 'You can begin with a free consultation and demo of our platform. Our team will assess your requirements and recommend the best configuration for your environment.'
    }
  ];

  return (
    <section className="py-16" id="faq" >
       
      <div className="container mx-auto px-4">
        {/* <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">Frequently asked questions</h2> */}
         
         <SectionHeading 
            title="Frequently asked questions"
            centered={true}
            tags={['FAQs']}
            subtitle="Find answers to common questions about our solutions."
          />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{padding:'0 12rem',paddingTop:'2rem'}}>
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-900/50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-white mb-3">{faq.question}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;