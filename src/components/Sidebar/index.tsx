import { useState } from "react"
import style from "./style.module.css"
import { IoIosArrowForward, IoIosArrowBack, IoIosHelpCircle } from "react-icons/io";
import { MdOutlineLibraryAdd, MdPlaylistPlay, MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";

interface SidebarProps { onClick: () => void }

const Sidebar = ({ onClick }: SidebarProps) => {
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
                <p>Moodify</p>
            </div>

            <nav>
                <ul className={`${style.icons} ${style.position}`}>
                    <li
                        className={style.threeFirstButtons}
                        onClick={() => {
                            setIsOpen(!isOpen)
                        }}
                    >
                        <span> {isOpen ? <IoIosArrowBack /> :  <IoIosArrowForward /> }</span>
                        <p>{isOpen ? "Fechar" : "Abrir"}</p>
                    </li>

                    <li  className={style.threeFirstButtons}>
                        <Link to={"/"} className={style.link}>
                            <MdOutlineLibraryAdd />
                            <p>Nova Playlist</p>
                        </Link>
                    </li>

                    <li
                        className={style.threeFirstButtons}
                        onClick={() => {
                            if (!isOpen) setIsOpen(true); 
                            setIsPlaylistOpen(!isPlaylistOpen)
                        }}
                    >
                        <span><MdPlaylistPlay /></span>
                        <p>Playlists</p>
                    </li>

                    {isPlaylistOpen && (
                        <li>
                            <div className={`${style.playlists} ${isOpen ? style.show : ''}`}>
                                {playlists.map((playlist, index) => (
                                    <li key={index}>
                                        <Link to={"/playlist"} className={style.link}>
                                            <p>{playlist}</p>
                                        </Link>
                                    </li>
                                ))}
                            </div>
                        </li>
                    )}

                    <li className={style.account_icon} onClick={onClick}>
                        <MdAccountCircle></MdAccountCircle>
                        <p>Perfil</p>
                    </li>

                    <li className={style.help_icon}>
                        <IoIosHelpCircle ></IoIosHelpCircle >
                        <p>Ajuda</p>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar