import style from "./style.module.css";
import { MdSearch } from "react-icons/md";

interface Props {
    onClick: () => void,
}

const SearchBar = ({onClick}: Props) => {

    return (
        <div className={style.searchBar} onClick={() => {onClick()}}>
            <input type="search" name="search" id="search" placeholder="Meu mood..." className={style.searchInput} /> 
            <MdSearch className={style.icon}/>
        </div>   
    )
}

export default SearchBar;