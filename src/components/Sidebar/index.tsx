import { useState } from "react";
import style from "./style.module.css"
import { IoIosArrowForward, IoIosArrowBack, IoIosHelpCircle    } from "react-icons/io";
import { MdOutlineLibraryAdd, MdPlaylistPlay, MdAccountCircle } from "react-icons/md";

const Sidebar = () =>{
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className={`${style.sidebar} ${isOpen? style.open : " "}`}>

            <div className={style.logo_name}>
                <img src="../public/logo.png" alt="logo"/>
                <p className={style.title}>{isOpen? "Moodify" : ""}</p>

            </div>

            <nav>
                <ul className={`${style.icons} ${style.position}`}>

                    <li onClick={()=>{setIsOpen(!isOpen)}}>
                        <span> {isOpen? <IoIosArrowBack /> :  <IoIosArrowForward/> }</span>

                        <p>{isOpen? "Fechar" : ""}</p>
                    </li>

                    <li>
                        <MdOutlineLibraryAdd/>
                        <p> {isOpen? "Nova Playlist" : ""} </p>
                    </li>

                    
                    <li>
                        <MdPlaylistPlay size={34}/>
                        <p> {isOpen? "Playlists" : ""} </p>
                    </li>

                    <p> {isOpen? "<lista>" : "" }</p>
                    

                    <li className={style.account_icon}>
                        <MdAccountCircle></MdAccountCircle>
                        <p>{isOpen? "Perfil" : "" }</p>
                    </li>

                    <li className={style.help_icon}>
                        <IoIosHelpCircle ></IoIosHelpCircle >
                        <p>{isOpen? "Ajuda" : "" }</p>
                    </li>

                </ul>
            </nav>

        </div>
    )

}

export default Sidebar