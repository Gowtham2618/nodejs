var basicAuth = require('basic-auth');

module.exports = async(req,res,next) => {
    var user = basicAuth(req);

    console.log('user',user);
    console.log('AUTHKEY',process.env.AUTHKEY);
    console.log('AUTHSECRET',process.env.AUTHSECRET);
    console.log('PORT',process.env.PORT);

    if (user == undefined || user == null) {
        res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
        res.sendStatus(401);
        return;
      }
      if ((!user.hasOwnProperty('name')) || (!user.hasOwnProperty('pass'))) {
        res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
        res.sendStatus(401);
        return;
      }
    
      if ((user.name == process.env.AUTHKEY) && (user.pass == process.env.AUTHSECRET)) { //admin authentication validation.
        next();
      } else {
        res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
        res.sendStatus(401);
      }
}