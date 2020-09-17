const foodModel = require('../model/foodModel');

module.exports.getAll = function(req, res) {
    foodModel.find((function(err, docs) {
        if(err) {
            return res.json(err);
        }
        // var docsName = [];
        // docs.forEach(food => {
        //     docsName.push(food.name);
        // })
        res.json({
            docs
        })
    }))
}

module.exports.getById = function(req, res) {
    foodModel.findOne({id : 2}, function(err, docs) {
        if(err) { 
            return res.json('id is not exist');
        }
        res.json({
            name : docs.name,
            description : docs.description,
            ingredients : docs.ingredients,
            cooking_steps : docs.cooking_steps,
            ration : docs.ration,
            likes : docs.likes
        })
    })
}

module.exports.searchByName = function(req, res) {
    var q = req.query.q;
    foodModel.find(function(err, docs) {
        if(err) {
            return res.json(err);
        }
        var matchedFood = docs.filter(function(food) {
            return food.name.indexOf(q) !== -1;
        });
        matchedFood.sort(function(food1, food2) {
            return food2.likes - food1.likes;
        });
        res.json({
            matchedFood
        })
    })

}