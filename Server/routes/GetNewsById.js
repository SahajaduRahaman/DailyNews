const express = require("express")
const News = require("../models/News")
const router = express.Router()

router.get("/:id", async (req, res) => {
    try {
        const currentNews = await News.findById(req.params.id)

        if (!currentNews) {
            return res.status(404).send("Item not found.")
        }

        res.status(200).json({
            status : "success",
            message : "News got successfully.",
            news : currentNews
        })
    }
    catch (error) {
        res.status(500).send("Internal server error.")
    }


})

module.exports = router;