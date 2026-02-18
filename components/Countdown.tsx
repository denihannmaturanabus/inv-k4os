import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Heart } from 'lucide-react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // FECHA OBJETIVO: 6 de Marzo 2026 a las 21:00
    const targetDate = new Date('2026-03-06T19:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Componente de Caja de Tiempo Reutilizable
  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="relative bg-gray-900 w-20 h-24 md:w-28 md:h-32 rounded-2xl shadow-xl border border-purple-500/30 flex items-center justify-center mb-3 group overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute top-0 left-0 w-full h-1 bg-purple-500/50"></div>
        <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-purple-900/30 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
        
        <span className="text-4xl md:text-6xl font-black text-white z-10 font-mono tabular-nums">
          {value < 10 ? `0${value}` : value}
        </span>
      </div>
      <span className="text-xs font-bold text-purple-300 uppercase tracking-[0.2em]">{label}</span>
    </div>
  );

  return (
    <div className="w-full max-w-4xl mx-auto text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-black/90 backdrop-blur-md rounded-[3rem] p-8 md:p-16 shadow-2xl border border-purple-500/30 relative overflow-visible"
      >
        {/* Icono flotante */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-purple-600 p-4 rounded-full shadow-lg text-white">
          <Clock size={32} />
        </div>

        {/* Té Kila flotante */}
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [-5, 5, -5]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 3,
            ease: "easeInOut"
          }}
          className="absolute -right-4 top-8 md:-right-8 md:top-12 w-24 h-24 md:w-32 md:h-32 z-20"
        >
          <img 
            src="/img/tekila.png" 
            alt="Té Kila" 
            className="w-full h-full object-contain drop-shadow-2xl"
          />
        </motion.div>

        <h3 className="text-2xl md:text-4xl font-black text-white mb-2 mt-4">
          Ven a tomar TE KILA
        </h3>
        <p className="text-purple-300 font-medium mb-12 flex items-center justify-center gap-2">
          6 de Marzo, 2026 - 19:00 HS <Heart size={16} fill="currentColor" />
        </p>

        {/* Grid del Contador */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <TimeBox value={timeLeft.days} label="Días" />
          <TimeBox value={timeLeft.hours} label="Horas" />
          <TimeBox value={timeLeft.minutes} label="Minutos" />
          
          {/* Segundos con animación de latido */}
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <TimeBox value={timeLeft.seconds} label="Segundos" />
          </motion.div>
        </div>

        <div className="mt-12 bg-purple-900/50 inline-block px-6 py-3 rounded-full border border-purple-500/30">
          <p className="text-purple-100 text-sm md:text-base font-medium italic">
            "Sal en las heridas, tequila en la garganta,
             Adicta a esta vida, dame un shot, shot, shot"
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Countdown;
