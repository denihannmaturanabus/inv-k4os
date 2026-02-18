import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full relative overflow-hidden">
      
      {/* BARRA ANIMADA (Banner K4OS Marquee) */}
      <div className="w-full relative border-t-2 border-purple-900 bg-purple-950 overflow-hidden py-6"
           style={{
             boxShadow: 'inset 0px 10px 38px -10px rgba(168, 85, 247, 0.3), inset 0px -10px 38px -10px rgba(168, 85, 247, 0.3)'
           }}>
        
        <div className="flex whitespace-nowrap animate-marquee-footer">
          {[...Array(20)].map((_, i) => (
            <img 
              key={i}
              src="/img/k4-k4os-cromo.png" 
              alt="K4OS" 
              className="h-16 md:h-24 mx-6 inline-block opacity-90"
            />
          ))}
        </div>
      </div>

      {/* Estilos para la animación marquee */}
      <style>{`
        @keyframes marquee-footer {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-footer {
          animation: marquee-footer 30s linear infinite;
          width: max-content;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
