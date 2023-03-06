import React from "react";


const Modal = ({
  isOpen,
  closeModal,
  children,
  alto = 600,
  ancho = 600,
  colorBackground = 'none',
  posicionIzquierda = 0,
  posicionArriba = 0,
  borde = 'none',
}) => {
  let modal__dialogo = {
    height: `${alto}px`,
    width: `${ancho}px`,
    background: colorBackground,
    left: posicionIzquierda,
    top: posicionArriba,
    border: `${borde} 1px solid`,
  };

  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className={`modal ${isOpen && "modal-open"}`} onClick={closeModal}>
        <div
          className="modal__dialog"
          onClick={handleModalDialogClick}
          style={modal__dialogo}
        >
          <div className="espacio_cerrar">
            <div className="contenedor-cerrar">
              <img src="/images/cerrar-ventana.png" alt="Cerrar" onClick={closeModal}></img>
            </div>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
