import { createContext, useContext, type ReactNode, useState } from "react";
import type { Playlist } from "../types/playlist";
import { playlistsData } from "../data/playlists";

interface PlaylistContextType {
  playlists: Playlist[];
  getPlaylistById: (id: string) => Playlist | null;
  deletePlaylist: (id: string) => void;
  updatePlaylistName: (id: string, newName: string) => void;
}

const PlaylistContext = createContext<PlaylistContextType | undefined>(undefined);

const PlaylistProvider = ({ children }: { children: ReactNode }) => {
  const [playlists, setPlaylists] = useState<Playlist[]>(playlistsData);

  const getPlaylistById = (id: string): Playlist | null => {
    return playlists.find((playlist) => playlist.id === id) || null;
  };

  const deletePlaylist = (id: string): void => {
    setPlaylists(prevPlaylists => prevPlaylists.filter(playlist => playlist.id !== id));
  };

  const updatePlaylistName = (id: string, newName: string): void => {
    setPlaylists(prevPlaylists => 
      prevPlaylists.map(playlist => 
        playlist.id === id 
          ? { ...playlist, mood: { ...playlist.mood, name: newName } }
          : playlist
      )
    );
  };

  return (
    <PlaylistContext.Provider value={{ playlists, getPlaylistById, deletePlaylist, updatePlaylistName }}>
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylists = () => {
  const context = useContext(PlaylistContext);
  if (!context) {
    throw new Error("usePlaylists must be used within PlaylistProvider");
  }
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { type PlaylistContextType, PlaylistProvider, usePlaylists }