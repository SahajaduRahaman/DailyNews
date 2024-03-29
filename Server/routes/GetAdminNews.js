const express = require("express")
const FetchUser = require("../middleware/FetchUser")
const News = require("../models/News")

const router = express.Router()

router.get("/", FetchUser, async (req, res) => {

    try {
        const Id = req.reporter.id

        const data = await News.find({reporterId : Id})

        res.status(200).json({
            status : "success",
            message : "News fetched successfully.",
            news : data
        })
    }
    catch (error) {
        res.status(500).send("Internal server error.")
    }

})

module.exports = router;