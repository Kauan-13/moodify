export interface Song {
  id: string;
  name: string;
  artist: string;
  album: string;
  year: number;
  coverUrl: string;
}

export interface Mood {
  name: string;
  colors: string[];
}

export interface Playlist {
  id: string;
  mood: Mood;
  songs: Song[];
}