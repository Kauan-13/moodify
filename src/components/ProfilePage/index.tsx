import { useState } from "react";
import Sidebar from "../Sidebar";
import LoginPopup from "../LoginPopup";
import style from "./style.module.css";
import { MdAccountCircle, MdLogout, MdSync } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import type { Playlist as PlaylistType, Song as SongType } from "../../types/playlist";
import { usePlaylists } from "../../contexts/PlaylistContext";
import Watermark from "../Watermark";
// import FormAlert from "../FormAlert";

const ProfilePage = () => {
    const [showPopup, setShowPopup] = useState(false);
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const { playlists } = usePlaylists();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <main className={style.profile}>
            <Sidebar onClick={() => setShowPopup(true)} />
            
            <div className={style.profileInfo} >
                <div className={style.info}>
                    <MdAccountCircle className={style.accIcon} />
                    <div>
                        <p className={style.username}>{user!.username}</p>
                        <div className={style.playlistInfo}>
                            <img src={user!.service === 'amazon' ? './amazon.png' : `./${user!.service}.svg`} alt={user!.service} />
                            <p>{ playlists.length === 1 ? '1 playlist criada' : `${playlists.length} playlists criadas` }</p>
                        </div>
                    </div>
                </div>
                
                <div className={style.actionButtons} >
                    <button onClick={() => setShowPopup(true)} className={style.syncButton}>
                        <MdSync />
                        <span>Sincronizar Outro Streaming</span>
                    </button>
                    <button className={style.logoutButton} onClick={handleLogout}>
                        <MdLogout />
                        <span>Logout</span>
                    </button>
                </div>
            </div>

            <div className={style.profilePlaylists} >
                {playlists.map((playlist: PlaylistType) => {
                    
                    const availableCovers = playlist.songs.map((song: SongType) => song.coverUrl).filter(Boolean);

                    const covers = availableCovers.length > 0 
                        ? Array(4).fill(null).map((_, i) => availableCovers[i % availableCovers.length])
                        : Array(4).fill("/placeholder.svg");

                    return (
                        <div key={playlist.id} className={style.profilePlaylistCard} >
                            <Link to={`/playlist/${playlist.id}`} className={style.playlistCover}>
                                {covers.map((cover, idx) => ( 
                                    <img key={idx} src={cover} alt={`Cover ${idx + 1}`} /> 
                                ))}
                            </Link>
                            <Link to={`/playlist/${playlist.id}`} className={style.playlistName} >{playlist.mood.name}</Link>
                            <Link to={`/playlist/${playlist.id}`} className={style.playlistSongs} >{playlist.songs.length} músicas</Link>
                        </div>
                    );
                })}
            </div>

            {showPopup && <LoginPopup onClose={() => setShowPopup(false)} />}
            <Watermark/>
            {/* <FormAlert/> */}
        </main>
    );
};

export default ProfilePage;
