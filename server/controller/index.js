const { User } = require("../db/schema");

async function getAllUsers(req, res) {
  const user = User.find({});
  res.status(200).json({ message: "Working fine" });
}

async function getUserById(req, res) {
  const id = req.params.id;

  try {
    const user = await User.findById(id);
    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.json({ err: "User not found" });
  }
}

async function getUserByIdAndEdit(req, res) {
  const id = req.params.id;
  const body = req.body;

  const updatedUser = await User.findByIdAndUpdate(id, {
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    password: body.password,
  });

  res.status(201).json({ message: "User Updated", updatedUser });
}

async function getUserByIdAndDelete(req, res) {
  const id = req.params.id;
  try {
    const deleteUser = await User.findByIdAndDelete(id);
    return res.status(200).json({ message: `User(${id}) deleted` });
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: "User not found/deleted" });
  }
}

async function createUser(req, res) {
  const body = req.body;

  if (!body.first_name || !body.last_name || !body.email || !body.password) {
    return res.status(400).json({ message: "All fields are required !!" });
  }

  const c_email = await User.findOne({ email: body.email });

  if (c_email)
    return res.status(401).json({ message: "Email Already Registered" });

  const result = await User.create({
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    password: body.password,
  });

  res.status(201).json({ message: "User Created" });
}

module.exports = {
  getAllUsers,
  getUserById,
  getUserByIdAndEdit,
  getUserByIdAndDelete,
  createUser,
};
