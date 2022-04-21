const mongoose = require("mongoose");
const projectModel = require("./model/model");
const userModel = require('../user/model/model');

class Projects {
    createProject = async (req,res,next) => {
        try {
            let query = {
                email: req.headers.loginUser.email
            }
            let getUsers = await userModel.findOne({query})
           
            req.body['user_id'] = getUsers.id;
            console.log('BODY',req.body);

            let projectData = await projectModel.insertMany(req.body);
            console.log('projectData',projectData);
            // console.log('getUsers',getUsers);
            res.status(200).json(projectData);  
        }

        catch(error) {
            res.status(400).json(error);
        }   
    };

    getUserDetails = async (req,res,next) => {
        try {
            let user_id = {
                _id: mongoose.Types.ObjectId(req.params.user_id)
            }
            console.log('user_id',user_id);
            let userData = await userModel.aggregate([
                {$match: user_id},
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
                        path:'$projectData'
                    }
                },
                {
                    $project: {
                        projectData: {
                            first_name: '$first_name',
                            last_name: '$last_name',
                            email: '$email',
                            assigned_to: '$projectData.assigned_to'
                        }
                    }
                }
            ]);

            console.log('userData',userData);
            res.status(200).json(userData)
        }
        catch(error) {

        }
    };
}

module.exports = new Projects();