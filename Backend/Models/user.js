const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{type:String,require:true,minlength:3, maxlength: 30},
    email:{     
        type:String,
        required:true,
        minlength:3,
        maxLength:200,
        unique:true
    },
    password:{     
        type:String,
        required:true,
        minlength:3,
        maxLength:1024,
    },

})

const User = mongoose.model("blog-app", userSchema)
exports.User = User;