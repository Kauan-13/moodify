"use client"

import type React from "react"

import style from "./style.module.css"
import TimeInput from "../TimeInput"
import TagInput from "../TagInput"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { IoSend } from "react-icons/io5"
import { usePlaylists } from "../../contexts/PlaylistContext"
import { useTheme } from "../../contexts/ThemeContext"

interface Props {
  onClick: () => void
  isClicked: boolean
  min: number
  max: number
}

const SearchBar = ({ onClick, isClicked, min, max }: Props) => {
  const [tags, setTags] = useState<string[]>([])
  const [searchInput, setSearchInput] = useState<string>("")
  const navigate = useNavigate()
  const { playlists } = usePlaylists()
  const { currentTheme, setMood } = useTheme()

  const normalizeText = (text: string) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")


const handleEnterClick = () => {
  if (!searchInput.trim()) return

  const normalizedInput = normalizeText(searchInput)

  const foundPlaylist = playlists.find((playlist) =>
    normalizeText(playlist.mood.name).includes(normalizedInput)
  )

  if (foundPlaylist) {
    setMood(foundPlaylist.mood.name)
    navigate(`/playlist/${foundPlaylist.id}`)
  } else {
    setMood('')
    navigate("/empty")
  }
}

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchInput(value) // atualiza input local
    setMood(value) // atualiza mood -> altera tema
  }

  // estilos inline dinâmicos
  const searchBarStyle = {
    backgroundColor: currentTheme.backgroundAlt,
    borderColor: currentTheme.primary,
  }

  const inputStyle = {
    backgroundColor: currentTheme.backgroundAlt,
    color: currentTheme.inputText,
    borderColor: currentTheme.primary,
  }

  const buttonStyle = {
    backgroundColor: currentTheme.primary,
    color: currentTheme.background,
  }

  return (
    <div className={style.searchBar} style={searchBarStyle} onClick={onClick}>
      <div className={style.searchContainer}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Meu mood hoje é..."
          autoComplete="off"
          spellCheck={false}
          className={style.searchInput}
          style={inputStyle}
          value={searchInput}
          onChange={handleInputChange}
          onKeyPress={(e) => {
            if (e.key === "Enter") handleEnterClick()
          }}
        />
        {searchInput.trim() && (
          <button
            type="button"
            className={style.enterButton}
            style={buttonStyle}
            onClick={handleEnterClick}
            aria-label="Search and navigate to random playlist"
          >
            <IoSend />
          </button>
        )}
      </div>

      {isClicked && (
        <div className={style.filterActions}>
          <TimeInput min={min} max={max} />
          <div className={style.tags}>
            <TagInput tags={tags} label={"Filtragem:"} onChange={setTags} />
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchBar
