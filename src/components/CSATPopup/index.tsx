import { useState } from "react";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.css";
import StarRating from "../StarRating";

interface Props {
  funcionalidadeNome: string;
  funcionalidadeId: number
  onSave: (e: any, rating: number, id: number) => void;
  onClose: () => void;
}

const CsatPopup = ({ funcionalidadeNome, funcionalidadeId, onSave, onClose, }: Props) => {

  const [ rating, setRating ] = useState(0)

  return (
    <div className={styles.modalOverlay} onClick={onClose}>

        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()} >
          
          <div className={styles.modalHeader}>
            <h2>{`Quão satisfeito(a) você está com a funcionalidade para ${funcionalidadeNome}?`}</h2>
            <button
              className={styles.closeButton}
              onClick={onClose}
              title="Fechar"
            >
              <FiX size={24} />
            </button>
          </div>

          <form className={styles.modalBody} onSubmit={ (e) => onSave(e, rating, funcionalidadeId)}>

          <div className={ styles.starrating }>
                <div className={styles.sectionHeading}>
                    <p className={styles.tip}>Selecione uma avaliação de 0,5 à 5 estrelas</p>
                </div>
                <div className={styles.starsWrapper}>
                    <p className={styles.starsLabel}>Sua avaliação</p>
                    <StarRating value={rating} onChange={setRating} />
                    <p className={styles.tip}>
                        Avaliação atual: {rating > 0 ? `${rating.toString().replace('.',',')} estrela${rating !== 1 ? "s" : ""}` : "Não Avaliado Ainda"}
                    </p>
                </div>
          </div>

          <div className={styles.modalFooter}>
            <button className={styles.cancelButton} onClick={onClose}>
              Cancelar
            </button>
            <button
              type="submit"
              className={styles.saveButton}
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CsatPopup;
