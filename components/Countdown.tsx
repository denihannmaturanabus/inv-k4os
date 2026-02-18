import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CountdownProps {
  targetDate: string;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const distance = target - now;

      if (isNaN(target) || distance < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      };
    };

    const timer = setInterval(() => setTimeLeft(calculateTime()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeUnit = ({ value, label }: { value: number, label: string }) => (
    <div className="flex flex-col items-center">
      <span className="text-6xl md:text-8xl lg:text-9xl font-black text-gray-900 tracking-tighter tabular-nums leading-none">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-[10px] md:text-xs font-bold text-purple-700/80 uppercase tracking-[0.3em] mt-2">
        {label}
      </span>
    </div>
  );

  return (
    <div className="relative w-full max-w-4xl mx-auto bg-white/40 backdrop-blur-md rounded-[3rem] p-10 border border-purple-200/50 shadow-2xl overflow-hidden group">
      
      {/* 1. FECHA CHIQUITA ARRIBA AL MEDIO */}
      <div className="flex flex-col items-center mb-10">
        <span className="text-purple-600 font-bold tracking-[0.4em] text-xs md:text-sm uppercase mb-2">
          Save the Date
        </span>
        <div className="flex items-center gap-3 text-purple-600 font-black italic text-2xl md:text-3xl">
          <span>06</span>
          <span className="opacity-30">.</span>
          <span>03</span>
          <span className="opacity-30">.</span>
          <span>26</span>
        </div>
        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent mt-4 opacity-50" />
      </div>

      {/* 2. CONTADOR GRANDE CENTRADO */}
      <div className="flex justify-center items-center gap-4 md:gap-8">
        <TimeUnit value={timeLeft.days} label="Días" />
        <span className="text-4xl md:text-6xl font-black text-purple-300 mb-6">:</span>
        <TimeUnit value={timeLeft.hours} label="Horas" />
        <span className="text-4xl md:text-6xl font-black text-purple-300 mb-6">:</span>
        <TimeUnit value={timeLeft.minutes} label="Min" />
        <span className="text-4xl md:text-6xl font-black text-purple-300 mb-6">:</span>
        <TimeUnit value={timeLeft.seconds} label="Seg" />
      </div>

      {/* Decoración Estilo Ticket */}
      <div className="absolute top-0 right-0 overflow-hidden w-32 h-32 pointer-events-none">
        <div className="absolute top-6 -right-8 rotate-45 bg-purple-600 text-white text-[10px] font-bold py-1 px-12 shadow-lg uppercase tracking-widest">
          Invitación
        </div>
      </div>
    </div>
  );
};

export default Countdown;