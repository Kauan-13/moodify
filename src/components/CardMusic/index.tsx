import { useState } from "react";
import style from "./style.module.css";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";

interface Props {
    musicName: string,
    albumName: string,
    albumImage: string,
    player: string,
    year: number,
}

const CardMusic = ({musicName, albumName, albumImage, player, year}: Props) => {
    const [isPlay, setIsPlay] = useState(false);
    const [like, setLike] = useState("");

    return (
        <div className={style.cardMusic}>
            <div className={style.albumImage}>
                <img src={albumImage} alt="" />
                <div className={`${style.background} ${isPlay ? style.backgroundPlay : null}`}></div>
                { 
                    !isPlay ? <FaPlay className={`${style.icon} ${style.play}`} onClick={() => setIsPlay(true)}/> 
                    : <FaPause className={`${style.icon} ${style.pause}`} onClick={() => setIsPlay(false)}/>
                }
            </div>
            <div className={style.musicInfo}>
                <h3 title={musicName}>{musicName}</h3>
                <h4 title={`${albumName} - ${player} - ${year}`}>{`${albumName} - ${player} - ${year}`}</h4>
            </div>
            <div className={style.likeDislike}>
                <AiFillLike className={`${style.like} ${like == "like" ? style.liked : null}`} onClick={() => {
                    setLike((prev) => prev != "like" ? "like" : "");
                }}/>
                <AiFillDislike className={`${style.dislike} ${like == "dislike" ? style.liked : null}`} onClick={() => {
                    setLike((prev) => prev != "dislike" ? "dislike" : "");
                }}/>
            </div>
        </div>
    )
}

export default CardMusic;