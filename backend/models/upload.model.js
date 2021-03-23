var mongoose = require('mongoose');


const fileSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique:true
    },
    path:{},
    filename:{}
});

module.exports =  mongoose.model("file",fileSchema);