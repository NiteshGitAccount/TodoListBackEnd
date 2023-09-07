const mongoose = require('mongoose')



const listSchema= new mongoose.Schema({
    listName : String
});
const List = new mongoose.model('list',listSchema);

module.exports = List;
