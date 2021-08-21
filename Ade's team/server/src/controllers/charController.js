const models = require('../../models')

const method = {}

method.getChar = async (req, res) => {
 try {
     const character = await models.char.findAll()
     const getData = {
         statusCode: 200,
         statusText:'success',
         message: 'Get All Data Success',
         data: character,
     }
     res.json(getData)
 } catch (error) {
     res.json(error)
     console.log('error', error);
 }
}


module.exports = method;