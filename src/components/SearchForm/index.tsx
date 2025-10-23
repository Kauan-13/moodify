import { useState } from "react";
import SearchBar from "../SearchBar";
import style from "./style.module.css";
import { InputMask } from '@react-input/mask';

const SearchForm = () => {
    const [time, setTime] = useState("");

    return (
        <form action="" className={style.form}>
            <SearchBar/>
            <InputMask
                mask= "___min"
                value={time}
                onChange={(e) => setTime(e.target.value)}

                replacement={{ _: /\d/ }}

                showMask
                >
            </InputMask>
            
        </form>
    )
}

export default SearchForm;