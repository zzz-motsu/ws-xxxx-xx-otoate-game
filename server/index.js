const express = require('express');
const bodyParser = require('body-parser');

const app = express()
const { Score } = require('./models')


const port = 3000

const scoresPath = '/scores'

// CORSを許可する
app.use(function(_req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/', function (_req, res) {
  res.send(`
    <h1>Otoate API</h1>
    <table>
      <thead>
        <tr>
          <th>Path</th>
          <th>Method</th>
          <th>Reponse Type</th>
          <th>Memo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>/</td>
          <td>GET</td>
          <td>HTML</td>
          <td>top page</td>
        </tr>
        <tr>
          <td>/scores</td>
          <td>GET</td>
          <td>JSON</td>
          <td>get score list</td>
        </tr>
        <tr>
          <td>/scores</td>
          <td>POST</td>
          <td>JSON</td>
          <td>create score</td>
        </tr>
      </tbody>
    </table>
  `)
})

app.get(scoresPath, function (_req, res) {
  Score.find({}).sort({ score: - 1 }).exec(function (err, result) {
    if (err) {
      throw err
    }
    res.json(result)
  })
})

app.post(scoresPath, function (req, res) {
  const score = new Score(req.body)
  score.save(function (err) {
    if (err) {
      throw err
    }
    res.status(201).json(score)
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
