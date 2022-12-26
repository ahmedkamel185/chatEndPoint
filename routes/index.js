const express = require('express');
const router = express.Router();
const User = require(`../modules/user`)
const {getAllUsers,addNewUser,updateUser} = require('../controllers/userController')
const {getAllChats,addNewChat} = require('../controllers/chatController')


router.route('/users').get(getAllUsers)
router.route('/addUser').post(addNewUser)
router.route('/updateUser/:id').patch(updateUser)
router.route('/addChat').post(addNewChat)
router.route('/chats').get(getAllChats)



module.exports = router;