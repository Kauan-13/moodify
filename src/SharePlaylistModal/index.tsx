import { useState } from "react";
import { FiCopy, FiX } from "react-icons/fi";
import styles from "./styles.module.css";

interface SharePlaylistModalProps {
  playlistName: string;
  onClose: () => void;
}

const SharePlaylistModal = ({
  playlistName,
  onClose,
}: SharePlaylistModalProps) => {
  const [permission, setPermission] = useState<"view" | "edit">("view");
  const [copied, setCopied] = useState(false);

  // moca uma url
  const generateShareUrl = () => {
    const shareCode = Math.random().toString(36).substring(2, 15);
    const baseUrl = window.location.origin;
    return `${baseUrl}/share/${shareCode}?permission=${permission}`;
  };

  const shareUrl = generateShareUrl();

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2>Compartilhar Playlist</h2>
          <button
            className={styles.closeButton}
            onClick={onClose}
            title="Fechar"
          >
            <FiX size={24} />
          </button>
        </div>

        <div className={styles.modalBody}>
          <p className={styles.playlistInfo}>
            Playlist: <strong>{playlistName}</strong>
          </p>

          <div className={styles.permissionSection}>
            <label htmlFor="permission">Permissão de acesso:</label>
            <select
              id="permission"
              value={permission}
              onChange={(e) => setPermission(e.target.value as "view" | "edit")}
              className={styles.permissionSelect}
            >
              <option value="view">Apenas visualizar</option>
              <option value="edit">Pode editar</option>
            </select>
          </div>

          <div className={styles.linkSection}>
            <label>Link para compartilhar:</label>
            <div className={styles.linkContainer}>
              <input
                type="text"
                value={shareUrl}
                readOnly
                className={styles.linkInput}
              />
              <button
                className={styles.copyButton}
                onClick={handleCopyLink}
                title="Copiar link"
              >
                <FiCopy size={18} />
                {copied ? "Copiado!" : "Copiar"}
              </button>
            </div>
          </div>

          <p className={styles.helpText}>
            {permission === "view"
              ? "Amigos poderão apenas visualizar a playlist."
              : "Amigos poderão editar e adicionar músicas na playlist."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SharePlaylistModal;
