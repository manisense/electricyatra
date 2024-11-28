import React from 'react';
import { Zap, Droplet, Home, Star } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Zap,
      title: 'Electrical Services',
      items: [
        'Meter installation and replacement',
        'Wire fittings and repairs',
        'Fan and light fittings',
        'LED/TV installation',
        'AC and fridge repairs',
      ],
    },
    {
      icon: Droplet,
      title: 'Plumbing Services',
      items: [
        'Tap and shower fittings',
        'Pipe leak repairs',
        'Water heater installation',
        'Sink and drainage cleaning',
        'RO and water filter installation',
      ],
    },
    {
      icon: Home,
      title: 'Home Appliances',
      items: [
        'Washing machine servicing',
        'Microwave repairs',
        'Kitchen chimney cleaning',
        'Inverter and battery setup',
        'Smart home solutions',
      ],
    },
    {
      icon: Star,
      title: 'Premium Services',
      items: [
        'Smart home setup',
        'Solar panel installation',
        'CCTV installation',
        'Home automation',
        'Safety inspections',
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600">Comprehensive solutions for your everyday needs!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <ul className="space-y-2">
                {service.items.map((item, idx) => (
                  <li key={idx} className="text-gray-600 flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}