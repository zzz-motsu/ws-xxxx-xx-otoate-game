const express = require('express')
const app = express()
const { db, Score } = require('./models')
const port = 3000

const scoreSchema = models.scoreSchema;

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
  res.send("Received POST Data!");
})

var record = new scoreSchema({
  brand: '醸し人九平次',
  type: 9,
  impressions: [
    { temperature: 7, impression: 'めちゃうま' },
    { temperature: 10, impression: '激うま' }
  ]
});

record.save(function(err) {
  if (err) throw err;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})