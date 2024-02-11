const express = require("express")
const FetchUser = require("../middleware/FetchUser")
const News = require("../models/News")
const upload = require("../Storage")
const path = require("path")
const fs = require('fs');

const router = express.Router()

router.put("/:id", FetchUser, upload.single("file"), async (req, res) => {
    const { title, description, category, youtubeLink, facebookLink } = req.body

    const updatedNews = {}

    if ( req.file ) {
        updatedNews.image = `${process.env.ImageUrl}/Images/${req.file.filename}`
    }

    if ( title ) {
        updatedNews.title = title
    }

    if ( description ) {
        updatedNews.description = description
    }

    if ( category ) {
        updatedNews.category = category
    }

    if ( youtubeLink ) {
        updatedNews.youtubeLink = youtubeLink
    }

    if ( facebookLink ) {
        updatedNews.facebookLink = facebookLink
    }

    try {
        let currentNews = await News.findById(req.params.id)

        if (!currentNews) {
            return res.status(404).send("Item not found.")
        }

        if (currentNews.reporter.toString() !== req.reporter.id) {
            return res.status(401).send("User not allowed to update.")
        }

        const imagePath = path.basename(currentNews.image);

        fs.unlink(`public/Images/${imagePath}`, (err) => {
            if (err) {
              console.error(err);
            }
        });

        currentNews = await News.findByIdAndUpdate(req.params.id, updatedNews)

        res.status(200).json({
            status : "success",
            message : "News updated successfully.",
            news : currentNews
        })
    }
    catch (error) {
        res.status(500).send("Internal server error.")
    }

})

module.exports = router;