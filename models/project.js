let mongoose = require('mongoose');

let schema = new mongoose.Schema({    
    name: {type: 'string', required: true},
    manager: {type: 'string', required: true},
    client: {type: 'string', required: true},
    skills: [String], 
    teamMembers: [String]
});

module.exports = mongoose.model('Project', schema);
