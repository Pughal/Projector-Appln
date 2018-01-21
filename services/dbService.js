var MongoClient = require('mongodb').MongoClient;

exports.createConnection =function(){
  MongoClient.connect("mongodb://PR10:pughal@ds039195.mlab.com:39195/projector7").then(function(client){
    console.log("Connected to mongoDb");
    exports.database = client.db("projector7");

  });
}
