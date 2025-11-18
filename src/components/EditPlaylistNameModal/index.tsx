import { useState } from "react";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.css";

interface EditPlaylistNameModalProps {
  currentName: string;
  onSave: (newName: string) => void;
  onClose: () => void;
}

const EditPlaylistNameModal = ({
  currentName,
  onSave,
  onClose,
}: EditPlaylistNameModalProps) => {
  const [newName, setNewName] = useState(currentName);

  const handleSave = () => {
    if (newName.trim()) {
      onSave(newName.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2>Editar nome da playlist</h2>
          <button
            className={styles.closeButton}
            onClick={onClose}
            title="Fechar"
          >
            <FiX size={24} />
          </button>
        </div>

        <div className={styles.modalBody}>
          <label htmlFor="playlistName" className={styles.label}>
            Novo nome:
          </label>
          <input
            id="playlistName"
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            onKeyPress={handleKeyPress}
            className={styles.input}
            placeholder="Digite o novo nome da playlist"
            autoFocus
          />
        </div>

        <div className={styles.modalFooter}>
          <button className={styles.cancelButton} onClick={onClose}>
            Cancelar
          </button>
          <button
            className={styles.saveButton}
            onClick={handleSave}
            disabled={!newName.trim()}
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPlaylistNameModal;
