const mongoose = require("mongoose");
const model = require("./model/model");

class User {
  userdatatoDB = async (req, res, next) => {
    try {
      delete req.body.token;
      console.log("BODY##", req.body);
      let userData = await model.insertMany(req.body);
      res.status(200).json(userData);
    } catch (e) {
      res.status(400).json(e);
    }
  };

  checkUsertoDB = async (req, res, next) => {
    try {
      let email = req.body.email;
      let password = req.body.password;
      let query = {
        email: email
      };
      console.log("email", email);
      let getUserData = await model.aggregate([{ $match: query }]);
      if (
        getUserData[0].email == email &&
        getUserData[0].password == password
      ) {
        let loginRes = {
          status: 200,
          success_msg: "User Login success"
        };
        res.status(loginRes.status).json(loginRes);
      }
    } catch (error) {
      res.status(400).json(error);
    }
  };

  getUser = async (req, res, next) => {
    try {
      let userId = {
        _id: mongoose.Types.ObjectId(req.params.user_id)
      };
      console.log("userId", userId);
      let getUser = await model.aggregate([
        { $match: userId },
        {
          $project: {
            first_name: "$first_name",
            email: "$email"
          }
        }
      ]);
      console.log("getUser", getUser);
      res.status(200).json(getUser);
    } catch (error) {
      res.status(400).json(error);
    }
  };

  getUsers = async (req, res, next) => {
    try {
        let getUsers = await model.find({});
        res.status(200).json(getUsers);
    } catch (error) {
        res.status(400).json(error);
    }
  };

  updateUser = async (req,res,next) => {
    try {
        let id = {
            _id: mongoose.Types.ObjectId(req.params.user_id)
        }

        let updateValue = {
            last_name: req.body.last_name
        }
        let updateData = await model.updateOne(id,updateValue);
        console.log('updateData',updateData);
        res.status(200).json(updateData);
    }
    catch(error) {
        res.status(400).json(error);
    }
  };

  deleteUser = async (req,res,next) => {
    try {
        let id = {
            _id: mongoose.Types.ObjectId(req.params.user_id)
        }

        let deleteData = await model.deleteOne(id);
        res.status(200).json(deleteData);
    }

    catch(error) {
        res.status(400).json(error);
    }
  };
}

module.exports = new User();
