import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";
import CardMusic from "../CardMusic";
import LoginPopup from "../LoginPopup";
import PlaylistActions from "../PlaylistActions";
import styles from "./styles.module.css";
import { useAuth } from "../../contexts/AuthContext";
import { type Playlist as PlaylistType, type Song as SongType } from "../../types/playlist";
import { usePlaylists } from "../../contexts/PlaylistContext";
import Watermark from "../Watermark";
import CsatPopup from "../CSATPopup";
import FormAlert from "../FormAlert";
import useCSATPopup from "../../hooks/CSATPopupHook";

const Playlist = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [playlist, setPlaylist] = useState<PlaylistType | null>(null);
    const [visibleSongs, setVisibleSongs] = useState<Set<string>>(new Set());
    const [playing, setPlaying] = useState<string | null>(null);
    const [playlistName, setPlaylistName] = useState<string>("");

    const navigate = useNavigate();
    const { user } = useAuth();
    const { id } = useParams<{ id: string }>();
    const { getPlaylistById } = usePlaylists();
    const { ID_FUNC, showCSAT, setShowCSAT, handleSubmit, alreadyRated } = useCSATPopup(1)

    useEffect(() => {
        if (id) {
            const data = getPlaylistById(id);
            setPlaylist(data);
            if (data) {
                setVisibleSongs(new Set(data.songs.map((song: SongType) => song.id)));
                setPlaylistName(data.mood.name);
            }
        }
    }, [id, getPlaylistById]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { alreadyRated() }, [])

    const handleProfileClick = () => {
        if (user !== null && user !== undefined )
            navigate('/profile');
        else setShowPopup(true);
    };

    const handleDeleteSong = (songId: string) => {
        setVisibleSongs(prev => {
            const newSet = new Set(prev);
            newSet.delete(songId);
            return newSet;
        });
    };

    if (!playlist) {
        return (
            <main className={styles.playlistContainer}>
                <Sidebar onClick={() => handleProfileClick()} />
                <div className={styles.playlistContent}>
                    <p>Carregando Músicas...</p>
                </div>
            </main>
        );
    }

    return (
        <main className={styles.playlistContainer}>
            {
                showCSAT &&
                <CsatPopup
                    funcionalidadeNome="Visualizar Playlist"
                    funcionalidadeId={ ID_FUNC }

                    onClose={ () => setShowCSAT(false) }
                    onSave={ handleSubmit }
                />
            }

            <Sidebar onClick={() => handleProfileClick()} />

            <div className={styles.playlistContent}>
                <div className={styles.playlistHeader}>
                    <h1 className={styles.playlistTitle}>Meu <i>mood</i> é: <span>{playlistName}</span></h1>
                    <p className={styles.playlistSubtitle}>Com base no seu mood fizemos uma playlist que promete encaixar direitinho no seu dia.</p>
                </div>
                
                <PlaylistActions
                    playlistId={playlist.id}
                    playlistName={playlistName}
                />

                <div className={styles.cardsGrid}>
                    {playlist.songs.filter(song => visibleSongs.has(song.id)).length === 0 ?
                    ( <p className={styles.playlistEmpty} >Você deletou todas as músicas desta playlist...</p> )
                    : playlist.songs.filter(song => visibleSongs.has(song.id)).map((song) => (
                        <CardMusic
                            key={song.id}
                            musicName={song.name}
                            albumName={song.album}
                            albumImage={song.coverUrl}
                            player={song.artist}
                            year={song.year}
                            playing={playing === song.id}
                            onDelete={() => handleDeleteSong(song.id)}
                            onPlay={() => setPlaying(prev => prev !== song.id ? song.id : null)}
                        />
                    ))}
                </div>
            </div>

            {showPopup && <LoginPopup onClose={() => setShowPopup(false)} />}
            <Watermark/>
            <FormAlert/>
        </main>
    )
}

export default Playlist;
