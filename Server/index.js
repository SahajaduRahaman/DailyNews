const express = require("express")
const env = require("dotenv")
const cors = require("cors")
const connectToDatabase = require("./database")


const app = express()

connectToDatabase()

env.config()

const PORT = process.env.PORT || 4090

app.use(cors())
app.use(express.json())
app.use(express.static("public"))

app.use("/api/register", require("./routes/Register"))
app.use("/api/login", require("./routes/Login"))
app.use("/api/get-admin", require("./routes/GetAdmin"))
app.use("/api/post-news", require("./routes/NewsPost"))
app.use("/api/get-news-by-id", require("./routes/GetNewsById"))
app.use("/api/get-all-news", require("./routes/GetAllNews"))
app.use("/api/get-admin-news", require("./routes/GetAdminNews"))
app.use("/api/update-admin", require("./routes/UpdateAdmin"))
app.use("/api/update-news", require("./routes/UpdateNews"))
app.use("/api/delete-news", require("./routes/DeleteNews"))


app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}...`);
})