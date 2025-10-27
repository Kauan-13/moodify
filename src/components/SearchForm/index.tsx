import { useState } from "react";
import SearchBar from "../SearchBar";
import style from "./style.module.css";
import TimeInput from "../TimeInput";
import TagInput from "../TagInput";

const SearchForm = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [tags, setTags] = useState([]);

    return (
        <form action="" className={style.form}>
            <SearchBar onClick={() => {setIsClicked(true)}}/>
            {
                isClicked == true ? 
                    <div className={style.filters}>
                        <TimeInput/>
                        <div className={style.tags}>
                            <TagInput tags={tags} label={"Filtragem:"} onChange={setTags}/>
                        </div>
                    </div> 
                    : null
            }
        </form>
    )
}

export default SearchForm;