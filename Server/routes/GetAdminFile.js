const express = require("express")
const Reporter = require("../models/Reporter")

const router = express.Router()

router.get("/:id", async (req, res) => {

    try {
        const reporter = await Reporter.findById(req.params.id)
        let secure_url = ""

        if (reporter.file.secure_url) {
            secure_url = reporter.file.secure_url
        }

        res.status(200).json({
            status : "success",
            message : "Reporter fetched successfully.",
            secure_url : secure_url
        })
    }

    catch (error) {
        req.status(500).send("Internel server error.")
    }
})

module.exports = router;