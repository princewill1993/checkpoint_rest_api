import User from "../models/User.js";

const removeUser = async (req, res) => {
  // destructure a part of the user info to use in deleting a particular user
  const { userId } = req.params;

  // check if the email is provided...
  if (!userId) {
    res.status(400).json({
      message: "Please provide a valid email",
    });
    return;
  }

  // check to see if the account exists
  const userAccount = await User.findOne({
    _id: userId,
  });

  if (userAccount === null) {
    res.status(400).json({
      message: "Account not found",
    });
    return;
  }

  try {
    await User.deleteOne({
      _id: userId,
    });
    res.status(200).json({
      message: "Account successfully deleted",
    });
    return;
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "Internet server error",
    });
  }
};

export default removeUser;
