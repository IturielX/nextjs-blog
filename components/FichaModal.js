import React from "react";
import Diagonal from "./Diagonal";
import TablaModal from "./TablaModal";


const FichaModal = ({ title, mostrarDiagonal = false, colorIzquierdoDiagonal = "gray", colorDerechoDiagonal = "black", colorFondoTitulo = 'none', colorFondoCuerpo, colorTitulo }) => {

  let modal__dialog1 = {
    background: colorFondoTitulo,
    color: colorTitulo,
  };

  let modal__dialog2 = {
    background: colorFondoCuerpo,
  };

  let modal__footer = {
    background: colorFondoTitulo,
    color: colorTitulo,
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <>
      <div className="modal__dialog1" style={modal__dialog1}>
        <h1>{title}</h1>
      </div>
      {mostrarDiagonal && (
        <Diagonal
          colorIzquierdo={colorIzquierdoDiagonal}
          colorDerecho={colorDerechoDiagonal}
        />
      )}
      <div className="modal__dialog2" style={modal__dialog2}>

        <TablaModal
          colorBorde={colorIzquierdoDiagonal}
          colorLetra={colorDerechoDiagonal}
        />

      </div>
      <div className="modal__footer" style={modal__footer}>
        <p>↓</p>
      </div>

    </>
  );
};

export default FichaModal;
