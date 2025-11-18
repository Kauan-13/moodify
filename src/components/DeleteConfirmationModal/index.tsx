import styles from "./styles.module.css";

interface DeleteConfirmationModalProps {
  playlistName: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const DeleteConfirmationModal = ({
  playlistName,
  onConfirm,
  onCancel,
}: DeleteConfirmationModalProps) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>Deletar Playlist</h2>
        <p className={styles.message}>
          Tem certeza que deseja deletar a playlist "{playlistName}"? Esta ação não pode ser desfeita.
        </p>
        <div className={styles.buttonGroup}>
          <button
            className={styles.cancelButton}
            onClick={onCancel}
          >
            Cancelar
          </button>
          <button
            className={styles.confirmButton}
            onClick={onConfirm}
          >
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
