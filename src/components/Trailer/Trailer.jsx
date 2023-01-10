import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchVideos } from '../../services/fetchMovie';
import Modal from 'react-modal';
import { OpenModal } from './Trailer.styled';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    background: 'none',
    border: 'none',
    backgroundSize: 'contain',
  },
  overlay: {
    zIndex: '2',
    backgroundColor: 'rgba(7, 6, 6, 0.75)',
  },
};

Modal.setAppElement('#root');

const Trailer = () => {
  const { movieId } = useParams();
  const [video, setVideo] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    async function getVideo() {
      const video = await fetchVideos(movieId);
      setVideo(video[0]);
    }
    getVideo();
  }, [movieId]);

  if (!video) {
    return null;
  }

  return (
    <div>
      <OpenModal onClick={openModal}>Watch trailer</OpenModal>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <iframe
          width="700"
          height="550"
          src={`https://www.youtube.com/embed/${video.key}`}
          title={video.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </Modal>
    </div>
  );
};
export default Trailer;
