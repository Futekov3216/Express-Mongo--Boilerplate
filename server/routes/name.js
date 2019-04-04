const mongoose = require('mongoose');
const errorHandler = require('../utils/errorHandler');
const Name = mongoose.model('Name')

module.exports = app => {
    app.get('/', (req, res) => {
        Name.find({})
            .then(name => {
                res.json({
                    name: name
                });
            })
            .catch(err => console.log(err))
    })

    app.post('/add', (req, res) => {
        let {
            name
        } = req.body;
        
        // Validate Fields
        let errors = [];
        errors = errorHandler(errors,req.body);
        
        // Check for erros
        if(errors.length > 0){
            res.json({
                errors: errors,
            });
        }else{
            Name.create({
                name
            })
            .then(name => {
                res.json({
                    succsses: true
                });
            })
            .catch(err => console.log(err))
        }
    });
}