const User = require('../../../models/user');
const jwt = require('jsonwebtoken');

//controller action to create user
module.exports.create = async function (req, res) {
    //if password do not match with confirm password
    if (req.body.password != req.body.confirm_password) {
        return res.status(401).json({
            message: 'Password and Confirm Password Do Not Match'
        });
    }
    //try to find user with the email in database 
    let user = await User.findOne({ email: req.body.email });
    //if user not found with given email then create the user
    if (!user) {
        let createdUser = await User.create(req.body)
        return res.status(200).json({
            message: 'User Created Successfully !',
            createdUser: {createdUser}
            });
        }else {
            // if user with given email find in database 
            return res.status(401).json({
                message: 'User Already Exist, Try With Another Details'
        });
    }
}

module.exports.create_session = async function (req, res) {
    try{
        let user = await User.findOne({email:req.body.email});
        if(!user|| user.password!=req.body.password){
            return res.json(422,{
                message:'Invalid Username and Password'
            });
        }
        return res.json(200,{
            message:'Sign in Successfully, here is your token, please keep it secret',
            data:{
                token:jwt.sign(user.toJSON(),'tasks',{expiresIn:'100000'})
            }
        })
    }catch(err){
        return res.json(500,{
            message:'Internal Server Error'
        });
    }
}