
import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Star, Sparkles } from 'lucide-react';
import FloatingHeart from './FloatingHeart';

const Hero: React.FC = () => {
  const triggerConfetti = useCallback(() => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  }, []);

  return (
    <header className="relative min-h-[70vh] md:min-h-[80vh] flex flex-col items-center justify-center text-center overflow-hidden bg-black py-20">
      {/* Marquee superior con logo K4OS */}
      <div className="absolute top-0 left-0 w-full overflow-hidden py-3 md:py-4 border-b border-white/10 z-20">
        <div className="flex whitespace-nowrap animate-marquee-fast">
          {[...Array(30)].map((_, i) => (
            <img 
              key={i}
              src="/img/k4-k4os-cromo.png" 
              alt="K4OS" 
              className="h-12 md:h-20 mx-2 md:mx-4 inline-block opacity-80"
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-fast {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-fast {
          animation: marquee-fast 20s linear infinite;
          width: max-content;
        }
      `}</style>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="z-10 px-4"
      >
        <div className="flex justify-center mb-6">
              <FloatingHeart />
        </div>

        <h1 className="text-4xl md:text-9xl font-black mb-3 tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          MONSE <span className="block text-2xl md:text-6xl not-italic text-white">CUMPLE 9</span>
        </h1>
        
        <p className="text-sm md:text-2xl font-light text-gray-300 mb-12 max-w-sm md:max-w-lg mx-auto leading-relaxed px-6">
          Acompañame a celabrar mi cumplaños al estilo <span className="text-purple-400 font-bold underline decoration-wavy">K4OS</span> 4ever!
        </p>
      </motion.div>

      {/* Floating Instruments Mockup Decor */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute bottom-10 left-10 opacity-20 hidden md:block"
      >
        <img src="https://picsum.photos/seed/bass/200/300" className="w-32 rotate-12 grayscale invert" alt="Vibe" />
      </motion.div>
      
      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
        className="absolute top-20 right-10 opacity-20 hidden md:block"
      >
        <img src="https://picsum.photos/seed/mic/200/300" className="w-32 -rotate-12 grayscale invert" alt="Vibe" />
      </motion.div>
    </header>
  );
};

export default Hero;
