
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
    <header className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background elements removed for global background */}

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="z-10 px-4"
      >
        <div className="flex justify-center mb-6">
              <FloatingHeart />
        </div>

        <h1 className="text-6xl md:text-9xl font-black mb-4 tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
          MONSE <span className="block text-4xl md:text-6xl not-italic text-gray-900">4EVER</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-light text-gray-700 mb-12 max-w-lg mx-auto leading-relaxed">
          El primer álbum fue un éxito, pero esta <span className="text-purple-600 font-bold underline decoration-wavy">Party</span> va a ser legendaria.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={triggerConfetti}
          className="group relative px-8 py-4 bg-purple-600 rounded-full font-bold text-lg overflow-hidden transition-all hover:bg-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.4)]"
        >
          <span className="relative z-10 flex items-center gap-2">
            <Sparkles size={20} />
            ¡CELEBRAR AHORA!
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </motion.button>
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
