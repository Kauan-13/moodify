import { useState } from "react";
import Sidebar from "../Sidebar";
import styles from "./style.module.css";
import { FaCircleInfo } from "react-icons/fa6";
import { BsInfoCircle } from "react-icons/bs";

const EmptyPage = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <main>
      <Sidebar onClick={() => setShowPopup(true)} />

      <section className={styles.content}>
        <div className={styles.card}>
          <h1 className={styles.title}>Ops! Não foi possível gerar a playlist :/</h1>
          <p className={styles.text}>
            Não conseguimos gerar uma playlist com essa entrada no momento.
            Mas não desanime! Tente novamente em alguns instantes.
            Experimente moods já testados como: Triste,  Feliz,  Amor ou  Sofrência.
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.subtitle}> <BsInfoCircle /> Sobre o Moodify</h2>
          <p className={styles.text}>
            No Moodify cada entrada gera uma playlist única e diversificada!
            Dificilmente você verá duas playlists iguais.
            Utilizamos seus gostos musicais para selecionar músicas que realmente combinem com você.
          </p>
        </div>
      </section>
    </main>
  );
};

export default EmptyPage;
