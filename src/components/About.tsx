import React from 'react';
import { Shield, Clock, Wrench } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Shield,
      title: 'Expert Technicians',
      description: 'Verified and trained professionals at your service',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for emergencies',
    },
    {
      icon: Wrench,
      title: 'Quality Service',
      description: 'Using the best tools and equipment in the industry',
    },
  ];

  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We specialize in providing top-notch electric and pipe services for Indian households and offices. 
            From fan fittings to plumbing repairs, we ensure hassle-free solutions with expert technicians.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-blue-50">
              <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}