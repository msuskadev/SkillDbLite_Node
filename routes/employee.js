
var dao  = require("../dao/employee");
var server = require("express");

var router = server.Router();

router.post("/employee", function(req,res,next){

 var params = {
   body:req.body
 };

 return dao.updateEmployee(params).then(function(result){
   res.sendStatus(200);
 },function(err){
   err.message = "mongo error";
   next(err);
 });
});

module.exports = router
