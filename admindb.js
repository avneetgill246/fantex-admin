require('./connect')
const mongoose=require('mongoose')
var Schema = mongoose.Schema;


var fantexSchema=new Schema({
  
    id :{type :Number}
})
var FantexAdmin = mongoose.model("fantex",fantexSchema,collection="fantex");



module.exports={FantexAdmin}