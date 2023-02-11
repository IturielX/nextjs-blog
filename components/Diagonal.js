import React from 'react'

const Diagonal = ({ colorIzquierdo, colorDerecho}) => {

    let colorDiagonalDerecha = {
        backgroundColor: colorDerecho,
    }
    let colorDiagonalIzquierda = {
        backgroundColor: colorIzquierdo,
    }

    return (
        <div className='contenedorDiagonal'>
            <div className='colorDiagonalDerecha' style={colorDiagonalDerecha}>
                <div className='colorDiagonalIzquierda' style={colorDiagonalIzquierda}></div>
            </div>
        </div>

    )
}

export default Diagonal;