var mongoose = require('mongoose');

var ItemsSchema = new mongoose.Schema({
  name: String,
  image: String,
  detail: String,
  category: [{type:mongoose.Schema.Types.ObjectId,ref:'categories'}]
  
});

module.exports = mongoose.model('beverages', ItemsSchema);