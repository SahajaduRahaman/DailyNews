const ValidateNews = (req, res, next) => {
    const {title, description, category} = req.body

    if (!title || !description || !category) {
        return res.status(400).json({
            message : "Please provide all fields."
        })
    }

    if (title.length < 10) {
        return res.status(400).json({
            message : "title must be greater than 10 character."
        })
    }

    if (description.length < 50) {
        return res.status(400).json({
            message : "description must be greater than 100 character."
        })
    }

    next();
}

module.exports = ValidateNews;