const models = require('../../models')

const method = {}

method.getGenre = async (req, res) => {
 try {
     const genre = await models.genre.findAll()
     const getData = {
         statusCode: 200,
         statusText:'Succes',
         message: 'Get All Data Succes',
         data: genre,
     }
     res.json(getData)
 } catch (error) {
     res.json(error)
     console.log('Ini Error', error);
 }
}


method.createGenre = (req, res) => {
    try {
        const createNew ={
            movie_id:req.body.movie_id,
            movie_name:req.body.movie_name
        }
        const newData = models.genre.create(createNew)
        if(newData){
            res.json({
                statusCode: 200,
                statusText: 'Succes',
                message: 'Create new order berhasil',
                data: createNew
            })
            .status(200)
        }
    } catch (error) {
        console.log(('ini error' , error ));
        res.json({
            statusCode:400,
            statusText:'Succes',
            message: error
    
        })
    }
}

method.updateGenre = async (req, res) => {
    try {
        await models.genre.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json({
            statusCode: 200,
            statusText: 'Success',
            message: 'Data has been updated'
        })
    } catch (error) {
        res.json(error)
    }
}

method.deleteGenre = (req, res) => {
    const id = req.params.id
    models.genre.destroy({
        where: {
            id: id
        }
    })
    .then((result) => {
        if (result == 1) {
            res.send({
                statusCode: 200,
                statusText: 'succes',
                statusMessage: `Genre Dengan ID ${id} berhasil di hapus`,
    
            })
        } else {
            res.send({
                statusCode: 500,
                statusText: 'fail',
                statusMessage: `Genre Dengan ID ${id} Tidak Ditemukan`, 
            })
        }
    })
}

module.exports = method