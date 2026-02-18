
import React from 'react';
import { motion } from 'framer-motion';
import Background from './components/Background';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Details from './components/Details';
import Playlist from './components/Playlist';
import RSVPForm from './components/RSVPForm';
import Footer from './components/Footer';
import FloatingHeart from './components/FloatingHeart';

const App: React.FC = () => {
  // Target date: March 6th, 2026 at 9:00 PM
  const TARGET_DATE = "2026-03-06T21:00:00";

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-purple-200 selection:text-purple-900 pb-10 relative">
      <Background />
      <Hero />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        <section id="countdown" className="pt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Countdown targetDate={TARGET_DATE} />
          </motion.div>
        </section>

        <section id="details">
          <Details />
        </section>

        <section id="playlist">
          <Playlist />
        </section>

        <section id="rsvp">
          <RSVPForm />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
