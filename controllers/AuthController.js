const UserModel =require("../Models/userModel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = require("express").Router()



//Register

router.post("/register",async (req,res)=>{
// Register new user

  const salt = await bcrypt.genSalt(10);
 const hashedPass = await bcrypt.hash(req.body.password, salt);
 req.body.password = hashedPass 
 const newUser = new UserModel(req.body);
 const {username} = req.body
 try {
   // addition new
   const oldUser = await UserModel.findOne({ username });

   if (oldUser)
     return res.status(400).json({ message: "User already exists" });

   // changed
   const user = await newUser.save();
   const token = jwt.sign(
     { username: user.username, id: user._id },
     process.env.JWTKEY,
     { expiresIn: "1h" }
   );
   res.status(200).json({ user, token });
 } catch (error) {
   res.status(500).json({ message: error.message });
   
   
 }; 

})




/*
  const newUser = new UserModel(req.body)
  const savedUser= await newUser.save()
  try{
    res.status(200).json(savedUser)
  }catch{
    res.status
  }
  */
// Login User
  router.post("/login",async (req,res)=>{



// Changed

  const { username, password } = req.body;

  try {
    const user = await UserModel.findOne({ username: username });

    if (user) {
      const validity = await bcrypt.compare(password, user.password);

      if (!validity) {
        res.status(400).json("wrong password");
      } else {
        const token = jwt.sign(
          { username: user.username, id: user._id },
          process.env.JWTKEY,
          { expiresIn: "1h" }
        );
        res.status(200).json({ user, token });
      }
    } else {
      res.status(404).json("User not found");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router