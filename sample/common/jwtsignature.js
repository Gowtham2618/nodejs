const session = require('express-session');
var jwt = require('jsonwebtoken');

const {sessionStore} = require('../hook/hook');

module.exports = async (req,res,next) => {
    let jwtdata = req.body;
    var token = await jwt.sign({ email: jwtdata.email,password: jwtdata.password }, 'user');
    let tokenRes = {
        token: token,
        user: jwtdata.first_name,
    }
    console.log('token',tokenRes);
        try {
            if(token) {
                req.body['token'] = tokenRes;               
                next();
            }

            else {
                let tokenErr = {
                    status: 404,
                    error_msg: 'Token not found'
                }
                res.status(404).json(tokenErr);
            }
        }

        catch(e) {
            res.status(400).json(e);
        }
}
