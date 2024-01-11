const express = require("express")
const News = require("../models/News")
const router = express.Router()

router.get("/", async (req, res) => {
    try {
        const news = await News.find({})

        res.status(200).json({
            status : "success",
            message : "All news fetched successfully.",
            news : news
        })
    }
    catch (error) {
        res.status(500).send("Internal server error.")
    }
})

module.exports = router;