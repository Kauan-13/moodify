"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface ThemeContextType {
  mood: string
  setMood: (mood: string) => void
  currentTheme: Theme
}

interface Theme {
  primary: string
  primaryLight: string
  background: string
  backgroundAlt: string
  text: string
  textSecondary: string
  border: string
  accent: string
}
const moodThemes: Record<string, Theme> = {
  default: {
    primary: "#1A1A1A",
    primaryLight: "#E0E0E0", 
    background: "#FFFFFF",
    backgroundAlt: "#FAFAFA",
    text: "#1A1A1A",
    textSecondary: "#666666",
    border: "#E0E0E0",
    accent: "#333333",
  },
  feliz: {
    primary: "#FFD700",
    primaryLight: "#FFECB3", 
    background: "#FFFEF7",
    backgroundAlt: "#FFF9E6",
    text: "#1A1A1A",
    textSecondary: "#666666",
    border: "#FFE082",
    accent: "#FFA726",
  },
  triste: {
    primary: "#4A90E2",
    primaryLight: "#C7E0F8", 
    background: "#F5F9FC",
    backgroundAlt: "#EBF5FB",
    text: "#1A1A1A",
    textSecondary: "#607D8B",
    border: "#90CAF9",
    accent: "#2196F3",
  },
  calmo: {
    primary: "#81C784",
    primaryLight: "#D1EAD8", 
    background: "#F9FBF9",
    backgroundAlt: "#F1F8F4",
    text: "#1A1A1A",
    textSecondary: "#558B2F",
    border: "#A5D6A7",
    accent: "#66BB6A",
  },
  energético: {
    primary: "#FF5722",
    primaryLight: "#FFD1C3", 
    background: "#FFF8F6",
    backgroundAlt: "#FFEBE5",
    text: "#1A1A1A",
    textSecondary: "#BF360C",
    border: "#FFCC80",
    accent: "#FF7043",
  },
  romântico: {
    primary: "#EC407A",
    primaryLight: "#F8D6E0",
    background: "#FFF5F8",
    backgroundAlt: "#F8E1EB",
    text: "#1A1A1A",
    textSecondary: "#AD1457",
    border: "#F48FB1",
    accent: "#E91E63",
  },
  nostálgico: {
    primary: "#9575CD",
    primaryLight: "#DDD0ED", 
    background: "#FAF9FC",
    backgroundAlt: "#F3EDF7",
    text: "#1A1A1A",
    textSecondary: "#5E35B1",
    border: "#B39DDB",
    accent: "#7E57C2",
  },
  animado: {
    primary: "#FF9800",
    primaryLight: "#FFE0B2", 
    background: "#FFFBF5",
    backgroundAlt: "#FFF4E1",
    text: "#1A1A1A",
    textSecondary: "#E65100",
    border: "#FFCC80",
    accent: "#FB8C00",
  },
  relaxado: {
    primary: "#26A69A",
    primaryLight: "#C1E4E0", 
    background: "#F7FCFC",
    backgroundAlt: "#E8F5F4",
    text: "#1A1A1A",
    textSecondary: "#00695C",
    border: "#80CBC4",
    accent: "#00897B",
  },
  frio: {
    primary: "#03A9F4",
    primaryLight: "#B3E5FC", 
    background: "#F3FAFD",
    backgroundAlt: "#E0F3FA",
    text: "#0D47A1",
    textSecondary: "#5472D3",
    border: "#81D4FA",
    accent: "#0288D1",
  },
  raiva: {
    primary: "#D32F2F",
    primaryLight: "#FFBABA", 
    background: "#FFF5F5",
    backgroundAlt: "#FFEDED",
    text: "#1A1A1A",
    textSecondary: "#B71C1C",
    border: "#EF9A9A",
    accent: "#E53935",
  },
  natural: {
    primary: "#8D6E63",
    primaryLight: "#CFC0BA", 
    background: "#FAF6F3",
    backgroundAlt: "#EFE7E2",
    text: "#3E2723",
    textSecondary: "#6D4C41",
    border: "#BCAAA4",
    accent: "#795548",
  },
  esperançoso: {
    primary: "#FFB74D",
    primaryLight: "#FFE0B2", 
    background: "#FFF8ED",
    backgroundAlt: "#FFF1DB",
    text: "#1A1A1A",
    textSecondary: "#F57C00",
    border: "#FFCC80",
    accent: "#FFA726",
  },
  solitario: {
    primary: "#90A4AE",
    primaryLight: "#B0BEC5",
    background: "#ECEFF1",
    backgroundAlt: "#E0E3E5",
    text: "#263238",
    textSecondary: "#455A64",
    border: "#B0BEC5",
    accent: "#78909C",
  },
  criativo: {
    primary: "#AB47BC",
    primaryLight: "#D8B2DE", 
    background: "#FDF7FF",
    backgroundAlt: "#F7ECFA",
    text: "#1A1A1A",
    textSecondary: "#6A1B9A",
    border: "#CE93D8",
    accent: "#FF8A65",
  },
}


// função utilitária de aplicar tema
function applyTheme(theme: Theme) {
  const root = document.documentElement
  Object.entries(theme).forEach(([key, value]) => {
    root.style.setProperty(`--theme-${key.replace(/[A-Z]/g, m => "-" + m.toLowerCase())}`, value)
  })
}


// provider
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mood, setMood] = useState("")
  const [currentTheme, setCurrentTheme] = useState<Theme>(moodThemes.default)

  useEffect(() => {
    const moodKey = mood.toLowerCase().trim()
    const theme = Object.entries(moodThemes).find(([key]) => moodKey.includes(key) || key.includes(moodKey))
    const selected = theme?.[1] ?? moodThemes.default

    setCurrentTheme(selected)
    applyTheme(selected)
  }, [mood])

  return (
    <ThemeContext.Provider value={{ mood, setMood, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error("useTheme must be used within ThemeProvider")
  return context
}