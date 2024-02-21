const express = require("express")
const FetchUser = require("../middleware/FetchUser")
const News = require("../models/News")
const upload = require("../Storage")
const fs = require('fs');
const cloudinary = require("../cloudinary")

const router = express.Router()

router.put("/:id", FetchUser, upload.single("file"), async (req, res) => {
    const { title, description, category, youtubeLink, facebookLink } = req.body
    const file = req.file

    try {
        let currentNews = await News.findById(req.params.id)

        if (!currentNews) {
            return res.status(404).send("Item not found.")
        }

        if (currentNews.reporterId.toString() !== req.reporter.id) {
            return res.status(401).send("User not allowed to update.")
        }

        const updatedNews = {}

        if ( file ) {
            const cloudinaryFilePath = currentNews.file.public_id

            if (cloudinaryFilePath) {
                await cloudinary.uploader.destroy(cloudinaryFilePath)
            }

            let result = await cloudinary.uploader.upload(file.path, {
                upload_preset: "daily-news"
            })

            updatedNews.file = result

            const filePath = `${result.file.original_filename}.${result.file.format}`

            fs.unlink(`public/Files/${filePath}`, (err) => {
                if (err) {
                  console.error(err);
                }
            });
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

        let data = await News.findByIdAndUpdate(req.params.id, updatedNews)

        res.status(200).json({
            status : "success",
            message : "News updated successfully.",
            news : data
        })
    }
    catch (error) {
        res.status(500).send("Internal server error.")
    }

})

module.exports = router;