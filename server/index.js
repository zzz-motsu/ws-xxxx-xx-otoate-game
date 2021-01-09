const express = require('express')
const app = express()
const { db, Score } = require('./models')
const port = 3000
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// CORSを許可する
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/scores', (req, res) => {
  Score.find({}, function(err, result){
    if (err) throw err;
    console.log(result);
    res.json(result)
  });
})

app.post('/scores', (req, res) => {
  console.log(req.body);
  const record = new Score();
  record.name = req.body.name;
  record.score = req.body.score;

  record.save(function(err){
    if(err) throw err;
    res.json({})
  })
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})