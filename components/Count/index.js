'use client'
import React, { useEffect, useState, useRef } from 'react';
import { FaUsers, FaSmile, FaClock } from 'react-icons/fa';

const useCounter = (end, duration = 2000, delay = 0, shouldStart, increment = 1) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (!shouldStart) return;

    const timer = setTimeout(() => {
      const animate = (timestamp) => {
        if (!startTimeRef.current) startTimeRef.current = timestamp;
        const progress = timestamp - startTimeRef.current;
        const value = Math.min((progress / duration) * end, end);
        
        countRef.current = Math.floor(value / increment) * increment;
        setCount(countRef.current);

        if (progress < duration) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timer);
      startTimeRef.current = null;
    };
  }, [end, duration, delay, shouldStart, increment]);

  return count;
};

const CountItem = ({ number, label, icon, unit, isVisible, index }) => {
  const baseDuration = 2000;
  const duration = baseDuration;
  const delay = 0;
  
  let increment = number === 500 ? 50 : number === 98 ? 5 : 1;
  
  const count = useCounter(number, duration, delay, isVisible, increment);

  return (
    <div className="flex items-center space-x-4 p-4">
      <div className="text-3xl text-buttonColor">{icon}</div>
      <div>
        <dd className="text-2xl font-bold tracking-tight text-buttonColor">
          {count}{unit}
        </dd>
        <dt className="text-sm text-buttonColor">{label}</dt>
      </div>
    </div>
  );
};

const Count = () => {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { number: 500, label: 'Clients Served', icon: <FaUsers />, unit: '+' },
    { number: 98, label: 'Client Satisfaction', icon: <FaSmile />, unit: '%' },
    { number: 10, label: 'Years Experience', icon: <FaClock />, unit: '+' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(document.querySelector('#count-section'));

    return () => observer.disconnect();
  }, []);

  return (
    <div id="count-section" className="bg-[#e7f5f5] py-8 ">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <dl className="flex flex-wrap items-center md:justify-between justify-center gap-12">
          {stats.map((stat, index) => (
            <CountItem key={index} {...stat} isVisible={isVisible} index={index} />
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Count;