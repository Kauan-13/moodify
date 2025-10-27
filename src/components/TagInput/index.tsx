import { useState } from "react"
import type { KeyboardEvent } from "react"
import type { TagInputProps } from "../../types/RegistryPageProps"
import styles from "./style.module.css"

const TagInput = ({ tags, label, placeholder, onChange }: TagInputProps) => {
  const [inputValue, setInputValue] = useState("")

  const addTag = (tag: string) => {
    const trimmedTag = tag.trim()
    if (trimmedTag && !tags.includes(trimmedTag)) {
      onChange([...tags, trimmedTag])
      setInputValue("")
    }
  }

  const removeTag = (tag: string) => {
    onChange(tags.filter(t => t !== tag))
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault()
      addTag(inputValue)
    } 
    else if (e.key === 'Backspace' && inputValue === '' && tags.length > 0) {
      e.preventDefault()
      const lastTag = tags[tags.length - 1]
      removeTag(lastTag)
    }
  }

  return (
    <div className={styles.tagsInput}>
      <div className={styles.tagsContainer}>
          <input
            id="tag-input"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={() => addTag(inputValue)}
            placeholder={placeholder}
          />
          <label htmlFor="tag-input">{label}</label>
          {tags.map(tag => (
          <span key={tag} className={styles.tag}>
            {tag}
            <button type="button" onClick={() => removeTag(tag)} className={styles.remove} >
              ×
            </button>
          </span>
        ))}
      </div>

      {/* <small className={styles.hint}>Pressione Enter para adicionar um filtro</small> */}
    </div>
  )
}

export default TagInput