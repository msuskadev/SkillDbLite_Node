

var project = require("../models/project");

 module.exports = {

 updateProject:function(params) {
   return project.update({"_id":params.body.id},params.body,{upsert:true}).exec();
 }

 }
