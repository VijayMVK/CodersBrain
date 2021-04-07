var express = require('express');
var bodyParser = require('body-parser');
var cors = require("cors");
var fs = require('fs');

const settings = require("./db_setup/db-config");

var app = express();
app.use(cors());
var router = express.Router();
//-->following two line needed for POST/PUT etc.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get('/', function (req, res) {
   res.json({ msg: "Use '/api/getOperators' to fetch all operators" });
});

router.get('/api/getOperators', function (req, res) {
   fs.readFile(__dirname + "/" + "operators.json", 'utf8', function (err, data) {
      res.end(data);
   });
});

router.get('/api/getInputs', function (req, res) {
   fs.readFile(__dirname + "/" + "inputs.json", 'utf8', function (err, data) {
      res.end(data);
   });
});

router.post('/api/getResult', function (req, res) {
   try {
      if (req && req.body[Object.keys(req.body)[0]]) {
         const result = eval(req.body[Object.keys(req.body)[0]]);
         res.json({ result: result, color: 'lightgreen' });
      } else {
         throw new Error("Input not valid");
      }
   }
   catch (e) {
      res.status(500).json({ msg: e.message });
   }
});

app.use('/', router);

app.listen(settings.webPort, function () {
   console.log("Started listening at: " + settings.webPort);
})
