const express = require("express")
const FetchUser = require("../middleware/FetchUser")
const Reporter = require("../models/Reporter")
const upload = require("../Storage")
const fs = require('fs');
const cloudinary = require("../cloudinary")

const router = express.Router()

router.put("/", FetchUser, upload.single("file"), async (req, res) => {
    const { name, email, mobile, about } = req.body
    const file = req.file

    try {
        let currentAdmin = await Reporter.findById(req.reporter.id)

        if (!currentAdmin) {
            return res.status(404).send("User not found.")
        }

        const updateAdmin = {}

        if ( file ) {
            if (currentAdmin.file !== "") {
                const cloudinaryFilePath = currentAdmin.file.public_id

                if (cloudinaryFilePath) {
                    cloudinary.uploader.destroy(cloudinaryFilePath)
                }
            }

            let result = await cloudinary.uploader.upload(file.path, {
                upload_preset: "daily-news-admin",
                transformation: [
                    {gravity: "face", height: 300, width: 300, crop: "fill"},
                    {fetch_format: "png"},
                    {radius: "max"}
                ]
            })

            updateAdmin.file = result

            const filePath = `${updateAdmin.file.original_filename}.${updateAdmin.file.format}`

            fs.unlink(`public/Files/${filePath}`, (err) => {
                if (err) {
                  console.error(err);
                }
            });
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

        let data = await Reporter.findByIdAndUpdate(req.reporter.id, updateAdmin)

        res.status(200).json({
            status : "success",
            message : "News updated successfully.",
            reporter : data
        })
    }
    catch (error) {
        res.status(500).send("Internal server error.")
    }

})

module.exports = router;