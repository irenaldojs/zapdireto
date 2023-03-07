import Modal from "react-modal";
import Alerta from "./Alerta";

function ModalAlerta(props) {
  const estiloModal = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "transparent",
      borderRadius: "10px",
      padding: "0px",
      border: "none",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  };

  return (
    <Modal
      isOpen={props.showAlerta}
      onRequestClose={() => props.setShowAlerta(false)}
      style={estiloModal}
      ariaHideApp={false}
    >
      <Alerta
        showAlerta={props.showAlerta}
        setShowAlerta={props.setShowAlerta}
      />
    </Modal>
  );
}

export default ModalAlerta;
