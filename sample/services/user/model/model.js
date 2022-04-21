const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userDetails = new Schema(
  {
    user_id: {
      type: String
    },
    first_name: {
      type: String
    },
    last_name: {
      type: String
    },
    dob: {
      type: String
    },
    email: {
      type: String,
      unique: true
    },
    password: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("userDetails", userDetails, "userDetails");
