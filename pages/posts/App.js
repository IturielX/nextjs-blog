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
        colorTitulo: '#98e1df',
        colorCuerpo: '#bee8e8',
        colorIzquierdoDiagonal: '#e5e5e5',
        colorDerechoDiagonal: "#091f2a"
    }

    const eventoBotonOpenChatModal = () => {
        openChatModal();
        closeLoginModal();
    };

    const eventoBotonOpenModal = () => {
        openLoginModal();
        closeChatModal();
    };

    return (
        <>
            <div className={styles.backToHome}>
                <Link href="/">← Back to home</Link>
            </div>
            <div>
                <button onClick={eventoBotonOpenModal}>Open Modal</button>

                <button onClick={eventoBotonOpenChatModal}>Open Chat Modal</button>

                <Modal
                    isOpen={isOpenLoginModal}
                    closeModal={closeLoginModal}
                    alto={400}
                    ancho={600}
                    color={coloresFondos.colorTitulo}
                    posicionIzquierda={100}
                    posicionArriba={20}

                >
                    <FichaModal
                        title="Login"
                        mostrarDiagonal={true}
                        colorIzquierdoDiagonal={coloresFondos.colorIzquierdoDiagonal}
                        colorDerechoDiagonal={coloresFondos.colorDerechoDiagonal}
                        colorTitulo={coloresFondos.colorTitulo}
                        colorCuerpo={coloresFondos.colorCuerpo}
                    />

                </Modal>

                <Modal
                    mostrarDiagonal={true}
                    isOpen={isOpenChatModal}
                    closeModal={closeChatModal}
                    title="Chat"
                    alto={200}
                    ancho={300}
                    color={coloresFondos.colorTitulo}
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
