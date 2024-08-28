const mongoose=require('mongoose')

//schema
const userSchema=new mongoose.Schema({
    userName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      Accountnumber:{
        type:String,
        required:true,
      },
       role: {
        type: String,
        default: "user",
      },
})
//model

const users = mongoose.model("users",userSchema);
module.exports = users;
