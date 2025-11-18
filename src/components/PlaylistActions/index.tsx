import { useState } from "react";
import { FiTrash2, FiShare2, FiDownload, FiEdit2 } from "react-icons/fi";
import EditPlaylistNameModal from "../EditPlaylistNameModal";
import DeleteConfirmationModal from "../DeleteConfirmationModal";
import styles from "./styles.module.css";
import SharePlaylistModal from "../../SharePlaylistModal";
import { usePlaylists } from "../../contexts/PlaylistContext";
import { useNavigate } from "react-router-dom";

interface PlaylistActionsProps {
  playlistId: string;
  playlistName: string;
}

const PlaylistActions = ({
  playlistId,
  playlistName,
}: PlaylistActionsProps) => {
  const [showShareModal, setShowShareModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showExportSuccess, setShowExportSuccess] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const navigate = useNavigate()
  const { deletePlaylist, updatePlaylistName } = usePlaylists();

  const handleExport = () => {
    setShowExportSuccess(true);
    setTimeout(() => setShowExportSuccess(false), 3000);
  };

  const handleDelete = () => {
    setShowDeleteConfirm(true);
  };
  
  const handleConfirmDelete = () => {
    setShowDeleteConfirm(false);
    navigate('/');
    
    deletePlaylist(playlistId)
  };

  return (
    <div className={styles.actionsContainer}>
      <button
        className={styles.actionButton}
        title="Deletar playlist"
        onClick={handleDelete}
      >
        <FiTrash2 size={20} />
      </button>

      <button
        className={styles.actionButton}
        title="Compartilhar playlist"
        onClick={() => setShowShareModal(true)}
      >
        <FiShare2 size={20} />
      </button>

      <button
        className={styles.actionButton}
        title="Exportar playlist"
        onClick={handleExport}
      >
        <FiDownload size={20} />
      </button>

      <button
        className={styles.actionButton}
        title="Editar nome da playlist"
        onClick={() => setShowEditModal(true)}
      >
        <FiEdit2 size={20} />
      </button>

      {showShareModal && (
        <SharePlaylistModal
          playlistName={playlistName}
          onClose={() => setShowShareModal(false)}
        />
      )}

      {showEditModal && (
        <EditPlaylistNameModal
          currentName={playlistName}
          onSave={(newName) => {
            updatePlaylistName(playlistId, newName.trim());
            setShowEditModal(false);
          }}
          onClose={() => setShowEditModal(false)}
        />
      )}

      {showExportSuccess && (
        <div className={styles.successNotification}>
          Playlist exportada com sucesso!
        </div>
      )}

      {showDeleteConfirm && (
        <DeleteConfirmationModal
          playlistName={playlistName}
          onConfirm={handleConfirmDelete}
          onCancel={() => setShowDeleteConfirm(false)}
        />
      )}
    </div>
  );
};

export default PlaylistActions;
