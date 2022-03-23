import { Container } from "./styles";

interface ModalProps {
  handleClose: () => void;
  show: boolean;
  children: React.ReactNode;
}

const Modal = ({ handleClose, show, children }: ModalProps) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <Container show={show}>
      <section className="modal-main">
        {children}
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </Container>
  );
};

export default Modal;
