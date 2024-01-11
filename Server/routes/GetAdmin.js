const express = require("express")
const FetchUser = require("../middleware/FetchUser")
const Reporter = require("../models/Reporter")

const router = express.Router()

router.post("/", FetchUser, async (req, res) => {

    try {
        const reporterID = req.reporter.id

        const reporter = await Reporter.findById(reporterID)

        res.status(200).json({
            status : "success",
            message : "Reporter fetched successfully.",
            reporter : reporter
        })
    }

    catch (error) {
        req.status(500).send("Internel server error.")
    }
})

module.exports = router;