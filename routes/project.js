

var dao  = require("../dao/project");
var server = require("express");

var router = server.Router();

router.post("/project", function(req,res,next){

 var params = {
   body:req.body
 };

 return dao.updateProject(params).then(function(result){
   res.sendStatus(200);
 },function(err){
   err.message = "mongo error";
   next(err);
 });
});

module.exports = router
