import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full relative overflow-hidden pb-10">
      
      {/* BARRA ANIMADA (Banner K4OS Marquee) */}
      <div className="w-full relative border-t-2 border-b-2 border-purple-200 bg-white/80 backdrop-blur-sm overflow-hidden py-4 mb-10 group"
           style={{
             boxShadow: 'inset 0px 10px 38px -10px rgba(206, 136, 176, 0.3), inset 0px -10px 38px -10px rgba(206, 136, 176, 0.3)'
           }}>
        
        <div className="flex w-full whitespace-nowrap mask-linear-gradient" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
          {/* Marquee Container */}
          <div className="flex animate-marquee min-w-full items-center justify-around gap-12 group-hover:[animation-play-state:paused]">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-6xl md:text-8xl font-black italic tracking-tighter"
                    style={{
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      background: 'linear-gradient(to bottom, #333 0%, #000 40%, #666 50%, #000 60%, #333 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      filter: 'drop-shadow(0 0 5px rgba(128, 65, 235, 0.3))'
                    }}>
                K4OS
              </span>
            ))}
          </div>
          
          {/* Duplicado para loop infinito */}
          <div className="flex animate-marquee min-w-full items-center justify-around gap-12 group-hover:[animation-play-state:paused] ml-12" aria-hidden="true">
             {[...Array(10)].map((_, i) => (
              <span key={'dup-' + i} className="text-6xl md:text-8xl font-black italic tracking-tighter"
                    style={{
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      background: 'linear-gradient(to bottom, #333 0%, #000 40%, #666 50%, #000 60%, #333 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      filter: 'drop-shadow(0 0 5px rgba(128, 65, 235, 0.3))'
                    }}>
                K4OS
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Estilos para la animación marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
