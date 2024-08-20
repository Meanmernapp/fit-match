import logo from "@/assets/logo.svg";
import Image from "next/image";
import { Modal } from "react-bootstrap";

const InfoMessageModal = ({ message, showModal, setShowModal, title }) => {
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <Modal
      show={showModal}
      onHide={handleCloseModal}
      backdrop="static"
      keyboard={false}
      size="lg"
      className="close_request_modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="new_trainer_guide">
          <Image src={logo} alt="log" width={200} height={100} />

          <p>{message}</p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default InfoMessageModal;
