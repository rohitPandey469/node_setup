const User = require("../models/User");

const getAllUsers = async (req, res) => {
  const users = await User.find({});
  if (!users) return res.status(204).json({ message: "No Users found" });
  res.json(users);
};

const deleteUser = async (req, res) => {
  if (!req?.body?.id)
    return res.status(400).json({ message: "ID parameter is required" });
  const user = await User.findOne({ _id: req.body.id }).exec();
  if (!user)
    return res
      .status(204)
      .json({ message: `No User matches ID ${req.body.id}` });

  const result = await user.deleteOne({ _id: req.body.id });
  res.status(201).json(result);
};

const getUser = async (req, res) => {
  if (!req?.params?.id)
    return res.status(400).json({ message: "ID parameter is required" });
  const user = await User.findOne({ _id: req.params.id }).exec();
  if (!user)
    return res
      .status(204)
      .json({ message: `No User matches ${req.params.id}` });
  res.json(user);
};

module.exports = {
  getAllUsers,
  deleteUser,
  getUser,
};
