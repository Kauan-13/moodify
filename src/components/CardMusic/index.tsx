import { useState } from "react";
import style from "./style.module.css";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { FaPlay, FaTrash } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";

interface Props {
    musicName: string,
    albumName: string,
    albumImage: string,
    player: string,
    year: number,
    playing: boolean,
    onDelete?: () => void;
    onPlay?: () => void;
}

const CardMusic = ({ musicName, albumName, albumImage, player, year, playing, onPlay, onDelete}: Props) => {
    const [like, setLike] = useState("");

    const handleDelete = () => {
        if (onDelete) {
            onDelete();
        }
    };

    const handlePlay = () => {
        if (onPlay) {
            onPlay();
        }
    };

    return (
        <div className={style.cardMusic}>
            <div className={style.albumImage}>
                <img src={albumImage} alt="" />
                <div className={`${style.background} ${playing ? style.backgroundPlay : null}`}></div>
                {
                    !playing ? <FaPlay className={`${style.icon} ${style.play}`} onClick={handlePlay} />
                        : <FaPause className={`${style.icon} ${style.pause}`} onClick={handlePlay} />
                }
            </div>
            <div className={style.musicInfo}>
                <h3 title={musicName}>{musicName}</h3>
                <h4 title={`${albumName} - ${player} - ${year}`}>{`${albumName} - ${player} - ${year}`}</h4>
            </div>
            <div className={style.likeDislike}>
                <AiFillLike
                    className={`${style.like} ${like == "like" ? style.liked : null}`}
                    onClick={() => {
                        setLike((prev) => prev != "like" ? "like" : "");
                    }}
                />
                <AiFillDislike
                    className={`${style.dislike} ${like == "dislike" ? style.liked : null}`}
                    onClick={() => {
                        setLike((prev) => prev != "dislike" ? "dislike" : "");
                    }}
                />
                <FaTrash
                    className={style.delete}
                    onClick={handleDelete}
                    title="Excluir música"
                />
            </div>
        </div>
    )
}

export default CardMusic;