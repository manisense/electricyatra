import React from 'react';
import { PhoneCall } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your One-Stop Solution for All Electric and Pipe Services!
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Reliable, Affordable, and Expert Services for Indian Homes and Offices.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors duration-300 flex items-center mx-auto gap-2">
            <PhoneCall className="w-5 h-5" />
            Contact Us Today!
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}