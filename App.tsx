import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Background from './components/Background';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Details from './components/Details';
import Playlist from './components/Playlist';
import RSVPForm from './components/RSVPForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((err) => console.log("Esperando interacción..."));
        // Opcional: bajar un poco el volumen para que no sature al entrar
        audioRef.current.volume = 0.6;
      }
    };

    // Escucha el primer clic para iniciar la música
    window.addEventListener('click', playAudio, { once: true });

    return () => window.removeEventListener('click', playAudio);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-purple-200 selection:text-purple-900 relative">
      {/* Elemento de Audio Oculto */}
      <audio ref={audioRef} loop>
        <source src="/K4OS%20-%20Té%20Kila.mp3" type="audio/mpeg" />
      </audio>

      <Background />
      <Hero />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-12">
        <section id="countdown" className="pt-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
          </motion.div>
        </section>

        <section id="details">
          <Details />
        </section>

        <section id="playlist">
          <Playlist />
        </section>

        <section id="COUNTDOWN">
          <Countdown />
        </section>

        <section id="rsvp">
          <RSVPForm />
        </section>
      </main>

      {/* K4OS Band Photo */}
      <section className="w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <img 
            src="/img/KAOS - Editado.png" 
            alt="K4OS Band" 
            className="w-full h-auto object-cover block"
          />
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default App;