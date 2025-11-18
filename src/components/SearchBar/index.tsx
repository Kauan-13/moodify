import style from "./style.module.css";
import TimeInput from "../TimeInput";
import TagInput from "../TagInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoSend } from "react-icons/io5";
import { usePlaylists } from "../../contexts/PlaylistContext";

interface Props {
    onClick: () => void,
    isClicked: boolean,
    min: number,
    max: number
}

const SearchBar = ({ onClick, isClicked, min, max }: Props) => {

    const [tags, setTags] = useState<string[]>([]);
    const [searchInput, setSearchInput] = useState<string>("");
    const navigate = useNavigate();
    const { playlists } = usePlaylists();

    const handleEnterClick = () => {
        if (playlists.length > 0 && searchInput.trim()) {
            const randomIndex = Math.floor(Math.random() * playlists.length);
            const randomPlaylist = playlists[randomIndex];
            navigate(`/playlist/${randomPlaylist.id}`);
        }
    };

    return (
        <div className={style.searchBar} onClick={() => { onClick() }}>
            <div className={style.searchContainer}>
                <input 
                    type="text" 
                    name="search" 
                    id="search" 
                    placeholder="Meu mood hoje é..." 
                    className={style.searchInput}
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            handleEnterClick();
                        }
                    }}
                /> 
                {searchInput.trim() && (
                    <button 
                        type="button"
                        className={style.enterButton}
                        onClick={handleEnterClick}
                        aria-label="Search and navigate to random playlist"
                    >
                        <IoSend />
                    </button>
                )}
            </div>
            
            {
                isClicked == true ? 
                    <div className={style.filterActions}>
                        <TimeInput min={min} max={max}/>
                        <div className={style.tags}>
                            <TagInput tags={tags} label={"Filtragem:"} onChange={setTags}/>
                        </div>
                    </div> 
                    : null
            }
        </div>   
    )
}

export default SearchBar;
