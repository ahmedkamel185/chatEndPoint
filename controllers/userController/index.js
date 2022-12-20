const { response } = require('../../server')
const User = require(`../../modules/user`)

exports.getAllUsers = async (req, res, next) => {

    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)

    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    const users = await User.find()

    const results = {}

    if (endIndex < users.length) {

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

    results.users = users.slice(startIndex, endIndex)


    res.status(200).json({

        success: true,
        message: "Get all users",
        results
    })
}


exports.addNewUser = async (req, res, next) => {


    const user = new User({

        firstName: req.body.firstName,
        lastName: req.body.lastName,
        rollNo: req.body.rollNo,
        classNo: req.body.classNo,
        emailAddress: req.body.emailAddress,
        password: req.body.password,
        profileImage: req.body.profileImage,



    })

    await user.save()

    res.status(200).json({

        success: true,
        message: "Added a new user",
        user
    })
}


// Update a user by his Id
exports.updateUser = async (req, res, next) => {

    const id = req.params.id

    User.countDocuments({ _id: id }, function (err, count) {
        if (count > 0) {
            //document exists });
            User.updateOne({ _id: id }, { $set: { firstName: req.body.firstName } }).exec().then(result => {

                User.findById(id).exec().then(result => {

                    res.status(200).json({

                        success: true,
                        message: "Update a new user",
                        result

                    })


                })


            })

        } else {

            res.status(400).json({

                success: false,
                message: "Failed to update a user",
               

            })
        }
    });


}