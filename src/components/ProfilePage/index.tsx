import { useState } from "react";
import Sidebar from "../Sidebar";
import LoginPopup from "../LoginPopup";
import style from "./style.module.css";
import { MdAccountCircle, MdLogout, MdSync } from "react-icons/md";
import { Link } from "react-router-dom";

const ProfilePage = () => {
    const [showPopup, setShowPopup] = useState(false);
    
    const user = {
        name: 'sofia',
        service: 'spotify'
    }

    const playlists = [
        {
            name: "fav da sofia",
            songs: 4,
            covers: [
                "./album.jpg",
                "./album.jpg",
                "./album.jpg",
                "./album.jpg",
            ]
        },
        {
            name: "melhores da loirah",
            songs: 4,
            covers: [
                "./album.jpg",
                "./album.jpg",
                "./album.jpg",
                "./album.jpg",
            ]
        },
        {
            name: "fav da sofia 2.0",
            songs: 4,
            covers: [
                "./album.jpg",
                "./album.jpg",
                "./album.jpg",
                "./album.jpg",
            ]
        },
        {
            name: "pipi pôpô pipi pôpô",
            songs: 4,
            covers: [
                "./album.jpg",
                "./album.jpg",
                "./album.jpg",
                "./album.jpg",
            ]
        }
    ];

    return (
        <main className={style.profile}>
            <Sidebar onClick={() => setShowPopup(true)} />
            
            <div className={style.profileInfo} >
                <div className={style.info}>
                    <MdAccountCircle className={style.accIcon} />
                    <div>
                        <p className={style.username}>{user.name}</p>
                        <div className={style.playlistInfo}>
                            <img src={`./${user.service}.svg`} alt={user.service} />
                            <p>{ playlists.length === 1 ? '1 playlist criada' : `${playlists.length} playlists criadas` }</p>
                        </div>
                    </div>
                </div>
                
                <div className={style.actionButtons} >

                        <button onClick={() => setShowPopup(true)} className={style.syncButton}>
                            <MdSync />
                            <span>Sincronizar Outro Streaming</span>
                        </button>
                        <button className={style.logoutButton}>
                            <MdLogout />
                            <span>Logout</span>
                        </button>

                </div>
            </div>

            <div className={style.profilePlaylists} >

                {
                    playlists.map(playlist => (
                        <div className={style.profilePlaylistCard} >
                            <Link to='/playlist' className={style.playlistCover}>
                                {playlist.covers.map(cover => ( <img src={cover} alt={cover} /> ))}
                            </Link>
                            <Link to='/playlist' className={style.playlistName} >{playlist.name}</Link>
                            <Link to='/playlist' className={style.playlistSongs} >{playlist.songs} músicas</Link>
                        </div>
                    ))   
                }

            </div>

            {showPopup && <LoginPopup onClose={() => setShowPopup(false)} />}
        </main>
    );
};

export default ProfilePage;
