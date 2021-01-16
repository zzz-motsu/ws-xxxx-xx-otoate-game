var mongoose = require('mongoose');
// var constants = require('./lib/constants');

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useFindAndModify: false
});

// mongoose.connect('mongodb://localhost/otoate', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('connect!!!')
});

const Schema = mongoose.Schema;

// スキーマ
const scoreSchema = new Schema({
  name: String,
  score: Number
});

const Score = mongoose.model('Score', scoreSchema)

module.exports = {
  db,
  Score
}
