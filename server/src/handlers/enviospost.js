const cotizarHandler = async(req, res) =>{
    const {origen, destino, largo, ancho, alto, peso, servicios} = req.body
    const volumen = (ancho * largo * alto);
    try{
        const precioFinal = 500
        res.status(200).json({precioFinal})
    } catch (error){
        return console.log(error.message)
    }

}

module.exports = cotizarHandler