import React from 'react'


const TablaModal = ({ colorBorde, colorLetra }) => {
    console.log('colorBorde', colorBorde)
    let colorLetras = {
        color: colorLetra,
        fontWeight: `bolder`,
    }
    let colorBordeExterior = {
        border: `${colorBorde} 5px solid`,
    };
    let colorBordeInterior = {
        border: `${colorBorde} 1px solid`,
    };
    return (
        <>

            <table  style={colorBordeExterior}>
                <tbody style={colorLetras} >
                        <tr style={colorBordeInterior}>
                            <td style={colorBordeInterior}>{ }</td>
                            <td style={colorBordeInterior}>Gratis</td>
                        </tr>
                        <tr style={colorBordeInterior}>
                            <td style={colorBordeInterior}>Chanchito feliz</td>
                            <td style={colorBordeInterior}>19,90$</td>
                        </tr>
                        <tr style={colorBordeInterior}>
                            <td style={colorBordeInterior}>Chanchito muy feliz</td>
                            <td style={colorBordeInterior}>20,90$</td>
                        </tr>
                        <tr style={colorBordeInterior}>
                            <td style={colorBordeInterior}></td>
                            <td style={colorBordeInterior}>21,90$</td>
                            <td style={colorBordeInterior}>dos</td>
                        </tr>
                        <tr style={colorBordeInterior}>
                            <td style={colorBordeInterior}></td>
                            <td style={colorBordeInterior}>22,90$</td>
                            <td style={colorBordeInterior}>doos</td>
                        </tr>
                        <tr style={colorBordeInterior}>
                            <td style={colorBordeInterior}>Chanchito muy happy</td>
                            <td style={colorBordeInterior}>25,90$</td>
                        </tr>
                </tbody>
            </table>
            <br />
            <div> Item </div>
            <div>Item</div>
            <div>Item</div>
            <div> Item </div>
            <div>Item</div>
            <div>Item</div>
            <div> Item </div>
            <div>Item</div>
            <div>Item</div>
        </>
    )

}
export default TablaModal;
