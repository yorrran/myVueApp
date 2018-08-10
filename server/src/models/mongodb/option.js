const mongoose = require('mongoose');

const optionSchema = mongoose.Schema({
    option: [{
        label: String,
        value: String
    }],
},
    {
        versionKey: false
});

module.exports = mongoose.model('option', optionSchema);