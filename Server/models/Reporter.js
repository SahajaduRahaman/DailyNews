const mongoose = require("mongoose")

const ReporterSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    mobile : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    file : {
        type : String
    },
    about : {
        type : String
    }
})

module.exports = mongoose.model("Reporter", ReporterSchema);