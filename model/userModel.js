const mongoose = require('mongoose');

const url = 'mongodb+srv://lvl162:1622000@cluster0.gabg8.gcp.mongodb.net/CookyCooky?retryWrites=true&w=majority';

const database = mongoose.connection;

mongoose.connect(url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(function() {
    console.log('connected');
});  

const userSchema =  mongoose.Schema({
    account : { type : String },
    password : { type : String},
    passwordConfirm : { type : String}
})

userSchema.pre('save', function(next) {
    if(this.password !== this.passwordConfirm){
        const err = new Error('the password confirm was wrong !');
        //console.log('the password confirm was wrong !');
        next(err);
    }
    next();
})

const userModel = mongoose.model('users', userSchema);
module.exports = userModel;