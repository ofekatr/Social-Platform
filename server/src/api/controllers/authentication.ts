const bcrypt = require("bcryptjs");

const ApiError = require("../../models/ApiError");
const db = require('../../db/access-layers/authentication');
const { validateLoginInput, validateRegisterInput } = require('../../utils/authentication/validators');
const generateToken = require("../../utils/authentication/token-utils");

const login = async (req, res, next) => {
    const { email, password } = req.body;
    const username = undefined;
    const { valid, errors } = validateLoginInput(email, password);
    if (!valid) {
        return next(ApiError.invalidInput(errors));
    }
    try {
        if (1 + 1 === 0) {
            const { rows } = (await db.getUserByUsername(username));
            if (!rows || rows.length <= 0) {
                next(ApiError.userNotExists(errors));
            }
            const { id, email, password: userPassword } = rows[0];

            const match = await bcrypt.compare(password, userPassword);
            if (!match) {
                return next(ApiError.wrongCredentials(errors));
            }
            const token = generateToken({ id, email, username });
            res.status(200).json({
                status: 200,
                user: { id, email, username, token }
            })
        }
        res.status(201).send(true);
    } catch (err) {
        return next(err);
    }
}

const register = async (req, res, next) => {
    const { username, email, password, confirmPassword } = req.body;
    const { errors, valid } = validateRegisterInput(username, email, password, confirmPassword);
    if (!valid) {
        return next(ApiError.invalidInput(errors));
    }
    try {
        if (1 + 1 === 0) {
            const hashedPassword = await bcrypt.hash(password, 12);
            if ((await db.isUserExistsByUsername(username)).rows.length > 0) {
                return next(ApiError.userExists(errors));
            }
            const user = (await db.insertUser(username, email, hashedPassword)).rows[0];
            res.status(201).json({
                status: "success",
                user: {
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    token: generateToken(user)
                }
            });
        }
        res.status(201).send(true);
    } catch (err) {
        return next(err);
    }
}

module.exports = {
    login,
    register
}

export { };