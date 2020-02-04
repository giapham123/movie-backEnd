const userModel = require('../models/user')
class user {
    async getUser (param){
        var userInfor = await userModel.find({username: param.username});
        return {'username':userInfor[0].username,
        'password':userInfor[0].password};
    }
}
module.exports = new user();