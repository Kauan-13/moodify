import { useState } from "react";
import style from "./style.module.css"
import { IoIosArrowForward, IoIosArrowBack   } from "react-icons/io";
import { MdOutlineLibraryAdd, MdPlaylistPlay, MdAccountCircle } from "react-icons/md";

const Sidebar = () =>{
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className={`${style.sidebar} ${isOpen? style.open : " "}`}>

            <p>Logotipo</p>

            <ul className={style.icons}>

                <li onClick={()=>{setIsOpen(!isOpen)}}>
                    <span> {isOpen? <IoIosArrowForward/> : <IoIosArrowBack /> }</span>
                    <p>{isOpen? "Fechar" : ""}</p>
                </li>

                <li>
                    <MdOutlineLibraryAdd/>
                    <p> {isOpen? "Nova Playlist" : ""} </p>
                </li>

                
                <li>
                    <MdPlaylistPlay/>
                    <p> {isOpen? "Playlists" : ""} </p>
                </li>

                <p> {isOpen? "<lista>" : "" }</p>
                

                <li className={style.account_icon}>
                    <MdAccountCircle></MdAccountCircle>
                    <p>{isOpen? "Perfil" : "" }</p>
                </li>

            </ul>

        </div>
    )

}

export default Sidebar