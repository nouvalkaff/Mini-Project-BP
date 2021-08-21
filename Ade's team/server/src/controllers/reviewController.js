const { review: userReview, users: userModel } = require('../../models')

const reviewController = {}


/**
 * Get All review
 */
reviewController.getReviews = async (req, res) => {
    try {
        const review = await userReview.findAll({
            include: [{model: userModel, as:'UserPeople'}]
        });
        const getData = {
            statusCode: 200,
            statusText: 'Success',
            message: 'Get all data user',
            data: review
        };
        res.json(getData)
    } catch (error) {
        console.log(error)
        res.json(error)
    }
};

/**
 * Create new review
 */
reviewController.createReview = async (req, res) => {
    try {
        const { user_id, movie_id } = req.body;

        let isExistReview = await userReview.findOne({
            where: {
                movie_id: movie_id,
                user_id: user_id,
            }
        });
        //! check if user  already submit the review
        if(isExistReview) {
            res.send({
                status: 200,
                message: "You already submit the review",
            });
        } 
        else {
            let review = await userReview.create({
                ...req.body
            });
            res.send({
                status:200,
                message: "Your review has been submit",
                data: review
            });
        }
    } catch (error){
        console.log(error);
        res.send({
            status:400,
            message: 'failed to create review'
        })
    }
};

/**
 * Edit/update user review
 */
reviewController.updateReview = async (req, res) => {
    try {
        const review_id = req.body.id;
        let review = await userReview.update(req.body,{
            where: {
                id: review_id
            },
        });
        res.send({
            status:200,
            message: `Your Review Has Been Update`,
            data: review
        })
    }catch (error) {
    console.log("👾 ~ file: reviewController.js ~ line 84 ~ reviewController.updateReview= ~ error", error)
    res.send({
        status:500,
        data:[],
        message:'Update review failed'
      })
    }
};

/**
 * Delete user review
 */
reviewController.deleteUserReview = async (req, res) => {
    try {
        const review_id = req.body.id;
        let deleteReview = await userReview.destroy({
            where: {
                id: review_id
            },
        });
        res.send({
            status: 200,
            message: 'Your review has been delete',
            data: deleteReview
        })

    }catch(error) {
        console.log(error);
        res.send({
            status:500,
            data:[],
            message:'Delete review failed'
          })
    }
}

module.exports = reviewController