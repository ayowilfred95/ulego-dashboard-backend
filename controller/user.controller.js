const UserModel = require('../model/user.model');

exports.loginUser = (req, res)=>{
    const userReqData = new UserModel(req.body)
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({
            sucess: false,
            message:"please input all fields"
        })
    }
    else{
        UserModel.LoginUser(userReqData, (user, err)=>{
            if(err){
                res.send(err)
            }else{
                res.send({
                        message: "Login successful",
                        data: user.data
                })
            }
        })
    }
};