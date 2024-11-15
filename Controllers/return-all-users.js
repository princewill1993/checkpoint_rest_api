import User from "../models/User.js";

const returnAllUsers = async (req, res) => {
  res.send(200).json({
    status: "success",
    message: "All users",
  });
};

export default returnAllUsers;
