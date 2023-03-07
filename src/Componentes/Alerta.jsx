import Alert from "react-bootstrap/Alert";

function Alerta(props) {
  return (
    <Alert
      variant="danger"
      onClose={() => {
        props.setShowAlerta(!props.showAlerta);
      }}
      dismissibles
      className="mx-2 my-0"
    >
      <Alert.Heading className="d-flex justify-content-between">
        Número inválido!{" "}
        <button
          type="button"
          class="btn-close"
          aria-label="Close"
          onClick={() => props.setShowAlerta(false)}
        ></button>
      </Alert.Heading>
      <p>Verifique se o número de telefone está completo.</p>
    </Alert>
  );
}

export default Alerta;
