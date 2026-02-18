
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Send } from 'lucide-react';

const RSVPForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', guests: 1, comment: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construir mensaje de WhatsApp sin emojis para mayor compatibilidad
    const mensaje = `Hola! Confirmo asistencia a la fiesta de Monse\n\n` +
      `Nombre: ${formData.name}\n` +
      `Cantidad de personas: ${formData.guests}\n` +
      `${formData.comment ? `Mensaje: ${formData.comment}\n` : ''}` +
      `\nNos vemos el 6 de Marzo!`;
    
    const numeroWhatsApp = '56958025851';
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    
    // Abrir WhatsApp inmediatamente (antes del setTimeout para evitar que se bloquee)
    window.open(urlWhatsApp, '_blank');
    
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black tracking-tighter mb-4 italic text-gray-900">¿TE LO VAS A <span className="text-purple-600 underline decoration-purple-600/30 underline-offset-8">PERDER?</span></h2>
        <p className="text-gray-600 uppercase text-xs font-bold tracking-[0.2em]">Confirmá tu asistencia antes del 1 de Marzo</p>
      </div>

      <div className="bg-white/60 backdrop-blur-lg border border-white/60 shadow-2xl rounded-3xl p-8 md:p-12 relative overflow-hidden">
        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-6">
                <CheckCircle2 size={48} />
              </div>
              <h3 className="text-2xl font-black italic mb-2 text-gray-900">¡LISTO PARA EL POGO!</h3>
              <p className="text-gray-600">Tu entrada virtual está confirmada. Nos vemos en el show.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-8 text-xs font-bold text-gray-500 hover:text-purple-900 transition-colors uppercase tracking-widest"
              >
                Volver al formulario
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <label className="text-[10px] font-black text-purple-600 uppercase tracking-widest px-1">Tu Nombre Artístico (o real)</label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ej: Monse G."
                  className="w-full bg-white border border-purple-100 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-purple-600 uppercase tracking-widest px-1">Acompañantes</label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                    className="w-full bg-white border border-purple-100 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-600 appearance-none"
                  >
                    {[1, 2, 3, 4].map(n => <option key={n} value={n} className="bg-white text-gray-900">{n}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-purple-600 uppercase tracking-widest px-1">Asistencia</label>
                  <div className="h-[50px] flex items-center justify-center bg-purple-100 text-purple-600 font-bold rounded-xl border border-purple-200">
                    CONFIRMADO
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-purple-600 uppercase tracking-widest px-1">Dedicame una frase rockera</label>
                <textarea
                  rows={3}
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  placeholder="¿Algún mensaje para la cumpleañera?"
                  className="w-full bg-white border border-purple-100 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all resize-none"
                />
              </div>


              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === 'sending'}
                type="submit"
                className="w-full bg-white text-black font-black py-4 rounded-xl flex items-center justify-center gap-3 transition-all hover:bg-purple-600 hover:text-white group"
              >
                {status === 'sending' ? 'PROCESANDO...' : 'CONFIRMAR ASISTENCIA'}
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RSVPForm;
