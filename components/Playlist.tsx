import React from 'react';
import { Music } from 'lucide-react';

const Playlist: React.FC = () => {
  // ID de la playlist (puedes cambiar este ID por el de "Aquellos")
  const spotifyPlaylistId = "37i9dQZF1DX8S76of9YmXm"; 

  return (
    <div className="space-y-12 w-full max-w-2xl mx-auto p-4">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-black tracking-tighter italic uppercase text-gray-900">
          VIBES DEL <span className="text-purple-600">CUMPLE</span>
        </h2>
        <p className="text-gray-600 text-sm max-w-md mx-auto">
          Prepará los oídos para la previa con los mejores hits seleccionados para el cumple.
        </p>
      </div>

      <div className="rounded-3xl p-1 shadow-2xl bg-white/40 border border-purple-200 backdrop-blur-sm">
        <div className="flex items-center gap-4 p-6 text-purple-600">
          <Music size={28} className="animate-pulse" />
          <h3 className="text-lg font-black italic uppercase tracking-widest">
            On Rotation: Aquellos
          </h3>
        </div>
        
        {/* Contenedor del Reproductor con la URL CORREGIDA */}
        <div className="w-full overflow-hidden rounded-2xl bg-[#121212]">
          <iframe 
            src={`https://open.spotify.com/embed/playlist/${spotifyPlaylistId}?utm_source=generator&theme=0`}
            width="100%" 
            height="352" 
            frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>

        <div className="p-6 flex justify-between items-center">
          <div className="flex gap-2">
            {[1, 2, 3].map(i => (
              <div 
                key={i} 
                className="w-2 h-2 rounded-full bg-purple-600 animate-bounce" 
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
          <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
            Curated for the fans
          </p>
        </div>
      </div>
    </div>
  );
};

export default Playlist;