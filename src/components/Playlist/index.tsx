import { useState } from "react";
import Sidebar from "../Sidebar";
import CardMusic from "../CardMusic";
import LoginPopup from "../LoginPopup";

const Playlist = () => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <main>
            <Sidebar onClick={() => setShowPopup(true)} />
            <CardMusic musicName={`Something Stupid (From "Better Call Saul")`} albumName={`Something Stupid (From "Better Call Saul")`} albumImage="./album.jpg" player="Lola Marsh" year={2018}/>

            {showPopup && <LoginPopup onClose={() => setShowPopup(false)} />}
        </main>
    )
} 

export default Playlist;