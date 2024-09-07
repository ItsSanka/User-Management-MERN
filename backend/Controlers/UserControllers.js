const User = require("../Model/UserModel");

// Display data

const getAllUsers = async (req, res, next) => {
  let users;
  // get all users
  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
  }

  // not found

  if (!users) {
    return res.status(404).json({ message: "user not found!" });
  }

  // display users

  return res.status(200).json({ users });
};

// Data insert

const addUsers = async (req, res, next) => {
  const { name, gmail, age, address } = req.body;

  let users;

  try {
    users = new User({ name, gmail, age, address });
    await users.save();
  } catch (err) {
    console.log(err);
  }

  if (!users) {
    return res.status(404).json({ message: "unable to add users" });
  }

  return res.status(200).json({ users });
};

// get by id

const getById = async (req, res, next) => {
  const id = req.params.id;

  let user;

  try {
    user = await User.findById(id);
  } catch (err) {
    console.log(err);
  }

  if (!user) {
    return res.status(404).json({ message: "user not found" });
  }

  return res.status(200).json({ user });
};

// Update user details

const updateUser = async (req, res, next) => {
  const id = req.params.id;
  const { name, gmail, age, address } = req.body;

  let users;

  try {
    users = await User.findByIdAndUpdate(id, {
      name: name,
      gmail: gmail,
      age: age,
      address: address,
    });
    users = await users.save();
  } catch (err) {
    console.log(err);
  }

  if (!users) {
    return res.status(404).json({ message: "Unable to add user details" });
  }

  return res.status(200).json({ users });
};

// delete user details

const deleteUser = async (req, res, next) => {
  const id = req.params.id;

  let user;

  try {
    user = await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
  }

  if (!user) {
    return res.status(404).json({ message: "Unable to delete" });
  }

  return res.status(200).json({ user });
};

exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.getById = getById; 
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
