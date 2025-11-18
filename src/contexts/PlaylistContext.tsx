import { createContext, useContext, type ReactNode } from "react";
import type { Playlist } from "../types/playlist";
import { playlistsData } from "../data/playlists";

interface PlaylistContextType {
  playlists: Playlist[];
  getPlaylistById: (id: string) => Playlist | null;
}

const PlaylistContext = createContext<PlaylistContextType | undefined>(undefined);

const PlaylistProvider = ({ children }: { children: ReactNode }) => {
  const getPlaylistById = (id: string): Playlist | null => {
    return playlistsData.find((playlist) => playlist.id === id) || null;
  };

  return (
    <PlaylistContext.Provider value={{ playlists: playlistsData, getPlaylistById }}>
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