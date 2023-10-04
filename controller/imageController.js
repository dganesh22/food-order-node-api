const { StatusCodes } = require("http-status-codes")
const cloudinary = require('cloudinary')
const fs = require('fs')

// delete temp files
const delTemp = (path) => {
    fs.unlinkSync(path)
}

//settings
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})


// food image
const imageUpload = async (req,res) => {
    try {
        if(!req.files || Object.keys(req.files).length === 0) 
            return res.status(StatusCodes.NOT_FOUND).json({ msg: "No files were found"})

          const img = req.files.foodImg

          // validating size
          if(img.size > 1 * 1024 * 1024) {
            delTemp(img.tempFilePath)
            return res.status(StatusCodes.FORBIDDEN).json({ msg: `File size must be less than 1Mb`})
          }

          // validate file type
          if(img.mimetype !== "image/png" && img.mimetype !== "image/jpg" && img.mimetype !== "image/jpeg") {
             delTemp(img.tempFilePath)
             return res.status(StatusCodes.CONFLICT).json({ msg: `Only upload jpg and png format images`})
          }

          // upload logic
          await cloudinary.v2.uploader.upload(img.tempFilePath, { folder: "food" }, (err,result) => {
                if(err)
                    return res.status(StatusCodes.CONFLICT).json({ msg: err.message })
                delTemp(img.tempFilePath)
                return res.status(StatusCodes.OK).json({ output: result })
          })
             
        // res.json({data: req.files })
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Food image uploaded", msg: err.message })
    }
}

const imageDelete = async (req,res) => {
    try {
        const { public_id } = req.body
        
        if(!public_id) 
            return res.status(StatusCodes.NOT_FOUND).json({ msg: `Requested image id not found`})

        await cloudinary.v2.uploader.destroy(public_id, (err,result) => {
                if(err)
                    return res.status(StatusCodes.CONFLICT).json({ msg: err.message })

                res.status(StatusCodes.OK).json({ msg: `Food image successfully deleted`})
        })
        
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}


// profile image
const profileImgUpload = async (req,res) => {
    try {
        if(!req.files || Object.keys(req.files).length === 0) 
            return res.status(StatusCodes.NOT_FOUND).json({ msg: "No files were found"})

          const img = req.files.profileImg

          // validating size
          if(img.size > 1 * 1024 * 1024) {
            delTemp(img.tempFilePath)
            return res.status(StatusCodes.FORBIDDEN).json({ msg: `File size must be less than 1Mb`})
          }

          // validate file type
          if(img.mimetype !== "image/png" && img.mimetype !== "image/jpg" && img.mimetype !== "image/jpeg") {
             delTemp(img.tempFilePath)
             return res.status(StatusCodes.CONFLICT).json({ msg: `Only upload jpg and png format images`})
          }

          // upload logic
          await cloudinary.v2.uploader.upload(img.tempFilePath, { folder: "profile" }, (err,result) => {
                if(err)
                    return res.status(StatusCodes.CONFLICT).json({ msg: err.message })
                delTemp(img.tempFilePath)
                return res.status(StatusCodes.OK).json({ msg: "Profile image uploaded", output: result })
          })
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

const profileImgDelete = async (req,res) => {
    try {
        const { public_id } = req.body
        
        if(!public_id) 
            return res.status(StatusCodes.NOT_FOUND).json({ msg: `Requested image id not found`})

        await cloudinary.v2.uploader.destroy(public_id, (err,result) => {
                if(err)
                    return res.status(StatusCodes.CONFLICT).json({ msg: err.message })

                res.status(StatusCodes.OK).json({ msg: `Profile image successfully deleted`})
        })
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

module.exports = { imageUpload, imageDelete, profileImgDelete, profileImgUpload}