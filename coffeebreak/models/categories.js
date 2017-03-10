var mongoose = require('mongoose');

var BeveragesSchema = new mongoose.Schema({
  name: String,
  image: String,
  beverages: [{type:mongoose.Schema.Types.ObjectId,ref:'beverages'}]
});

module.exports = mongoose.model('categories', BeveragesSchema);