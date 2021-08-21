const  authMiddleware = {};
const joi = require('joi');

/**
 * check validate data when user register
 */
authMiddleware.validateRegister = (req, res ,next) => {
    const userSchema = joi.object({
       // role: joi.string('user'),
        full_name: joi.string().required(),
        username: joi.string().required(),
        email: joi.string().required(),
        password: joi.string().required(),
        //profile_picture:joi.string().required(),
    });

    const { error } = userSchema.validate(req.body);
    if(error) {
        res.status(402).send({
            status:402,
            message:error.details[0].message,
            data: null,
        })
    }
    next();

};

/**
 * Check validate user when login
 */
authMiddleware.validateLogin = async (req, res, next) => {
     //validasi input data
     const loginSchema = joi.object({
        email: joi.string().required(),
        password: joi.string().required(),
    })
    const {error} = loginSchema.validate(req.body);
    if(error) {
        res.status(402).send({
            status: 402,
            message: error.details[0].message,
            data: null,
        })
    }

    next();
};

/**
 * Check User role
 */
 authMiddleware.adminPage = (permissions) => {
    return (req, res, next) => {
    const userRole = req.body.role
    if(permissions.includes(userRole)) {
        next()
    } else {
        return res.status(401).json("you dont have permission!")
    }
}
};

module.exports = authMiddleware;