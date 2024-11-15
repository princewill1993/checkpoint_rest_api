import User from "../models/User.js";

const editUser = async (req, res) => {
  // destructure the fields needed to run the update
  const { userId } = req.params;

  const { fullname, email, password, age } = req.body;

  // check if the user id is provided
  if (!userId) {
    res.status(400).json({
      message: "Please, the user id is required",
    });
  }

  // validate that the values needed to create the records are correct
  if (!fullname) {
    res.status(400).json({
      message: "please, provide your fullname to update your account",
    });
    return;
  }

  if (!email) {
    res.status(400).json({
      message: "Please provide your email to update your account",
    });
    return;
  }

  if (!password) {
    res.status(400).json({
      message: "Please provide your password",
    });
    return;
  }

  if (!age) {
    res.status(400).json({
      message: "Please provide your age",
    });
  }

  res.status(200).json({
    status: "success",
    message: "User edited successfully",
  });
  return;
};

export default editUser;
