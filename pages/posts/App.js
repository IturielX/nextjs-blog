import React from "react";
import useModal from "../../hooks/useModal";
import Modal from "../../components/ModalGenerico/Modal";
import FichaModal from "../../components/FichaModal";
import styles from '../../components/layout.module.css'
import Link from "next/link";



const App = () => {
    const [isOpenLoginModal, openLoginModal, closeLoginModal] = useModal();
    const [isOpenChatModal, openChatModal, closeChatModal] = useModal();
    const coloresFondos = {
        titulo: 'none',
        cuerpo: 'none',
    }
    const coloresDiagonal = {
        izquierdo: '#1363DF',
        derecho: "#47B5FF"
    }

    const eventoBotonOpenChatModal = () => {
        openChatModal();
        closeLoginModal();
    };

    const eventoBotonOpenModal = () => {
        openLoginModal();
        closeChatModal();
    };

    console.log('isOpenLoginModal', isOpenLoginModal);
    return (
        <>
            <div>
                {(isOpenLoginModal === false && isOpenChatModal === false) &&
                    <>
                    <div className="contenedor-botones">

                        <button className="btn-borde" onClick={eventoBotonOpenModal}>Open Modal</button>

                        <button className="btn-borde" onClick={eventoBotonOpenChatModal}>Open Chat Modal</button>
                    </div>

                        <div className={styles.backToHome}>
                            <Link href="/">← Back to home</Link>
                        </div>

                    </>
                }
                <Modal
                    isOpen={isOpenLoginModal}
                    closeModal={closeLoginModal}
                    alto={500}
                    ancho={600}
                    colorBackground={coloresFondos.titulo}
                    borde={coloresDiagonal.derecho}
                    posicionIzquierda={'10%'}
                    posicionArriba={'10%'}

                >
                    <FichaModal
                        title="Login"
                        mostrarDiagonal={true}
                        colorIzquierdoDiagonal={coloresDiagonal.izquierdo}
                        colorDerechoDiagonal={coloresDiagonal.derecho}
                        colorFondoTitulo={coloresFondos.titulo}
                        colorFondoCuerpo={coloresFondos.cuerpo}
                        colorTitulo={coloresDiagonal.izquierdo}
                    />

                </Modal>

                <Modal
                    mostrarDiagonal={true}
                    isOpen={isOpenChatModal}
                    closeModal={closeChatModal}
                    title="Chat"
                    alto={200}
                    ancho={300}
                    colorBackground={coloresFondos.colorTitulo}
                    borde={coloresDiagonal.derecho}
                    posicionIzquierda={400}
                    posicionArriba={460}

                >
                    <p>Hola!!</p> <b>- Luis </b>
                    <p>Que hace :v</p> <b>- María </b>
                </Modal>
            </div>
        </>
    );
};

export default App;
