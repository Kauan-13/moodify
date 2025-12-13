"use client"

import { useEffect, useState } from "react"
import Sidebar from "../Sidebar"
import Title from "../Title"
import SearchForm from "../SearchForm"
import LoginPopup from "../LoginPopup"
import { useAuth } from "../../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import Watermark from "../Watermark"
import FormAlert from "../FormAlert"
import CsatPopup from "../CSATPopup"
import useCSATPopup from "../../hooks/CSATPopupHook"
import GradientBackground from "../GradientBackground"
import { useTheme } from "../../contexts/ThemeContext"

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(false)
  const { user } = useAuth()
  const { ID_FUNC, showCSAT, showCSATPopup, setShowCSATPopup, handleSubmit, alreadyRated } = useCSATPopup(0)
  const { currentColors } = useTheme()

  const navigate = useNavigate()

  const handleProfileClick = () => {
    if (user !== null && user !== undefined) navigate("/profile")
    else setShowPopup(true)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    alreadyRated()
  }, [])

  return (
    <main>
      <GradientBackground colors={currentColors} />

      {showCSATPopup ?(
        <CsatPopup
          funcionalidadeNome="Entrada de Texto"
          funcionalidadeId={ID_FUNC}
          onClose={() => setShowCSATPopup(false)}
          onSave={handleSubmit}
        />
      ) : null}

      <Sidebar onClick={handleProfileClick} />

      <div className="titleSearch">
        <Title />
        <SearchForm />
      </div>

      {showPopup && <LoginPopup onClose={() => setShowPopup(false)} />}
      <Watermark />
      {showCSAT ?
        <FormAlert onClick={() => setShowCSATPopup(true)}/> 
        : null
      }
      
    </main>
  )
}

export default HomePage
