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
        colorTitulo: 'none',
        colorCuerpo: 'none',
    }
    const coloresDiagonal = {
        colorIzquierdo: '#1363DF',
        colorDerecho: "#47B5FF"
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
                        <button onClick={eventoBotonOpenModal}>Open Modal</button>

                        <button onClick={eventoBotonOpenChatModal}>Open Chat Modal</button>

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
                    colorBackground={coloresFondos.colorTitulo}
                    posicionIzquierda={'10%'}
                    posicionArriba={'10%'}

                >
                    <FichaModal
                        title="Login"
                        mostrarDiagonal={true}
                        colorIzquierdoDiagonal={coloresDiagonal.colorIzquierdo}
                        colorDerechoDiagonal={coloresDiagonal.colorDerecho}
                        colorFondoTitulo={coloresFondos.colorTitulo}
                        colorFondoCuerpo={coloresFondos.colorCuerpo}
                        colorTitulo={coloresDiagonal.colorIzquierdo}
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
