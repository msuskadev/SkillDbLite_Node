let mongoose = require('mongoose');

let schema = new mongoose.Schema({    
    name: {type: 'string', required: true}
});

module.exports = mongoose.model('Skill', schema);
