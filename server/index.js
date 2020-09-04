const express = require('express')
const app = express()

const port = 3000

app.get('/', function (req, res) {
  res.json({ message: 'ok' })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
