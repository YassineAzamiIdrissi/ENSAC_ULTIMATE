import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ImageAttachmentPreview = ({ image, handleClose }) => {
  return (
    <div className="image-attachment-preview">
      <img src={image} alt="" />
      <button className="btn close-btn" onClick={handleClose}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  );
};

export default ImageAttachmentPreview;
