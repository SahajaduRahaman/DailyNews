const mongoose = require("mongoose")

const NewsSchema = new mongoose.Schema({
    reporter : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Reporter",
        required : true
    },
    // reporterName: {
    //     type: String,
    // },
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

// NewsSchema.pre('save', async function (next) {
//     try {
//         const reporter = await mongoose.model('Reporter').findById(this.reporter);
//         this.reporterName = reporter.name;
//         next();
//     } 
//     catch (error) {
//         next(error);
//     }
// });

module.exports = mongoose.model("News", NewsSchema);