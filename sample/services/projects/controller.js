const mongoose = require("mongoose");
const projectModel = require("./model/model");
const userModel = require('../user/model/model');
const model = require("./model/model");

class Projects {
    createProject = async (req, res, next) => {
        try {
            let query = {
                email: req.headers.loginUser.email
            }
            let getUsers = await userModel.findOne({ query });

            req.body['user_id'] = getUsers.id;
            console.log('BODY', req.body);

            let projectData = await projectModel.insertMany(req.body);
            console.log('projectData', projectData);
            // console.log('getUsers',getUsers);
            res.status(200).json(projectData);
        }

        catch (error) {
            res.status(400).json(error);
        }
    };

    getUserDetails = async (req, res, next) => {
        try {
            let user_id = {
                _id: mongoose.Types.ObjectId(req.params.user_id)
            }
            console.log('user_id', user_id);
            let userData = await userModel.aggregate([
                { $match: user_id },
                {
                    $lookup: {
                        from: 'projectsDetails',
                        foreignField: 'user_id',
                        localField: '_id',
                        as: 'projectData'
                    }
                },
                {
                    $unwind: {
                        path: '$projectData'
                    }
                },
                // {
                //     $project: {
                //         projectData: {
                //             first_name: '$first_name',
                //             last_name: '$last_name',
                //             email: '$email',
                //             assigned_to: '$projectData.assigned_to',
                //             usersDetails: '$projectData.user'
                //         }
                //     }
                // }
            ]);

            console.log('userData', userData);
            res.status(200).json(userData)
        }
        catch (error) {

        }
    };

    updateProjects = async (req, res, next) => {
        try {
            let address;
            let getProjectsData = await projectModel.findOne({
                "user_id": mongoose.Types.ObjectId(req.params.user_id)
            });

            console.log('getProjectsData',getProjectsData);
            address = getProjectsData.user[0].address[0];

            console.log('address',address);
            let updateData = await projectModel.updateMany(
                {
                    "user_id": mongoose.Types.ObjectId(req.params.user_id)
                },
                {
                    $set: {
                        "user.$[].address.$[e]": {
                            "city":"Thanjavur",
                            "pincode":"123",
                            "state":"TN"
                        }
                    }
                },
                {
                    arrayFilters: [
                        {
                            "e.city":`${address.city}`,
                            "e.pincode": `${address.pincode}`
                            
                        }
                    ],
                    upsert: true
                }

                
            )
                

            console.log('updateData',updateData);
            res.status(200).json(updateData)
        }

        catch (error) {

        }
    };

    deleteProjects = async (req, res, next) => {
        let id = req.params.user_id;

        let deleteProjects = await projectModel.deleteOne({
            user_id: mongoose.Types.ObjectId(id)
        })
        console.log('deleteProjects', deleteProjects);
    };
}

module.exports = new Projects();