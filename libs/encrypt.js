var crypto = require('crypto');


module.exports.encryptPassword = function(password){
  var hash = crypto.createHmac('sha256',password)
                   .update("sude-epr")
                   .digest('hex');
  return hash
};
