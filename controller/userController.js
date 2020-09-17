const userModel = require('../model/userModel');

module.exports.sign_up = function(req, res) {
    let newUser = new userModel({
        account : 'thanh tinh02',
        password : 'thanhtinh0312',
        passwordConfirm : 'thanhtinh0312'
    });
    userModel.findOne({account : newUser.account}, function(err, docs) {
        if(docs) {
            return res.json({
                notification : 'account was created, please choose another account'
            });
        }
        else {
            newUser.save(function(err) {
                if(err) {
                    return res.json(err.message);
                }
                else{
                    // console.log('created success');
                    // res.json(newUser);
                    return res.json({
                        notification : 'created success',
                        newUser
                    })
                }
            })
        }
    })
    
}

module.exports.log_in = function(req, res) {
    let acc = 'thanh tinh';
    let pass = 'thanhtinh03121';
    userModel.findOne({account : acc}, function(err, docs) {
        //console.log(docs);
        if(docs) {
            if(docs.password === pass){
                return res.json({
                    notification : 'log in success',
                    account : docs.account
                });
            }
            else{
                return res.json({
                    notification : 'password is not correct'
                })
            }
        }
        else {
            return res.json({
                notification : 'account wasn`t created'
            })
        }
    })
}