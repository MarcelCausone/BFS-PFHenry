const { postEnvio } = require('../controllers/postEnvio')
const {getEnvioID, getEnvios} = require("../controllers/envioIDControler")

const handlerGetEnvioXID = async (req, res) => {
    const { id } = req.params
    try {
        const response = await getEnvioID(id);
        !response ? res.status(400).json({ error: `No se encontro el Id: ${id}` })
            : res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/*  endpoint: http://localhost:3001/envios/:id
 tipo: post
 devuelve: envio completo que coincida con la ID
 */


const handlerGetEnvio = async (req, res) => {
    const { user } = req.query
    console.log("hola"+user)
    try {
        const response = await getEnvios(user);
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/*  endpoint: http://localhost:3001/envios?user=/
 tipo: post
 devuelve: envio completo que coincida con la ID
 */


 const handlerPostEnvio = async (req, res) => {
    const { origen, destino, largo, ancho, alto, peso, servicios, total, imagen, dni, userEmail } = req.body;
    const dimensiones = largo * ancho * alto;
  
    try {
      const response = await postEnvio(origen, destino, dimensiones, servicios, peso, total, imagen, dni, userEmail);
  
      !response
        ? res.status(400).json({ error: 'Falta información' })
        : res.status(201).json({ message: 'Envío creado con éxito', "id del envío": response });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  };
  
  module.exports = { handlerPostEnvio };
  

/*  endpoint: http://localhost:3001/envios/
 tipo: post
 devuelve: numero de id de envio
 */


module.exports = {
    handlerGetEnvioXID,
    handlerPostEnvio
};