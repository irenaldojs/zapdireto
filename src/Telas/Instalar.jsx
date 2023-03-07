import Safari from "./Safari";
import Chrome from "./Chrome";

function Instalar(props) {
  const imgInstalarEstilo = {
    maxHeight: "150",
    maxWidth: "150",
    cursor: "pointer",
  };

  const renderInstalar = (estado) => {
    switch (estado) {
      case "chrome":
        return (
          <div>
            <Chrome />
          </div>
        );
      case "safari":
        return (
          <div>
            <Safari />
          </div>
        );
      default:
        return (
          <div className="p-2 text-white rounded-3">
            <h2>Qual sistema deseja instalar ?</h2>
            <br />
            <br />
            <div className="d-flex justify-content-around">
              <div>
                <img
                  src="./chrome.png"
                  alt="Chrome"
                  onClick={() => props.setOpcaoInstalar("chrome")}
                  style={imgInstalarEstilo}
                />
                <h4>Chrome</h4>
                <span>( Android )</span>
              </div>

              <div>
                <img
                  src="./safari.png"
                  alt="Safari"
                  onClick={() => props.setOpcaoInstalar("safari")}
                  style={imgInstalarEstilo}
                />
                <h4>Safari</h4>
                <span>( IOS )</span>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <body className="bg-transparent">
      {renderInstalar(props.opcaoInstalar)}
    </body>
  );
}

export default Instalar;
