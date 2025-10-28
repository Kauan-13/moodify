import { useState } from "react"
import style from "./style.module.css"
import { IoIosArrowForward, IoIosArrowBack, IoIosHelpCircle } from "react-icons/io";
import { MdOutlineLibraryAdd, MdPlaylistPlay, MdAccountCircle } from "react-icons/md";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isPlaylistOpen, setIsPlaylistOpen] = useState(false)

    const playlists = ["fav da sofia 2.0", "melhores da loirah", "fav da sofia", "pipi pôpô pipi pôpô"]

    return (
        <div className={`${style.sidebar} ${isOpen ? style.open : " "}`}>
            <div className={style.logo}>
                <div className={style.soundwave}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {isOpen && <p>Moodify</p>}
            </div>

            <nav>
                <ul className={`${style.icons} ${style.position}`}>
                    <li
                        onClick={() => {
                            setIsOpen(!isOpen)
                        }}
                    >
                        <span> {isOpen ? <IoIosArrowBack /> :  <IoIosArrowForward /> }</span>
                        <p>{isOpen ? "Fechar" : ""}</p>
                    </li>

                    <li>
                        <MdOutlineLibraryAdd />
                        <p> {isOpen ? "Nova Playlist" : ""} </p>
                    </li>

                    <li
                        onClick={() => {
                            setIsPlaylistOpen(!isPlaylistOpen)
                        }}
                    >
                        <MdPlaylistPlay />
                        <p> {isOpen ? "Playlists" : ""} </p>
                    </li>

                    {isOpen && isPlaylistOpen && (
                        <li >
                            <div className={style.playlists}>
                                {playlists.map((playlist, index) => (
                                    <li key={index}>
                                        <p>{playlist}</p>
                                    </li>
                                ))}
                            </div>
                        </li>
                    )}

                    <li className={style.account_icon}>
                        <MdAccountCircle></MdAccountCircle>
                        <p>{isOpen ? "Perfil" : ""}</p>
                    </li>

                    <li className={style.help_icon}>
                        <IoIosHelpCircle ></IoIosHelpCircle >
                        <p>{isOpen ? "Ajuda" : ""}</p>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar