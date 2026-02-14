// userController.js
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({}).select("-password");
  res.json(users);
});

export { getUsers };


// Create user (ADMIN)
export const createUser = asyncHandler(async (req, res) => {
  const { name, email, password, role } = req.body;

  // check existing user
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // if user not exist (create new user)
  const user = await User.create({
    name,
    email,
    password,
    role,
    avatar: req.file ? req.file.path : "",
  });

  // res.status(201).json(user);
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      role: user.role,
      addresses: user.addresses,
    })
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

