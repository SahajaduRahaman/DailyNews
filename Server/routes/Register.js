const express = require("express")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const Reporter = require("../models/Reporter")
const ValidateUser = require("../middleware/ValidateUser")

const router = express.Router()
const secretKey = process.env.secretKey;

router.post("/", ValidateUser, async (req, res) => {
    const {name, email, mobile, password} = req.body

    try {
        let reporter = await Reporter.findOne({email});

        if (reporter) {
            return res.status(400).json({
                message : "Email already registered."
            })
        }

        reporter = await Reporter.findOne({mobile});

        if (reporter) {
            return res.status(400).json({
                message : "Mobile already registered."
            })
        }

        const salt = await bcrypt.genSalt(10)
        const secPassword = await bcrypt.hash(password, salt)

        reporter = await Reporter({
            name : name,
            email : email,
            mobile : mobile,
            password : secPassword
        })

        reporter.save();

        const data = {
            reporter : {
                id : reporter.id,
                name : reporter.name
            }
        }

        const authToken = jwt.sign(data, secretKey)

        res.status(200).json({
            status : "success",
            message : "Reporter registered successfully.",
            authToken : authToken
        })
    }

    catch (error) {
        res.status(500).json({
            message : "Internal server error."
        })
    }
})

module.exports = router;