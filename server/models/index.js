const mongoose = require('mongoose');

const dbName = 'otoate'
const url = 'mongodb://localhost/' + dbName

mongoose.connect(url , {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('coneccted ' + url)
});

const scoreSchema = new mongoose.Schema({
  name: String,
  score: Number
}, { timestamps: true });

const Score = mongoose.model('Score', scoreSchema);

module.exports = {
  db,
  Score
}
