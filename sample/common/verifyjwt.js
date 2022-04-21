var jwt = require('jsonwebtoken');

module.exports = async(req,res,next) => {
    let accessToken = req.headers['x-access-token'];
    
    // console.log('verfiyToken',verfiyToken);

    try {
        let verfiyToken = jwt.verify(accessToken, 'user');
        if(verfiyToken) {
            req.headers['loginUser'] = verfiyToken;
            // let loginRes = {
            //     status: 200,
            //     success_msg: 'User Login success',
            //     user: verfiyToken
            // }
            // res.status(loginRes.status).json(loginRes);
            next();
        }

        else {
            errorRes = {
                status: 404,
                error_msg:"User credentials mismatch"
            }
            res.status(errorRes.status).json(errorRes);
        }
    }
    catch(e) {
        console.log('e',e.message);

        if(e.message == "invalid signature") {
            var errorRes = {
                status: 400,
                error_msg:"Please check the Token Length" + '(or)' + e.message
            }
            console.log('errorRes',errorRes);
        }

        else if(e.message == 'jwt malformed') {
            var errorRes = {
                status: 400,
                error_msg:"Give the valid Token" + '(or)' + e.message
            }
            
        }

        else if(e.message == 'jwt must be provided') {
            var errorRes = {
                status: 404,
                error_msg: e.message
            }
            
        }

        else {
            var errorRes = {
                status: 404,
                error_msg: e.message + ' ' + 'Please Login Again!!'
            }
        }
        
        res.status(errorRes.status).json(errorRes);
    }
}