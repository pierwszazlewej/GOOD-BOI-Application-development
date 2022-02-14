import { BsChevronLeft } from 'react-icons/bs';
import ModalContainer from './ModalStyled';
import propTypes from 'prop-types';

const Modal = ({ onCloseHandler, modalData, onConfirmHandler }) => {
  const { about, back, confirmation, title, colors } = modalData;
  return (
    <ModalContainer colors={colors}>
      <div
        className="confirmationWrapper"
        onClick={onConfirmHandler}
        aria-hidden="true"
      >
        <h3 className="title">{title}</h3>
        <p className="about">{about}</p>
        <p className="confirmation">{confirmation}</p>
      </div>
      <div
        className="modalBackWrapper"
        aria-hidden="true"
        onClick={onCloseHandler}
      >
        <div className="modalBack">
          <BsChevronLeft className="arrow" />
          <p className="back">{back}</p>
        </div>
      </div>
    </ModalContainer>
  );
};

Modal.propTypes = {
  modalTitle: propTypes.string,
  modalAbout: propTypes.string,
  modalConfirmation: propTypes.string,
  modalBack: propTypes.string,
  onClick: propTypes.func,
  onCloseHandler: propTypes.func.isRequired,
  modalData: propTypes.object.isRequired,
  onConfirmHandler: propTypes.func.isRequired,
};

export default Modal;
