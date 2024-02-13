const express = require("express")
const FetchUser = require("../middleware/FetchUser")
const Reporter = require("../models/Reporter")
const upload = require("../Storage")
const path = require("path")
const fs = require('fs');

const router = express.Router()

router.put("/", FetchUser, upload.single("file"), async (req, res) => {
    const { name, email, mobile, about } = req.body

    const updateAdmin = {}

    if ( req.file ) {
        updateAdmin.file = `${process.env.ImageUrl}/Images/${req.file.filename}`
    }

    if ( name ) {
        updateAdmin.name = name
    }

    if ( email ) {
        updateAdmin.email = email
    }

    if ( mobile ) {
        updateAdmin.mobile = mobile
    }

    if ( about ) {
        updateAdmin.about = about
    }

    try {
        let currentAdmin = await Reporter.findById(req.reporter.id)

        if (!currentAdmin) {
            return res.status(404).send("Item not found.")
        }

        const imagePath = path.basename(currentAdmin.file);

        fs.unlink(`public/Images/${imagePath}`, (err) => {
            if (err) {
              console.error(err);
            }
        });

        currentAdmin = await Reporter.findByIdAndUpdate(req.reporter.id, currentNews)

        res.status(200).json({
            status : "success",
            message : "News updated successfully.",
            news : currentAdmin
        })
    }
    catch (error) {
        res.status(500).send("Internal server error.")
    }

})

module.exports = router;