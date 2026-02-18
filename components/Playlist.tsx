import React from 'react';
import { Music, Play, ExternalLink } from 'lucide-react';

const Playlist: React.FC = () => {
  const spotifyPlaylistId = "37i9dQZF1DX8S76of9YmXm";
  const playlistUrl = `https://open.spotify.com/playlist/5fyCPnMewW9ZuDPf6fIrPY?si=1Jv1M5fUSAOkwDl-yMnk2w`;

  // Ejemplo de canciones (Aquí deberías poner las de tu playlist "Aquellos")
  const songs = [
    { id: 1, title: "Té Kila", artist: "K4OS", duration: "2:46" },
    { id: 2, title: "Tan Fácil", artist: "K4OS", duration: "3:03" },
    { id: 3, title: "Means Girls", artist: "KATSEYE", duration: "3:37" },
    { id: 4, title: "Corazones Rojos", artist: "Margarita", duration: "3:05" },
  ];

  return (
    <div className="space-y-8 w-full max-w-2xl mx-auto p-4">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-black tracking-tighter italic uppercase text-gray-900">
          VIBES DEL <span className="text-purple-600">CUMPLE</span>
        </h2>
        <p className="text-gray-600 text-sm max-w-md mx-auto">
          Prepará los oídos para la previa con los mejores hits seleccionados.
        </p>
      </div>

      <div className="rounded-3xl shadow-2xl bg-white border border-purple-100 overflow-hidden">
        {/* Header de la Lista */}
        <div className="flex items-center justify-between p-6 bg-gradient-to-r from-purple-50 to-white border-b border-purple-100">
          <div className="flex items-center gap-4 text-purple-600">
            <Music size={24} className="animate-pulse" />
            <h3 className="text-lg font-black italic uppercase tracking-widest text-gray-800">
              Playlist: Aquellos
            </h3>
          </div>
          <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest">
            {songs.length} Tracks
          </span>
        </div>

        {/* Lista de Canciones */}
        <div className="divide-y divide-gray-50">
          {songs.map((song) => (
            <div key={song.id} className="group flex items-center justify-between p-4 hover:bg-purple-50 transition-colors cursor-default">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-purple-600 group-hover:text-white transition-all">
                  <Play size={14} fill="currentColor" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{song.title}</p>
                  <p className="text-xs text-gray-500 font-medium">{song.artist}</p>
                </div>
              </div>
              <span className="text-xs text-gray-400 font-mono">{song.duration}</span>
            </div>
          ))}
        </div>

        {/* Botón de Acción */}
        <div className="p-6 bg-gray-50 flex flex-col items-center gap-4">
          <a 
            href={playlistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#1DB954] hover:bg-[#1ed760] text-white px-8 py-3 rounded-full font-bold text-sm transition-transform active:scale-95 shadow-lg uppercase tracking-wider"
          >
            Abrir en Spotify
            <ExternalLink size={16} />
          </a>
          
          <div className="flex gap-2">
            {[1, 2, 3].map(i => (
              <div 
                key={i} 
                className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce" 
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlist;