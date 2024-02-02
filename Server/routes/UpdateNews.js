const express = require("express")
const FetchUser = require("../middleware/FetchUser")
const News = require("../models/News")

const router = express.Router()

router.put("/:id", FetchUser, async (req, res) => {
    const { title, description, category, youtubeLink, facebookLink } = req.body

    const currentNews = {}

    if ( title ) {
        currentNews.title = title
    }

    if ( description ) {
        currentNews.description = description
    }

    if ( category ) {
        currentNews.category = category
    }

    if ( youtubeLink ) {
        currentNews.youtubeLink = youtubeLink
    }

    if ( facebookLink ) {
        currentNews.facebookLink = facebookLink
    }

    try {
        let updatedNews = await News.findById(req.params.id)

        if (!updatedNews) {
            return res.status(404).send("Item not found.")
        }

        if (updatedNews.reporter.toString() !== req.reporter.id) {
            return res.status(401).send("User not allowed to update.")
        }

        updatedNews = await News.findByIdAndUpdate(req.params.id, currentNews)

        res.status(200).json({
            status : "success",
            message : "News updated successfully.",
            news : updatedNews
        })
    }
    catch (error) {
        res.status(500).send("Internal server error.")
    }

})

module.exports = router;