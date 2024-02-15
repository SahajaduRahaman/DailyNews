const express = require("express")
const News = require("../models/News")
const FetchUser = require("../middleware/FetchUser")
const ValidateNews = require("../middleware/ValidateNews")
const upload = require("../Storage")
const router = express.Router();


router.post("/", FetchUser, upload.single("file"), ValidateNews, async (req, res) => {
    const { title, description, category, youtubeLink, facebookLink, date } = req.body;
    
    try {
        let currentNews = await News({
            reporterId : req.reporter.id,
            reporterName : req.reporter.name,
            file : `${process.env.ImageUrl}/Images/${req.file.filename}`,
            title : title,
            description : description,
            category : category,
            youtubeLink : youtubeLink,
            facebookLink : facebookLink,
            date : date
        })

        currentNews.save();

        res.status(200).json({
            status : "success",
            message : "News uploaded successfully.",
            currentNews : currentNews
        })
    }
    catch (error) {
        res.status(500).send({
            status: "Internal server error.",
            message: "Internal server error."
        })
    }

})

module.exports = router;