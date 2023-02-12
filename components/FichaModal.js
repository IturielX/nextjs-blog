import React from "react";
import Diagonal from "./Diagonal";
import TablaModal from "./TablaModal";


const FichaModal = ({ title, mostrarDiagonal = false, colorIzquierdoDiagonal = "gray", colorDerechoDiagonal = "black", colorTitulo = 'none', colorCuerpo }) => {

  let modal__dialog1 = {
    background: colorTitulo,
  };

  let modal__dialog2 = {
    background: colorCuerpo,
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

        <TablaModal />

      </div>
      <div className="modal-footer">
        <p>Este es el Footer fijo</p>
      </div>

    </>
  );
};

export default FichaModal;
