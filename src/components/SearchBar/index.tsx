import style from "./style.module.css";
import { MdSearch } from "react-icons/md";

const SearchBar = () => {

    return (
        <div className={style.searchBar}>
            <input type="search" name="search" id="search" placeholder="Meu mood..." className={style.searchInput} /> 
            <MdSearch className={style.icon}/>
        </div>   
    )
}

export default SearchBar;