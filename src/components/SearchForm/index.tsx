import { useState } from "react";
import SearchBar from "../SearchBar";
import style from "./style.module.css";

const SearchForm = () => {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <form action="" className={style.form}>
            <SearchBar 
                onClick={() => {setIsClicked(true)}} 
                isClicked={isClicked}
                min={1}
                max={240}
            />
        </form>
    )
}

export default SearchForm;
