import type { Playlist } from "../types/playlist";

export const playlistsData: Playlist[] = [
  {
    id: "1",
    mood: {
      name: "Happy",
      colors: ["#FFD700", "#FFA500"],
    },
    songs: [
      {
        id: "0",
        name: "Good as Hell",
        artist: "Lizzo",
        album: "Cuz I Love You",
        year: 2019,
        coverUrl: "./happy-music-album.jpg",
      },
      {
        id: "1",
        name: "Walking on Sunshine",
        artist: "Katrina & The Waves",
        album: "Walking on Sunshine",
        year: 1985,
        coverUrl: "./sunny-music-album.jpg",
      },
      {
        id: "2",
        name: "Don't Stop Me Now",
        artist: "Queen",
        album: "Jazz",
        year: 1977,
        coverUrl: "./queen-rock-album.jpg",
      },
    ],
  },
  {
    id: "2",
    mood: {
      name: "Sad",
      colors: ["#4A90E2", "#357ABD"],
    },
    songs: [
      {
        id: "0",
        name: "Someone Like You",
        artist: "Adele",
        album: "21",
        year: 2011,
        coverUrl: "./sad-ballad-album.jpg",
      },
      {
        id: "1",
        name: "The Night We Met",
        artist: "Lord Huron",
        album: "Strange Trails",
        year: 2015,
        coverUrl: "./melancholy-indie-album.jpg",
      },
      {
        id: "2",
        name: "Black",
        artist: "Pearl Jam",
        album: "Ten",
        year: 1994,
        coverUrl: "./grunge-rock-album.jpg",
      },
    ],
  },
  {
    id: "3",
    mood: {
      name: "Energetic",
      colors: ["#E74C3C", "#C0392B"],
    },
    songs: [
      {
        id: "0",
        name: "Blinding Lights",
        artist: "The Weeknd",
        album: "After Hours",
        year: 2020,
        coverUrl: "./electronic-synth-album.jpg",
      },
      {
        id: "1",
        name: "Levitating",
        artist: "Dua Lipa",
        album: "Future Nostalgia",
        year: 2020,
        coverUrl: "./dance-pop-album.jpg",
      },
      {
        id: "2",
        name: "Pump It Up",
        artist: "Endor",
        album: "Pump It Up",
        year: 2019,
        coverUrl: "./electronic-dance-album.jpg",
      },
    ],
  },
  {
    id: "4",
    mood: {
      name: "Chill",
      colors: ["#27AE60", "#229954"],
    },
    songs: [
      {
        id: "0",
        name: "Weightless",
        artist: "Marconi Union",
        album: "Weightless",
        year: 2011,
        coverUrl: "./ambient-chill-album.jpg",
      },
      {
        id: "1",
        name: "Sunset",
        artist: "The xx",
        album: "Coexist",
        year: 2017,
        coverUrl: "./indie-chill-album.jpg",
      },
      {
        id: "2",
        name: "Coconut",
        artist: "Harry Nilsson",
        album: "Coconut",
        year: 1971,
        coverUrl: "./relaxing-vintage-album.jpg",
      },
    ],
  },
  {
    id: "5",
    mood: {
      name: "Star",
      colors: ["#232c53ff", "#304ba5ff"],
    },
    songs: [
      {
        id: "0",
        name: "Starman",
        artist: "David Bowie",
        album: "The Rise and Fall of Ziggy Stardust and the Spiders from Mars",
        year: 1972,
        coverUrl: "./stardust.jpg",
      },
      {
        id: "1",
        name: "Space Oddity",
        artist: "Chris Hadfield",
        album: "Space Sessions: Songs from a Tin Can",
        year: 2015,
        coverUrl: "./space.jpg",
      },
      {
        id: "2",
        name: "Major Tom (...völlig losgelöst)",
        artist: "Peter Schilling",
        album: "Major Tom (...völlig losgelöst) (All Versions)",
        year: 1983,
        coverUrl: "./tom.jpg",
      },
    ],
  },
];
