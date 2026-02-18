
import React from 'react';
import { MapPin, Calendar, Clock, Ticket } from 'lucide-react';
import { motion } from 'framer-motion';

const Details: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter">
          NUEVA FECHA <br />
          <span className="text-purple-600">CONFIRMADA</span>
        </h2>
        
        <div className="space-y-6">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
              <Calendar size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Fecha</p>
              <p className="text-xl font-bold text-gray-900">Viernes, 6 de Marzo</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Hora</p>
              <p className="text-xl font-bold text-gray-900">19:00 HS - Puerta</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Lugar</p>
              <p className="text-xl font-bold text-gray-900">Mafil 991, San Bernardo</p>
            </div>
          </div>
        </div>

        <motion.a
          whileHover={{ x: 10 }}
          href="https://maps.app.goo.gl/cnxxgSXUEuEEEvos7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-purple-600 font-bold tracking-widest hover:text-purple-900 transition-colors group"
        >
          VER EN GOOGLE MAPS
          <div className="w-8 h-[1px] bg-purple-600 group-hover:bg-purple-900 group-hover:w-12 transition-all"></div>
        </motion.a>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="aspect-[3/4] rounded-3xl overflow-hidden glass relative group">
          <img 
            src="/img/details.jpg" 
            alt="Venue Vibe" 
            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-auto">
            <div className="flex items-center gap-2 mb-2 bg-purple-600 px-3 py-1 rounded text-[10px] font-bold text-white w-fit">
              <Ticket size={12} />
              ENTRADA SOLO CON INVITACIÓN
            </div>
            <h4 className="text-base md:text-2xl text-white font-black italic drop-shadow-lg leading-tight">
              DRESS CODE:<br className="md:hidden" /> MORADO/TURQUESA/<br className="md:hidden" />ROJO/ROSA
            </h4>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Details;
