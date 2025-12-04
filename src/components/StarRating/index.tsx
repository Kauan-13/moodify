import type React from "react"
import { useState } from "react"
import { FaStar } from "react-icons/fa"

import styles from "./styles.module.css"

interface Props {
  value: number
  onChange: (value: number) => void
  maxStars?: number
}


const StarRating = ({ value, onChange, maxStars = 5 }: Props) => {

  const [hoverValue, setHoverValue] = useState<number | null>(null)

  function handleClick(starIndex: number, isHalf: boolean): void {
    const newValue = starIndex + (isHalf ? 0.5 : 1)
    onChange(newValue)
  }

  function handleMouseMove(starIndex: number, event: React.MouseEvent<HTMLDivElement>): void {

    const rect = event.currentTarget.getBoundingClientRect()

    const x = event.clientX - rect.left
    const isHalf = x < rect.width / 2

    setHoverValue(starIndex + (isHalf ? 0.5 : 1))

  }

  function handleMouseLeave(): void { setHoverValue(null) }

  return (
    <div className={styles.starRating}>
      {Array.from({ length: maxStars }).map((_, i) => {
        const starIndex = i
        const filledValue = hoverValue ?? value
        const fillPercentage = Math.max(0, Math.min(1, filledValue - i))

        return (
          <div
            key={i}
            className={styles.starContainer}
            data-testid="star-container"
            onMouseMove={(e) => handleMouseMove(starIndex, e)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={styles.clickableHalfLeft}
              data-testid="half-left"
              onClick={() => handleClick(starIndex, true)}
            />

            <div
              className={styles.clickableHalfRight}
              data-testid="half-right"
              onClick={() => handleClick(starIndex, false)}
            />

            <FaStar className={styles.starBackground} />

            <div
              className={styles.starFillContainer}
              style={{ width: `${fillPercentage * 100}%` }}
            >
              <FaStar className={styles.starForeground} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default StarRating