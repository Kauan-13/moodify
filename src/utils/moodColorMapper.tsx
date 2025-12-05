import type { Playlist } from "../types/playlist"
import { playlistsData } from "../data/playlists"

export interface MoodColors {
  primary: string[]
  fallback: string[]
}

const fallbackColorPalettes = [
  ["#6366F1", "#8B5CF6", "#A855F7"], // Roxo/Azul
  ["#EC4899", "#F43F5E", "#FB7185"], // Rosa/Vermelho
  ["#10B981", "#14B8A6", "#06B6D4"], // Verde/Ciano
  ["#F59E0B", "#F97316", "#EF4444"], // Laranja/Vermelho
  ["#8B5CF6", "#D946EF", "#EC4899"], // Roxo/Magenta
  ["#06B6D4", "#0EA5E9", "#3B82F6"], // Ciano/Azul
  ["#14B8A6", "#10B981", "#84CC16"], // Turquesa/Verde
  ["#F97316", "#FB923C", "#FBBF24"], // Laranja claro
  ["#A855F7", "#C026D3", "#E879F9"], // Roxo/Rosa
  ["#EF4444", "#F87171", "#FCA5A5"], // Vermelho
]


const hashString = (str: string): number => {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash 
  }
  return Math.abs(hash)
}


export const getMoodColors = (moodName: string): string[] => {
  const normalizedMood = moodName.toLowerCase().trim()

  const playlist = playlistsData.find((p) => p.mood.name.toLowerCase() === normalizedMood)

  if (playlist && playlist.mood.colors.length > 0) {
    return playlist.mood.colors
  }

  const hash = hashString(normalizedMood)
  const paletteIndex = hash % fallbackColorPalettes.length
  return fallbackColorPalettes[paletteIndex]
}


export const getPlaylistById = (id: string): Playlist | undefined => {
  return playlistsData.find((p) => p.id === id)
}


export const getPlaylistByMoodName = (moodName: string): Playlist | undefined => {
  const normalizedMood = moodName.toLowerCase().trim()
  return playlistsData.find((p) => p.mood.name.toLowerCase() === normalizedMood)
}


export const getAllPlaylists = (): Playlist[] => {
  return playlistsData
}
