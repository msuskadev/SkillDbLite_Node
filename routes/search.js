

var dao  = require("../dao/search");
var server = require("express");

var router = server.Router();

router.get("/searchBySkill/:query", function(req,res,next){

 var params = {
   query:req.params.query,
   offset:req.query.offset,
   limit: req.query.limit
 }

 return dao.searchBySkill(params).then(function(result){
   res.status(200).send({result:result});
 },function(err){
   err.message = "mongo error";
   next(err);
 });
});


router.get("/searchByName/:query", function(req,res,next){

 var params = {
   query:req.params.query,
   offset:req.query.offset,
   limit: req.query.limit
 }

 return dao.searchByName(params).then(function(result){
   res.status(200).send({result:result});
 },function(err){
   err.message = "mongo error";
   next(err);
 });
});

router.get("/searchSkill/:query",function(req,res,next){

 var params = {
   query:req.params.query,
   limit: req.query.limit
 }

return dao.searchSkill(params).then(function(result){
  res.status(200).send({result:result});
},function(err){
  err.message = "mongo error";
  next(err);
});
});

module.exports = router
