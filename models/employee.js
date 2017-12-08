let mongoose = require('mongoose');

let skillSchema = new mongoose.Schema({
    name: {type: 'string', required: true},
    isConfirmed: {type: 'boolean'}
});

let schema = new mongoose.Schema({    
    name: {type: 'string', required: true},
    email: {type: 'string', required: true}, 
    skills: [ skillSchema ],
    projectSkills: [ skillSchema ]
});

module.exports = mongoose.model('Employee', schema);
