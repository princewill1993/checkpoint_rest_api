import User from "../models/User.js";

const addNewUser = async (req, res) => {
  const { fullname, email, password, age } = req.body;

  // validation to be sure the values needed to add a user is correct
  if (!fullname) throw "Please provide Fullname ";
  console.log(fullname);

  if (!email) throw "Email is required";
  if (!password) throw "Password is required";
  if (password < 5) throw "Password must be at least 5 characters long";
  if (!age) throw "age is required";

  // check if this user already exist in the database
  const userAlreadyExists = await User.findOne({ email: email });
  if (userAlreadyExists !== null) {
    res.status(400).send({
      message: `Account with ${email} already exits`,
    });
    return;
  }

  // if all the needed fields are provided, proceed with creating the user in the database
  try {
    // create a new user
    const createUser = await User.create({
      fullname: fullname,
      email: email,
      password: password,
      age: age,
    });
    res.status(200).json({ message: "User added successfully" });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "Error occured",
      errorStatus: 500,
    });
  }
};

export default addNewUser;
