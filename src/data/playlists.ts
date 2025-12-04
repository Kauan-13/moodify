import type { Playlist } from "../types/playlist";
import { moodThemes } from "../contexts/ThemeContext"
export const playlistsData: Playlist[] = [
  {
    id: "1",
    mood: {
      name: "Feliz",
      colors: [
        moodThemes.feliz.primary,        // primary
        moodThemes.feliz.primaryLight,   // primaryLight
        moodThemes.feliz.background,     // background
        moodThemes.feliz.backgroundAlt,  // backgroundAlt
        moodThemes.feliz.text,           // text
        moodThemes.feliz.textSecondary,  // textSecondary
        moodThemes.feliz.border,         // border
        moodThemes.feliz.accent          // accent
      ],
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
      name: "Triste",
      colors: [
        moodThemes.triste.primary,        // primary
        moodThemes.triste.primaryLight,   // primaryLight
        moodThemes.triste.background,     // background
        moodThemes.triste.backgroundAlt,  // backgroundAlt
        moodThemes.triste.text,           // text
        moodThemes.triste.textSecondary,  // textSecondary
        moodThemes.triste.border,         // border
        moodThemes.triste.accent          // accent
      ],
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
      name: "Energético",
      colors: [
        moodThemes.energético.primary,        // primary
        moodThemes.energético.primaryLight,   // primaryLight
        moodThemes.energético.background,     // background
        moodThemes.energético.backgroundAlt,  // backgroundAlt
        moodThemes.energético.text,           // text
        moodThemes.energético.textSecondary,  // textSecondary
        moodThemes.energético.border,         // border
        moodThemes.energético.accent          // accent
      ],
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
      name: "Frio",
      colors: [
        moodThemes.frio.primary,        // primary
        moodThemes.frio.primaryLight,   // primaryLight
        moodThemes.frio.background,     // background
        moodThemes.frio.backgroundAlt,  // backgroundAlt
        moodThemes.frio.text,           // text
        moodThemes.frio.textSecondary,  // textSecondary
        moodThemes.frio.border,         // border
        moodThemes.frio.accent          // accent
      ],
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
      name: "Sozinho no espaço",
      colors: [
        moodThemes.solitario.primary,        // primary
        moodThemes.solitario.primaryLight,   // primaryLight
        moodThemes.solitario.background,     // background
        moodThemes.solitario.backgroundAlt,  // backgroundAlt
        moodThemes.solitario.text,           // text
        moodThemes.solitario.textSecondary,  // textSecondary
        moodThemes.solitario.border,         // border
        moodThemes.solitario.accent          // accent
      ],
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
  {
    id: "6",
    mood: {
      name: "Amor",
      colors: [
        moodThemes.romântico.primary,        // primary
        moodThemes.romântico.primaryLight,   // primaryLight
        moodThemes.romântico.background,     // background
        moodThemes.romântico.backgroundAlt,  // backgroundAlt
        moodThemes.romântico.text,           // text
        moodThemes.romântico.textSecondary,  // textSecondary
        moodThemes.romântico.border,         // border
        moodThemes.romântico.accent          // accent
      ],
    },
    songs: [
      {
        id: "0",
        name: "N",
        artist: "Nando Reis",
        album: "Sim e Não",
        year: 2006,
        coverUrl: "./simnao.jpg",
      },
      {
        id: "1",
        name: "Passeio",
        artist: "Belchior",
        album: "Belchior",
        year: 1974,
        coverUrl: "./belchior.jpg",
      },
      {
        id: "2",
        name: "Dueto (Part. Clara Buarque)",
        artist: "Chico Buarque & Clara Buarque",
        album: "Caravanas",
        year: 2017,
        coverUrl: "./caravanas.jpg",
      },
    ],
  },
  // {
  //   id: "7",
  //   mood: {
  //     name: "Literário",
  //     colors: [
  //       moodThemes.literário.primary,        // primary
  //       moodThemes.literário.primaryLight,   // primaryLight
  //       moodThemes.literário.background,     // background
  //       moodThemes.literário.backgroundAlt,  // backgroundAlt
  //       moodThemes.literário.text,           // text
  //       moodThemes.literário.textSecondary,  // textSecondary
  //       moodThemes.literário.border,         // border
  //       moodThemes.literário.accent          // accent
  //     ],
  //   },
  //   songs: [
  //     {
  //       id: "0",
  //       name: "José",
  //       artist: "Paulo Diniz",
  //       album: "E Agora José",
  //       year: 1972,
  //       coverUrl: "./jose.avif",
  //     },
  //     {
  //       id: "1",
  //       name: "Rosa de Hiroshima",
  //       artist: "Ney Matogrosso",
  //       album: "Seu Tipo",
  //       year: 1979,
  //       coverUrl: "./tipo.jpg",
  //     },
  //     {
  //       id: "2",
  //       name: "Carolina Maria de Jesus",
  //       artist: "Didi Assis",
  //       album: "Giramundo",
  //       year: 2018,
  //       coverUrl: "./giramundo.jpg",
  //     },
  //   ],
  // },
  // {
  //   id: "8",
  //   mood: {
  //     name: "Sofrência",
  //     colors: [
  //       moodThemes.sofrência.primary,        // primary
  //       moodThemes.sofrência.primaryLight,   // primaryLight
  //       moodThemes.sofrência.background,     // background
  //       moodThemes.sofrência.backgroundAlt,  // backgroundAlt
  //       moodThemes.sofrência.text,           // text
  //       moodThemes.sofrência.textSecondary,  // textSecondary
  //       moodThemes.sofrência.border,         // border
  //       moodThemes.sofrência.accent          // accent
  //     ],
  //   },
  //   songs: [
  //     {
  //       id: "0",
  //       name: "Fio de Cabelo",
  //       artist: "Chitãozinho & Xororó",
  //       album: "Somos Apaixonados",
  //       year: 1982,
  //       coverUrl: "./fio-de-cabelo.jpg",
  //     },
  //     {
  //       id: "1",
  //       name: "Ainda Ontem Chorei de Saudade",
  //       artist: "João Mineiro & Marciano",
  //       album: "João Mineiro & Marciano",
  //       year: 1981,
  //       coverUrl: "./chorei-de-saudade.jpg",
  //     },
  //     {
  //       id: "2",
  //       name: "É o Amor",
  //       artist: "Zezé Di Camargo & Luciano",
  //       album: "Zezé Di Camargo & Luciano",
  //       year: 1991,
  //       coverUrl: "./e-o-amor.jpg",
  //     },
  //   ],
  // },
  {
    id: "9",
    mood: {
      name: "Romântica",
      colors: [
        moodThemes.romântico.primary,        // primary
        moodThemes.romântico.primaryLight,   // primaryLight
        moodThemes.romântico.background,     // background
        moodThemes.romântico.backgroundAlt,  // backgroundAlt
        moodThemes.romântico.text,           // text
        moodThemes.romântico.textSecondary,  // textSecondary
        moodThemes.romântico.border,         // border
        moodThemes.romântico.accent          // accent
      ],
    },
    songs: [
      {
        id: "0",
        name: "Lover",
        artist: "Taylor Swift",
        album: "Lover",
        year: 2019,
        coverUrl: "./a1.png",
      },
      {
        id: "1",
        name: "You Belong With Me",
        artist: "Taylor Swift",
        album: "Fearless",
        year: 2008,
        coverUrl: "./a2.jpg",
      },
      {
        id: "2",
        name: "Call It What You Want",
        artist: "Taylor Swift",
        album: "Reputation",
        year: 2017,
        coverUrl: "./a3.jpeg",
      },
      {
        id: "3",
        name: "Enchanted",
        artist: "Taylor Swift",
        album: "Speak Now",
        year: 2010,
        coverUrl: "./a4.jpeg",
      },
    ],
  },
];
