import style from "./style.module.css";
import TimeInput from "../TimeInput";
import TagInput from "../TagInput";
import { useState } from "react";

interface Props {
    onClick: () => void,
    isClicked: boolean,
    min: number,
    max: number
}

const SearchBar = ({ onClick, isClicked, min, max }: Props) => {

    const [tags, setTags] = useState<string[]>([]);

    return (
        <div className={style.searchBar} onClick={() => { onClick() }}>
            <input 
                type="search" 
                name="search" 
                id="search" 
                placeholder="Meu mood hoje é..." 
                className={style.searchInput} 
            /> 
            
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
