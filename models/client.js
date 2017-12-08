let mongoose = require('mongoose');

let schema = new mongoose.Schema({    
    name: {type: 'string', required: true},
    language: {type: 'string'}
});

module.exports = mongoose.model('Client', schema);
