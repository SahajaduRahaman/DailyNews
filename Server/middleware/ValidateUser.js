const ValidateUser = (req, res, next) => {
    const {name, email, mobile, password} = req.body

    if (!name || !email || !mobile || !password) {
        return res.status(400).json({
            message : "Please provide all fields."
        })
    }

    if (name.length < 6 || name.length > 20) {
        return res.status(400).json({
            message : "Name must be greater than six character or less than tweenty character."
        })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return res.status(400).json({
            message : "Please provide correct email."
        })
    }

    const mobileRegex = /^[0-9]{10}$/;

    if (!mobileRegex.test(mobile)) {
        return res.status(400).json({
            message : "Please provide correct mobile."
        })
    }

    if (password.length < 5 || password.length > 15) {
        return res.status(400).json({
            message : "Enter valid password."
        })
    }

    next()
}

module.exports = ValidateUser;

