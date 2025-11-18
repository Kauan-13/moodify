import { useState } from "react";
import Sidebar from "../Sidebar";
import CardMusic from "../CardMusic";
import LoginPopup from "../LoginPopup";
import styles from "./styles.module.css";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Playlist = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [showMusic1, setShowMusic1] = useState(true);
    const [showMusic2, setShowMusic2] = useState(true);
    const [showMusic3, setShowMusic3] = useState(true);

    const [playing, setPlaying] = useState(-1);

    const navigate = useNavigate();
    const { user } = useAuth();

    const handleProfileClick = () => {
        if (user !== null && user !== undefined )
            navigate('/profile');

        else setShowPopup(true);
    };

    return (
        <main className={styles.playlistContainer}>
            <Sidebar onClick={() => handleProfileClick()} />

            <div className={styles.playlistContent}>
                <div className={styles.playlistHeader}>

                    <h1 className={styles.playlistTitle}>Menu mood é: pipi pópó pipi pópó</h1>

                </div>

                <div className={styles.cardsGrid}>
                    {showMusic1 && (
                        <CardMusic
                            musicName={`Something Stupid (From "Better Call Saul")`}
                            albumName={`Something Stupid (From "Better Call Saul")`}
                            albumImage="./album.jpg"
                            player="Lola Marsh"
                            year={2018}
                            playing={playing == 1 ? true : false}
                            onDelete={() => setShowMusic1(false)}
                            onPlay={() => { setPlaying(prev => prev != 1 ? 1 : -1) }}
                        />
                    )}

                    {showMusic2 && (
                        <CardMusic
                            musicName={`The Fate Of Ophelia`}
                            albumName={`The Life of a Showgirl`}
                            albumImage="./album1.jpg"
                            player="Taylor Swift"
                            year={2025}
                            playing={playing == 2 ? true : false}
                            onDelete={() => setShowMusic2(false)}
                            onPlay={() => { setPlaying(prev => prev != 2 ? 2 : -1) }}
                        />
                    )}

                    {showMusic3 && (
                        <CardMusic
                            musicName={`Come Over`}
                            albumName={`HOT`}
                            albumImage="./album2.png"
                            player="LE SSERAFIM"
                            year={2024}
                            playing={playing == 3 ? true : false}
                            onDelete={() => setShowMusic3(false)}
                            onPlay={() => { setPlaying(prev => prev != 3 ? 3 : -1) }}
                        />
                    )}
                </div>
            </div>

            {showPopup && <LoginPopup onClose={() => setShowPopup(false)} />}
        </main>
    )
}

export default Playlist;