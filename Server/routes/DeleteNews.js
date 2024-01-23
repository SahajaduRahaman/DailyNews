const express = require("express")
const FetchUser = require("../middleware/FetchUser")
const News = require("../models/News")

const router = express.Router();

router.delete("/:id", FetchUser, async (req, res) => {
    const reporterID = req.reporter.id

    try {
        let news = await News.findById(req.params.id)

        if (!news) {
            return res.status(404).send("News not found.")
        }

        if (news.reporter.toString() !== reporterID) {
            return res.status(401).send("User not allowed.")
        }

        news = await News.findByIdAndDelete(req.params.id)

        res.status(200).json({
            status : "success",
            message : "News deleted successfully."
        })
    }
    catch (error) {
        res.status(500).send("Internel server error.")
    }
})

module.exports = router;