import { Container } from "./styles";

interface ModalProps {
  handleClose: () => void;
  show: boolean;
  children: React.ReactNode;
}

const Modal = ({ handleClose, show, children }: ModalProps) => {
  return (
    <Container show={show}>
      <section className="modal-main">
        {children}
        <button type="button" className="btn-close" onClick={handleClose}>
          X
        </button>
      </section>
    </Container>
  );
};

export default Modal;
