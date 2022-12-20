const express = require('express');
const router = express.Router();
const User = require(`../modules/user`)
const {getAllUsers,addNewUser,updateUser} = require('../controllers/userController')

router.route('/users').get(getAllUsers)
router.route('/addUser').post(addNewUser)
router.route('/updateUser/:id').patch(updateUser)


module.exports = router;