const mongoose = require("mongoose")

const NewsSchema = new mongoose.Schema({
    reporterId : {
        type : String,
        required : true
    },
    reporterName: {
        type: String,
    },
    file : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    },
    youtubeLink : {
        type : String,
    },
    facebookLink : {
        type : String,
    }
})

module.exports = mongoose.model("News", NewsSchema);