import React from "react";


const Modal = ({
  isOpen,
  closeModal,
  children,
  alto = 600,
  ancho = 600,
  color = 'none',
  posicionIzquierda = 0,
  posicionArriba = 0
}) => {
  let modal__dialogo = {
    height: `${alto}px`,
    width: `${ancho}px`,
    background: color,
    left: posicionIzquierda,
    top: posicionArriba,

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
            <button onClick={closeModal}>Close Modal</button>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
