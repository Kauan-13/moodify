import { IoIosClose } from "react-icons/io";
import LoginButton from "../LoginButton";
import styles from "./styles.module.css";

type LoginPopupProps = {
  onClose: () => void;
};

const LoginPopup = ({ onClose }: LoginPopupProps) => {
  return (
    <>
      <div 
        className={styles.backdrop} 
        onClick={onClose}
      />
      
      <div className={styles.card}>
        <IoIosClose className={styles.close} onClick={onClose} />

        <div className={styles.top}>
          <h3>Entrar ou Cadastrar</h3>
          <p>
            Você vai poder aproveitar playlists geradas de forma inteligentes e
            aproveitar músicas de uma nova maneira
          </p>
        </div>

        <LoginButton appName="spotify" iconPath="./spotify.svg" />
        <LoginButton appName="deezer" iconPath="./deezer.svg" />
        <LoginButton appName="amazon music" iconPath="./amazon.png" />
        <LoginButton appName="apple music" iconPath="./apple.svg" />
        <LoginButton appName="youtube music" iconPath="./ytm.svg" />
      </div>
    </>
  );
};

export default LoginPopup;