import { SiGoogleforms } from "react-icons/si"
import style from "./style.module.css";

interface Props {
    onClick: () => void
}

const FormAlert = ({onClick}: Props) => {
    return (
        <div className={style.formAlert}>
            <p>Avalie essa página: </p>
            <div className={style.link} onClick={() => onClick()}>
                <SiGoogleforms></SiGoogleforms>
                <p>CSAT</p>
            </div>
        </div>
    )
}

export default FormAlert;
