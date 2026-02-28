const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const now = Date.now()
        const random = Math.floor(Math.random() * 1000+1000)
        const extension = Path2D.extname(file.originalname) 

        const customFileName = `user-${random}-${now}${extension}`
        cb(null, customFileName)      
    }
})

const upload = multer({ storage })

module.exports = upload