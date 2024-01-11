const mongoose = require("mongoose")
const env = require("dotenv")

env.config()

const DatabaseUrl = process.env.DatabaseUrl

const connectToDatabase = async () => {
    await mongoose.connect(DatabaseUrl, console.log("Atlas database is connected..."))
}

module.exports = connectToDatabase;