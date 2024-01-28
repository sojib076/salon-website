// pages/index.js
 "use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';

const CountdownItem = ({ name, count }) => (
  <div className="text-center ">
    <h1 className="text-[72px] font-bold mb-2 text-[#051145]">{count} +</h1>
    <div className="text-black text-[16px] uppercase">{name}</div>
  </div>
);

const Counter = () => {
  const [countdown, setCountdown] = useState({
    happyCustomers: 0,
    therapistExperts: 0,
    awardsWon: 0,
    yearsExperienced: 0,
  });

  useEffect(() => {
    const targetCounts = {
      happyCustomers: 10,
      therapistExperts: 50,
      awardsWon: 10,
      yearsExperienced: 5,
    };

    const interval = setInterval(() => {
      setCountdown((prevCountdown) => ({
        happyCustomers: Math.min(prevCountdown.happyCustomers + 1, targetCounts.happyCustomers),
        therapistExperts: Math.min(prevCountdown.therapistExperts + 1, targetCounts.therapistExperts),
        awardsWon: Math.min(prevCountdown.awardsWon + 1, targetCounts.awardsWon),
        yearsExperienced: Math.min(prevCountdown.yearsExperienced + 1, targetCounts.yearsExperienced),
      }));
    }, 400);

    // Cleanup interval on reaching target counts
    const isTargetReached = () =>
      Object.keys(countdown).every((key) => countdown[key] >= targetCounts[key]);

    const checkAndClearInterval = () => {
      if (isTargetReached()) {
        clearInterval(interval);
      }
    };

    // Check and clear interval on component update
    checkAndClearInterval();

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [countdown]);

  return (
    <div className="container mx-auto p-10 servicesoverlay ">
      <section className="text-center p-10">
      <h2 className=" font-bold mb-4 text-[#148A87] text-[16px] leading-[10px]">Fun Fact</h2>
        <h2 className=" font-bold mb-4 text-[#051145] text-[50px] leading-[50px]">Our SPA & Beauty by Number</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 ">
          {Object.entries(countdown).map(([name, count]) => (
            <CountdownItem key={name} name={name} count={count} />
          ))}
        </div>
      </section>

      {/* Other sections go here */}
    </div>
  );
};

export default Counter;
