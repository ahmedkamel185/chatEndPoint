const { response } = require('../../server')
const Chat = require(`../../modules/chat`)

exports.getAllChats = async (req, res, next) => {

    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)

    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    const chats = await Chat.find()

    const results = {}

    if (endIndex < chats.length) {

        results.next = {

            page: page + 1,
            limit: limit,

        }
    }

    if (startIndex > 0) {

        results.previous = {

            page: page - 1,
            limit: limit,

        }
    }

    results.chats = chats.slice(startIndex, endIndex)


    res.status(200).json({

        success: true,
        message: "Get all chats",
        results
    })
}


exports.addNewChat = async (req, res, next) => {


    const chat = new Chat({

        firstName: req.body.firstName,
        lastName: req.body.lastName,
        rollNo: req.body.rollNo,
        classNo: req.body.classNo,
        emailAddress: req.body.emailAddress,
        password: req.body.password,
        profileImage: req.body.profileImage,
        enabled: req.body.enabled,
        chatId: req.body.chatId,



    })

    await chat.save()

    res.status(200).json({

        success: true,
        message: "Added a new user",
        chat
    })
}




