import { useState } from "react"
import style from "./style.module.css"
import { IoIosArrowForward, IoIosArrowBack} from "react-icons/io";
import { MdOutlineLibraryAdd, MdPlaylistPlay, MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import type { Playlist as PlaylistType } from "../../types/playlist";
import { usePlaylists } from "../../contexts/PlaylistContext";

interface SidebarProps { onClick: () => void }

const Sidebar = ({ onClick }: SidebarProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isPlaylistOpen, setIsPlaylistOpen] = useState(false)
    const { playlists } = usePlaylists();

    return (
        <div className={`${style.sidebar} ${isOpen ? style.open : " "}`}>
            <div className={style.logo}>
               <Link to={"/"} className={style.link}>
                    <div className={style.soundwave}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <p>Moodify</p>
                </Link>
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
                        <p>{isOpen ? "Fechar" : "Fechar"}</p>
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
                                {playlists && playlists.length == 0 ? 
                                (
                                    <li className={style.emptyPlaceholder}>
                                        <p>Nenhuma Playlist</p>
                                    </li>
                                ) : (
                                    playlists.map((playlist: PlaylistType) => (
                                        <Link to={`/playlist/${playlist.id}`} className={style.link}>
                                            <li key={playlist.id}>
                                                <p>{playlist.mood.name}</p>
                                            </li>
                                        </Link>
                                    ))
                                )}
                            </div>
                        </li>
                    )}

                    <li className={style.account_icon} onClick={onClick}>
                        <MdAccountCircle></MdAccountCircle>
                        <p>Perfil</p>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar
