const jwtToken = require("jsonwebtoken")

const secretKey = process.env.secretKey;

const FetchUser = (req, res, next) => {
    const authToken = req.header("authToken")

    if (!authToken) {
        return res.status(401).json({
            message : "Please provide valid authToken."
        })
    }

    try {
        const data = jwtToken.verify(authToken, secretKey)

        req.reporter = data.reporter;

        next();
    } 
    catch (error) {
        return res.status(401).json({
            message : "Please provide valid authToken.",
            error : error
        })
    }

}

module.exports = FetchUser;