const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectsDetails = new Schema({
  project_name: {
    type: String
  },

  assigned_to: {
    type: String
  },

  assigned_date: {
    type: String
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userDetails"
  },
  user: [
    {
      address: [
        {
          street: {
            type:String
          },
          city: {
            type: String
          },
          pincode: {
            type:String
          },
          state: {
            type: String
          }
        }
      ]
    }
  ]
},
{
  timestamps: true
});

module.exports = mongoose.model("projectsDetails",projectsDetails,"projectsDetails")
