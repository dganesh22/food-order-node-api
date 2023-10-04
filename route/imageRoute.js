const imageRoute = require('express').Router()
const { profileImgDelete, profileImgUpload, imageUpload,imageDelete } = require('../controller/imageController')


imageRoute.post(`/food/upload`, imageUpload) /* food image upload */
imageRoute.post(`/food/delete/:id`, imageDelete) /* food image delete */


imageRoute.post(`/profile/upload`, profileImgUpload) /* profile image upload */
imageRoute.post(`/profile/delete/:id`, profileImgDelete) /* profile image delete */

module.exports = imageRoute

