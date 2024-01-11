const express = require("express")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const ValidateLogin = require("../middleware/ValidateLogin")
const Reporter = require("../models/Reporter")

const router = express.Router()

const secretKey = process.env.secretKey;

router.post("/", ValidateLogin, async (req, res) => {
    const {email, password} = req.body

    try {
        let reporter = await Reporter.findOne({email})

        if (!reporter) {
            return res.status(400).json({
                message : "Please provide valid credentials."
            })
        }

        const comparePassword = await bcrypt.compare(password, reporter.password)

        if (!comparePassword) {
            return res.status(400).json({
                message : "Please provide valid credentials."
            })
        }

        const data = {
            reporter : {
                id : reporter.id
            }
        }

        const authToken = jwt.sign(data, secretKey)

        res.status(200).json({
            status : "success",
            message : "Logged in successfully.",
            authToken : authToken
        })

    }
    catch (error) {
        res.status(500).send("Internel server error.")
    }    
})

module.exports = router

