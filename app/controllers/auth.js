var jwt = require('jsonwebtoken');
const user = require('../controllers/userController');
const bcrypt = require('bcrypt');
exports.authJwt1 = async (req, res) => {
    var userInfor = {
        message: '',
        userID: ''
    };
    var token = '';
    const param = {
        username: req.body.username,
        password: req.body.password
    };
    var userToken = await user.getUser(param);
    userInfor.userID = userToken.username;
    if (bcrypt.compareSync(param.password, userToken.password)) {
        userInfor.message = 'Log In Successful';

        token = jwt.sign(userInfor, "my_secrect_kkey", { expiresIn: 86400 });
        res.json({
            token: token,
            userInfor: userInfor
        })
    } else {
        userInfor.message = 'Log In Failed; UserName or Password is wrong';
        res.status(401).json({
            userInfor: userInfor
        })
    }
}
exports.ensureToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader != 'undefined') {
        req.token = bearerHeader;
        jwt.verify(req.token, 'my_secrect_kkey', function (err, data) {
            if (err) {
                res.sendStatus(403)
            }
        })
        next();
    } else {
        res.sendStatus(403);
    }
}

// exports.protect = (req, res) =>{
//     jwt.verify(req.token, 'my_secrect_kkey', function(err, data){
//         if(err){
//             res.sendStatus(403)
//         }else{
//             res.json({
//                 text:'this is my name',
//                 data:data
//             })
//         }
//     })
// }