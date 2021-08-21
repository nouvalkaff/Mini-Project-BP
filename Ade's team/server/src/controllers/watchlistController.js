const { 
    watchlist: userWatch, 
    movies: userMovie 
} = require('../../models')

const watchController = {}


watchController.getWatchlistRelation = async (req, res) => {
    try {
        const watchlist = await userWatch.findAll({include: [userMovie]});

        const getData = {
            statusCode: 200,
            statusText: 'Success',
            message: 'Get all data user',
            data: watchlist
        };
        res.json(getData)
    } catch (error) {
        console.log(error)
        res.json(error)
    }
};



watchController.getOneWatchlist = async (req, res) => {
    try {
        const id = req.params.id
        const watchlist = await userWatch.findOne({
            where: {
                id: id
            }
        });
        const getData = {
            statusCode: 200,
            statusText: 'Success',
            message: 'Get all data user',
            data: watchlist
        };
        res.json(getData)
    } catch (error) {
        console.log(error)
        res.json(error)
    }
};



watchController.updateWatch = async (req, res) =>{
    try {
        const newUpdate = userWatch.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            statusCode: 200,
            statusText: 'Success',
            message: 'Watchlist succesfully updated',
            data: newUpdate
        })

    } catch (error) {
        res.json({
            statusCode: 500,
            statusText: 'Error',
            message: 'Error update data',
            data: error
        })
    }
}



watchController.deleteWatchlist = async (req, res) => {
    try {
        const deleteWatch = await userWatch.destroy({
            where: { id: req.params.id }
        })

        if (deleteWatch) {
            res.json({
                statusCode: 201,
                statusText: 'OK',
                message: `Watchlist dengan ID ${req.params.id}`
            })
        }

    } catch (error) {
        
    }
}


module.exports = watchController