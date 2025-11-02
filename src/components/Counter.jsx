// components/StatsCounter.jsx
'use client';
import React, { useState, useEffect } from 'react';
import { 
  FaUserTie, 
  FaBoxOpen, 
  FaUserFriends, 
  FaMoneyBillWave 
} from 'react-icons/fa';

const StatsCounter = () => {
  const [counters, setCounters] = useState([
    { id: 1, current: 0, target: 10500, text: "Sailers active on our site", icon: FaUserTie },
    { id: 2, current: 0, target: 33000, text: "Monthly Product Sale", icon: FaBoxOpen },
    { id: 3, current: 0, target: 45500, text: "Customers active on our site", icon: FaUserFriends },
    { id: 4, current: 0, target: 25000, text: "Annual gross sale on our site", icon: FaMoneyBillWave }
  ]);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    counters.forEach((counter) => {
      let currentStep = 0;
      const increment = counter.target / steps;

      const timer = setInterval(() => {
        currentStep++;
        const newValue = Math.min(Math.floor(increment * currentStep), counter.target);

        setCounters(prev => prev.map(item => 
          item.id === counter.id ? { ...item, current: newValue } : item
        ));

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, []);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center md:justify-between gap-6">
          {counters.map((stat) => {
            const IconComponent = stat.icon;
            
            return (
              <div 
                key={stat.id}
                className="group bg-white rounded border border-gray-300 p-6 text-center w-60 sm:w-64 transition-all duration-300 hover:bg-[#db4444]"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <IconComponent className="text-3xl text-gray-600 group-hover:text-white transition-colors duration-300" />
                </div>
                
                {/* Counter */}
                <div className="mb-2">
                  <span className="text-3xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300">
                    {formatNumber(stat.current)}
                  </span>
                </div>
                
                {/* Text */}
                <p className="text-sm text-gray-600 group-hover:text-white transition-colors duration-300">
                  {stat.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;
