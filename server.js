// import express
import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import router from "./Routes/userRoutes.js";

// creating an express app
const app = express();

const PORT = 3200;

// To allow for interaction between req and res...
app.use(express.json());
app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("Hello, the server is up and running");
});

// ROUTES...

// // return a user
// app.get("/return-all-users", (req, res) => {
//   res.status(200).send("All users returned successfully");
// });

// // add a user
// app.post("/add-new-user", (req, res) => {
//   res.status(200).send("User added successfully");
// });

// // editing a user
// app.put("/edit-user", (req, res) => {
//   res.status(200).send("User edited successfully");
// });

// //Deleting user
// app.delete("/remove-user", (req, res) => {
//   res.status(200).send("User deleted successfully");
// });

// connect to database
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CON_ST);
    console.log("Connected to databse");
    console.log(`Server is running on http://localhost:${PORT}`);
  } catch (err) {
    console.log(err);
  }
};

app.listen(PORT, () => {
  connectToDatabase();
});
