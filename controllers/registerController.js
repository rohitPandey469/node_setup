const User = require("../models/User");
const bcrypt = require("bcrypt");

const handleNewUser = async (req, res) => {
  const { user, pwd } = req.body;
  if (!user || !pwd)
    return res.status(400).json({ message: "User and Password is required" });

  // check for duplicate usernames in the db
  const duplicate = await User.findOne({ username: user }).exec();
  if (duplicate) return res.status(409); //conflict

  try {
    // encrypt the password
    const hashedPwd = await bcrypt.hash(pwd, 12);

    // create and store the new user
    const result = await User.create({
      username: user,
      password: hashedPwd,
    });

    // const newUser=new User({
    //   username: user,
    //   password: hashedPwd,     // Method to create
    // })
    // newUser.save();

    res.status(201).json({ success: `New User ${user} created!` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = { handleNewUser };
