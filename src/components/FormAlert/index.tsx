import { SiGoogleforms } from "react-icons/si"
import style from "./style.module.css";

const FormAlert = () => {
    return (
        <div className={style.formAlert}>
            <p>Após a navegação pelo site, deixe sua avalição: </p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfUS4Ts9QJCeRscuhrZFqL0-P74GfVgPhTbyFDtm8pYdjWgBA/viewform?usp=publish-editor" target="_blank" className={style.link}>
                <SiGoogleforms></SiGoogleforms>
                <p>Questionário</p>
            </a>
        </div>
    )
}

export default FormAlert;
