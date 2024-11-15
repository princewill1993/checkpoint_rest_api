import express from "express";
const router = express.Router();

import addNewUser from "../Controllers/add-new-user.js";
import editUser from "../Controllers/edit-user.js";
import removeUser from "../Controllers/remove-user.js";
import returnAllUsers from "../Controllers/return-all-users.js";

router.post("/add-new-user", addNewUser);
router.patch("/edit-user/:userId", editUser);
router.delete("/remove-user", removeUser);
router.get("/return-all-users", returnAllUsers);

export default router;
