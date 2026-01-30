// control login
import asyncHandler from "express-async-handler";
const loginUser = (req, res)=> {
  res.send("login is working!!!");
};

const registerUser = asyncHandler(async(req, res)=> {
  const {name, email, password, role} = req.body;
  // const bodyProps = req.body;
  // res.send("Register is working");
  // console.log(bodyProps);
  console.log(name, email, password, role);
});

export {loginUser, registerUser};

