const mongoose = require('mongoose');
const database = mongoose.connection;
let url = 'mongodb+srv://lvl162:1622000@cluster0.gabg8.gcp.mongodb.net/CookyCooky?retryWrites=true&w=majority';
mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => console.log("Sucessfully connected!!"));

const foodSchema = mongoose.Schema({
    id :  {type : Number},
    name : {type : String},
    description : {type : String},
    ingredient : {type : Object},
    cooking_steps : {type : Array},
    image : {type : String},
    ration : {type : String},
    likes : {type : Number}
})

const foodModel = mongoose.model('recipes', foodSchema);

module.exports = foodModel;