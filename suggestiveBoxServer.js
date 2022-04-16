const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "";
const client = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  console.log("Connected to database")
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

router.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.use('/', router);

app.listen(process.env.port || 3000);
console.log('Running on Port 3000');