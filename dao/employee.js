

var employee = require("../models/employee");

 module.exports = {

 updateEmployee:function(params) {
   return employee.update({"_id":params.body.id},params.body,{upsert:true}).exec();
 }

 }
