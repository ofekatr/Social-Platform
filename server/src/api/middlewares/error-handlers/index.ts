const ApiError = require('../../../models/ApiError');

module.exports = (err, _, res, next) => {
    console.log(err);
    if (err instanceof ApiError) {
        res.status(err.code).json({
            message: err.msg,
            errors: err.errors
        });
        return next(err);
    }
    res.status(500).send("An internal error. Please report to an administrator.");
    return next(err);
}

export { };