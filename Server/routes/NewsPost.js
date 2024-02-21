const express = require("express")
const News = require("../models/News")
const FetchUser = require("../middleware/FetchUser")
const ValidateNews = require("../middleware/ValidateNews")
const upload = require("../Storage")
const router = express.Router();
const fs = require('fs');
const cloudinary = require("../cloudinary")


router.post("/", FetchUser, upload.single("file"), ValidateNews, async (req, res) => {
    const { title, description, category, youtubeLink, facebookLink, date } = req.body;
    const file = req.file
    
    try {
        let result = await cloudinary.uploader.upload(file.path, {
            upload_preset: "daily-news"
        })
        if (result) {
            let currentNews = await News({
                reporterId : req.reporter.id,
                reporterName : req.reporter.name,
                file : result,
                title : title,
                description : description,
                category : category,
                youtubeLink : youtubeLink,
                facebookLink : facebookLink,
                date : date
            })

            let data = await currentNews.save();

            const filePath = `${data.file.original_filename}.${data.file.format}`;

            fs.unlink(`public/Files/${filePath}`, (err) => {
                if (err) {
                console.error(err);
                }
            });

            res.status(200).json({
                status : "success",
                message : "News uploaded successfully.",
                currentNews : data
            })
        }
    }
    catch (error) {
        res.status(500).send({
            status: "Internal server error.",
            message: "Internal server error."
        })
    }

})

module.exports = router;