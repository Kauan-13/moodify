import { SiGoogleforms } from "react-icons/si"
import style from "./style.module.css";

const FormAlert = () => {
    return (
        <div className={style.formAlert}>
            <p>Após a navegação pelo site, deixe sua avalição: </p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdeyyF-rQLmpAdNP-PhHNq-KxzC0pY4T5a3Fqyx1xLpZtaJRw/viewform?usp=dialog" target="_blank" className={style.link}>
                <SiGoogleforms></SiGoogleforms>
                <p>Questionário</p>
            </a>
        </div>
    )
}

export default FormAlert;