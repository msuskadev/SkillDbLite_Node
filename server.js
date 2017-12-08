let mongoose = require('mongoose');

mongoose.connect('mongodb://skilldblite:Moje1234@cluster0-shard-00-00-kktqv.mongodb.net:27017,cluster0-shard-00-01-kktqv.mongodb.net:27017,cluster0-shard-00-02-kktqv.mongodb.net:27017/SkillDB?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin', {
    useMongoClient: true
  });

  mongoose.connection.on('connected',function(){
    console.log("successfully connected ");
  });

  mongoose.connection.on('error',function(){
    console.log("error during establishing mongo connection to "+processArgs[2]);
  });

var cors = require('cors');
var bodyparser = require('body-parser');
var app = require('express')();
var temp = require('./dao/skills');

app.use(cors());
app.use(bodyparser.json());

var searchRouter = require('./routes/search');
var projectRouter = require('./routes/project');
var employeeRouter = require('./routes/employee');

app.use("/api/v1",searchRouter);
app.use("/api/v1",projectRouter);
app.use("/api/v1",employeeRouter);

function errorHandler (err, req, res, next) {
  if (err) {
    res.status(500).send({err:err});
  }
}
app.use(errorHandler);

app.listen(3000, function() {
  console.log('Example app listening on port 3000! Let\'s see');
});
