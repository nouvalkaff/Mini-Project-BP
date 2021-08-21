const { movies: userMovie, category: userCategory } = require('../../models')

const categoryController = {}


categoryController.getCategories = async (req, res) => {
    try {
        const { page, size } = req.query;
        const category = await userCategory.findAll({
            limit: size,
            offset: page * size, 
            include: [ userMovie ] 
        });
        const getData = {
            statusCode: 200,
            statusText: 'Success',
            message: 'Get all data user',
            data: category
        };
        res.json(getData)
    } catch (error) {
        console.log(error)
        res.json(error)
    }
};


module.exports = categoryController