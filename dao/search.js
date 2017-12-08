



var employee = require("../models/employee");
var skill = require("../models/skill");
 module.exports = {

   searchByName:function (params) {
       return employee.find({"name":{$regex:params.query,$options:"i"}}).skip(parseInt(params.offset)).limit(parseInt(params.limit)).exec();
   },

 searchBySkill:function (params) {
     return employee.find({"skills":{$elemMatch:{name:params.skill}}}).skip(parseInt(params.offset)).limit(parseInt(params.limit)).exec();
 },

 searchSkill:function(params) {
   return skill.find({"name":{$regex:params.query,$options:"i"}}).limit(parseInt(params.limit)).exec();
 }

 }
