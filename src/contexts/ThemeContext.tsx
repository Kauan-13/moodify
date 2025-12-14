"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { getMoodColors } from "../utils/moodColorMapper"

interface ThemeContextType {
  mood: string
  setMood: (mood: string) => void
  currentTheme: Theme
  currentColors: string[]
}

interface Theme {
  primary: string
  primaryLight: string
  background: string
  backgroundAlt: string
  text: string
  textSecondary: string
  inputText: string
  border: string
  accent: string
}

const normalizeText = (text: string) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()

const moodThemes: Record<string, Theme> = {
  default: {
    primary: "#101010",
    primaryLight: "#E0E0E0",
    background: "#FFFFFF",
    backgroundAlt: "#FAFAFA",
    text: "#1A1A1A",
    textSecondary: "#666666",
    inputText: "#1A1A1A",
    border: "#E0E0E0",
    accent: "#333333",
  },
  fallback: {
    primary: "#6366F1",
    primaryLight: "#C7D2FE",
    background: "#FAFBFF",
    backgroundAlt: "#F0F3FF",
    text: "#1A1A1A",
    textSecondary: "#6366F1",
    inputText: "#6366F1",
    border: "#A5B4FC",
    accent: "#8B5CF6",
  },
  feliz: {
    primary: "#E6C200",
    primaryLight: "#FFECB3",
    background: "#FFFEF7",
    backgroundAlt: "#FFF9E6",
    text: "#1A1A1A",
    textSecondary: "#666666",
    inputText: "#E6C200",
    border: "#FFE082",
    accent: "#FFA726",
  },
  triste: {
    primary: "#4078C0",
    primaryLight: "#C7E0F8",
    background: "#F5F9FC",
    backgroundAlt: "#EBF5FB",
    text: "#1A1A1A",
    textSecondary: "#607D8B",
    inputText: "#4078C0",
    border: "#90CAF9",
    accent: "#2196F3",
  },
  calmo: {
    primary: "#6DA66A",
    primaryLight: "#D1EAD8",
    background: "#F9FBF9",
    backgroundAlt: "#F1F8F4",
    text: "#1A1A1A",
    textSecondary: "#558B2F",
    inputText: "#6DA66A",
    border: "#A5D6A7",
    accent: "#66BB6A",
  },
  energético: {
    primary: "#E64A1C",
    primaryLight: "#FFD1C3",
    background: "#FFF8F6",
    backgroundAlt: "#FFEBE5",
    text: "#1A1A1A",
    textSecondary: "#BF360C",
    inputText: "#E64A1C",
    border: "#FFCC80",
    accent: "#FF7043",
  },
  romântico: {
    primary: "#D6366A",
    primaryLight: "#F8D6E0",
    background: "#FFF5F8",
    backgroundAlt: "#F8E1EB",
    text: "#1A1A1A",
    textSecondary: "#AD1457",
    inputText: "#D6366A",
    border: "#F48FB1",
    accent: "#E91E63",
  },
  nostálgico: {
    primary: "#8560B0",
    primaryLight: "#DDD0ED",
    background: "#FAF9FC",
    backgroundAlt: "#F3EDF7",
    text: "#1A1A1A",
    textSecondary: "#5E35B1",
    inputText: "#8560B0",
    border: "#B39DDB",
    accent: "#7E57C2",
  },
  animado: {
    primary: "#E68900",
    primaryLight: "#FFE0B2",
    background: "#FFFBF5",
    backgroundAlt: "#FFF4E1",
    text: "#1A1A1A",
    textSecondary: "#E65100",
    inputText: "#E68900",
    border: "#FFCC80",
    accent: "#FB8C00",
  },
  relaxado: {
    primary: "#219087",
    primaryLight: "#C1E4E0",
    background: "#F7FCFC",
    backgroundAlt: "#E8F5F4",
    text: "#1A1A1A",
    textSecondary: "#00695C",
    inputText: "#219087",
    border: "#80CBC4",
    accent: "#00897B",
  },
  frio: {
    primary: "#0288C9",
    primaryLight: "#B3E5FC",
    background: "#F3FAFD",
    backgroundAlt: "#E0F3FA",
    text: "#1A1A1A",
    textSecondary: "#5472D3",
    inputText: "#0288C9",
    border: "#81D4FA",
    accent: "#0288D1",
  },
  raiva: {
    primary: "#B71C1C",
    primaryLight: "#FFBABA",
    background: "#FFF5F5",
    backgroundAlt: "#FFEDED",
    text: "#1A1A1A",
    textSecondary: "#B71C1C",
    inputText: "#B71C1C",
    border: "#EF9A9A",
    accent: "#E53935",
  },
  natural: {
    primary: "#755547",
    primaryLight: "#CFC0BA",
    background: "#FAF6F3",
    backgroundAlt: "#EFE7E2",
    text: "#1A1A1A",
    textSecondary: "#6D4C41",
    inputText: "#755547",
    border: "#BCAAA4",
    accent: "#795548",
  },
  esperançoso: {
    primary: "#E69C3B",
    primaryLight: "#FFE0B2",
    background: "#FFF8ED",
    backgroundAlt: "#FFF1DB",
    text: "#1A1A1A",
    textSecondary: "#F57C00",
    inputText: "#E69C3B",
    border: "#FFCC80",
    accent: "#FFA726",
  },
  solitario: {
    primary: "#7A8B97",
    primaryLight: "#B0BEC5",
    background: "#ECEFF1",
    backgroundAlt: "#E0E3E5",
    text: "#1A1A1A",
    textSecondary: "#455A64",
    inputText: "#7A8B97",
    border: "#B0BEC5",
    accent: "#78909C",
  },
  criativo: {
    primary: "#9737A9",
    primaryLight: "#D8B2DE",
    background: "#FDF7FF",
    backgroundAlt: "#F7ECFA",
    text: "#1A1A1A",
    textSecondary: "#6A1B9A",
    inputText: "#9737A9",
    border: "#CE93D8",
    accent: "#FF8A65",
  },
  "sozinho no espaço": {
    primary: "#304ba5",
    primaryLight: "#6B7FC9",
    background: "#F8F9FC",
    backgroundAlt: "#E8ECF7",
    text: "#1A1A1A",
    textSecondary: "#232c53",
    inputText: "#304ba5",
    border: "#7B8BD9",
    accent: "#4A5FBF",
  },
  amor: {
    primary: "#E91E63",
    primaryLight: "#F8BBD0",
    background: "#FFF5F8",
    backgroundAlt: "#FDEAF0",
    text: "#1A1A1A",
    textSecondary: "#C2185B",
    inputText: "#E91E63",
    border: "#F48FB1",
    accent: "#EC407A",
  },
  literário: {
    primary: "#5D4037",
    primaryLight: "#BCAAA4",
    background: "#FBF9F7",
    backgroundAlt: "#F5F0ED",
    text: "#1A1A1A",
    textSecondary: "#6D4C41",
    inputText: "#5D4037",
    border: "#A1887F",
    accent: "#795548",
  },
  sofrência: {
    primary: "#8B2E2E",
    primaryLight: "#D19999",
    background: "#FFF8F8",
    backgroundAlt: "#F7EBEB",
    text: "#1A1A1A",
    textSecondary: "#5C1A1A",
    inputText: "#8B2E2E",
    border: "#C99999",
    accent: "#A04040",
  },
  romântica: {
    primary: "#FF69B4",
    primaryLight: "#FFB3D9",
    background: "#FFF9FC",
    backgroundAlt: "#FFF0F7",
    text: "#1A1A1A",
    textSecondary: "#D64A90",
    inputText: "#FF69B4",
    border: "#FFADD2",
    accent: "#FF85C0",
  },
}

function applyTheme(theme: Theme) {
  const root = document.documentElement
  Object.entries(theme).forEach(([key, value]) => {
    root.style.setProperty(`--theme-${key.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase())}`, value)
  })
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mood, setMood] = useState("")
  const [currentTheme, setCurrentTheme] = useState<Theme>(moodThemes.default)
  const [currentColors, setCurrentColors] = useState<string[]>(["#6366F1", "#8B5CF6"])

  useEffect(() => {
    if (!mood || mood.trim() === "") {
      setCurrentTheme(moodThemes.default)
      applyTheme(moodThemes.default)
      setCurrentColors(["#6366F1", "#8B5CF6", "#A855F7"])
      return
    }

    const normalizedMood = normalizeText(mood)

    const theme = Object.entries(moodThemes).find(([key]) => {
      const normalizedKey = normalizeText(key)
      return normalizedMood.includes(normalizedKey) || normalizedKey.includes(normalizedMood)
    })

    const selected = theme ? theme[1] : moodThemes.fallback

    setCurrentTheme(selected)
    applyTheme(selected)
    setCurrentColors(getMoodColors(mood))
  }, [mood])

  return (
    <ThemeContext.Provider value={{ mood, setMood, currentTheme, currentColors }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error("useTheme must be used within ThemeProvider")
  return context
}
